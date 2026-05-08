package com.project.backend.controller;

import com.project.backend.dto.HotelResponseDTO;
import com.project.backend.dto.RoomResponseDTO;
import com.project.backend.entities.Hotel;
import com.project.backend.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/hotels")
@RequiredArgsConstructor

public class HotelController {

    private final HotelService hotelService;

    // CREATE HOTEL

    @PostMapping("/create")

    public Hotel createHotel(
            @RequestBody Hotel hotel
    ) {

        return hotelService.createHotel(hotel);
    }

    // SEARCH HOTELS

    @GetMapping("/search")

    public List<HotelResponseDTO> searchHotels(

            @RequestParam String location,

            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate checkInDate,

            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate checkOutDate
    ) {

        return hotelService.searchHotels(
                location,
                checkInDate,
                checkOutDate
        );
    }
    // GET AVAILABLE ROOMS OF HOTEL

    @GetMapping("/{hotelId}/rooms")

    public List<RoomResponseDTO> getAvailableRooms(

            @PathVariable Long hotelId,

            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate checkInDate,

            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate checkOutDate
    ) {

        return hotelService.getAvailableRooms(
                hotelId,
                checkInDate,
                checkOutDate
        );
    }
}