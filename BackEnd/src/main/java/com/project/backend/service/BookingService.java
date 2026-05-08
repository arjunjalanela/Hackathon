package com.project.backend.service;

import com.project.backend.dto.BookingRequestDTO;
import com.project.backend.dto.BookingResponseDTO;
import com.project.backend.entities.Booking;
import com.project.backend.entities.Room;
import com.project.backend.entities.User;
import com.project.backend.respository.BookingRepository;
import com.project.backend.respository.RoomRepository;
import com.project.backend.respository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor

public class BookingService {

    private final BookingRepository bookingRepository;

    private final UserRepository userRepository;

    private final RoomRepository roomRepository;

    // BOOK ROOM

    public BookingResponseDTO bookRoom(
            BookingRequestDTO request
    ) {

        User user = userRepository.findById(
                request.getUserId()
        ).orElseThrow(() ->
                new RuntimeException("User Not Found"));

        Room room = roomRepository.findById(
                request.getRoomId()
        ).orElseThrow(() ->
                new RuntimeException("Room Not Found"));

        // CHECK ROOM AVAILABILITY

        for (Booking booking : room.getBookings()) {

            boolean overlap =

                    request.getCheckInDate().isBefore(
                            booking.getCheckOutDate())

                            &&

                            request.getCheckOutDate().isAfter(
                                    booking.getCheckInDate());

            if (overlap) {

                throw new RuntimeException(
                        "Room Already Booked");
            }
        }

        int totalPrice = room.getPrice().intValue();

        Booking booking = Booking.builder()

                .checkInDate(request.getCheckInDate())

                .checkOutDate(request.getCheckOutDate())

                .price(totalPrice)

                .status(
                        Booking.BookingStatus.CONFIRMED
                )

                .user(user)

                .room(room)

                .build();

        Booking savedBooking =
                bookingRepository.save(booking);

        return BookingResponseDTO.builder()

                .bookingId(savedBooking.getId())

                .hotelName(
                        room.getHotel().getName())

                .roomNumber(
                        room.getRoomNumber())

                .checkInDate(
                        savedBooking.getCheckInDate())

                .checkOutDate(
                        savedBooking.getCheckOutDate())

                .price(savedBooking.getPrice())

                .status(
                        savedBooking.getStatus().name())

                .build();
    }

    // CANCEL BOOKING

    public String cancelBooking(Long bookingId) {

        Booking booking =
                bookingRepository.findById(bookingId)

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Booking Not Found"));

        booking.setStatus(
                Booking.BookingStatus.CANCELLED
        );

        bookingRepository.save(booking);

        return "Booking Cancelled Successfully";
    }

    // VIEW BOOKINGS BY USER

    public List<BookingResponseDTO>
    getBookingsByUser(Long userId) {

        List<Booking> bookings =
                bookingRepository.findByUserId(userId);

        List<BookingResponseDTO> response =
                new ArrayList<>();

        for (Booking booking : bookings) {

            response.add(

                    BookingResponseDTO.builder()

                            .bookingId(booking.getId())

                            .hotelName(
                                    booking.getRoom()
                                            .getHotel()
                                            .getName())

                            .roomNumber(
                                    booking.getRoom()
                                            .getRoomNumber())

                            .checkInDate(
                                    booking.getCheckInDate())

                            .checkOutDate(
                                    booking.getCheckOutDate())

                            .price(
                                    booking.getPrice())

                            .status(
                                    booking.getStatus()
                                            .name())

                            .build()
            );
        }

        return response;
    }
}