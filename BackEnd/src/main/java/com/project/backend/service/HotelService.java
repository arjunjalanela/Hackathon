package com.project.backend.service;

import com.project.backend.dto.HotelResponseDTO;
import com.project.backend.dto.RoomResponseDTO;
import com.project.backend.entities.Booking;
import com.project.backend.entities.Hotel;
import com.project.backend.entities.Room;
import com.project.backend.respository.BookingRepository;
import com.project.backend.respository.HotelRepository;
import com.project.backend.respository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor

public class HotelService {

    private final HotelRepository hotelRepository;

    private final RoomRepository roomRepository;

    private final BookingRepository bookingRepository;

    // SEARCH HOTELS

    public List<HotelResponseDTO> searchHotels(
            String location,
            LocalDate checkInDate,
            LocalDate checkOutDate
    ) {

        List<Hotel> hotels =
                hotelRepository.findByLocation(location);

        List<HotelResponseDTO> response =
                new ArrayList<>();

        for (Hotel hotel : hotels) {

            int availableRooms = 0;

            for (Room room : hotel.getRooms()) {

                List<Booking> bookings =
                        room.getBookings();

                boolean roomBooked = false;

                for (Booking booking : bookings) {

                    if (
                            checkInDate.isBefore(
                                    booking.getCheckOutDate())

                                    &&

                                    checkOutDate.isAfter(
                                            booking.getCheckInDate())
                    ) {

                        roomBooked = true;
                        break;
                    }
                }

                if (!roomBooked) {

                    availableRooms++;
                }
            }

            if (availableRooms > 0) {

                response.add(

                        HotelResponseDTO.builder()

                                .hotelId(hotel.getId())

                                .hotelName(hotel.getName())

                                .location(hotel.getLocation())

                                .totalRooms(hotel.getTotalRooms())

                                .availableRooms(availableRooms)

                                .price(hotel.getPrice())

                                .build()
                );
            }
        }

        return response;
    }
    // GET AVAILABLE ROOMS OF HOTEL

    public List<RoomResponseDTO> getAvailableRooms(

            Long hotelId,
            LocalDate checkInDate,
            LocalDate checkOutDate
    ) {

        Hotel hotel = hotelRepository.findById(hotelId)

                .orElseThrow(() ->
                        new RuntimeException(
                                "Hotel Not Found"));

        List<RoomResponseDTO> response =
                new ArrayList<>();

        for (Room room : hotel.getRooms()) {

            boolean roomBooked = false;

            for (Booking booking : room.getBookings()) {

                boolean overlap =

                        checkInDate.isBefore(
                                booking.getCheckOutDate())

                                &&

                                checkOutDate.isAfter(
                                        booking.getCheckInDate());

                if (overlap) {

                    roomBooked = true;
                    break;
                }
            }

            if (!roomBooked) {

                response.add(

                        RoomResponseDTO.builder()

                                .roomId(room.getId())

                                .roomNumber(
                                        room.getRoomNumber())

                                .roomType(
                                        room.getRoomType())

                                .price(
                                        room.getPrice())

                                .available(
                                        room.getAvailable())

                                .build()
                );
            }
        }

        return response;
    }

    // CREATE HOTEL WITH ROOMS

    public Hotel createHotel(Hotel hotel) {

        List<Room> rooms = new ArrayList<>();

        for (int i = 1; i <= hotel.getTotalRooms(); i++) {

            Room room = Room.builder()

                    .roomNumber("ROOM-" + i)

                    .roomType("DELUXE")

                    .price((double) hotel.getPrice())

                    .available(true)

                    .hotel(hotel)

                    .build();

            rooms.add(room);
        }

        hotel.setRooms(rooms);

        return hotelRepository.save(hotel);
    }
}