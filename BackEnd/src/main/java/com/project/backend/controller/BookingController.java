package com.project.backend.controller;

import com.project.backend.dto.BookingRequestDTO;
import com.project.backend.dto.BookingResponseDTO;
import com.project.backend.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor

public class BookingController {

    private final BookingService bookingService;

    // BOOK ROOM

    @PostMapping("/book")

    public BookingResponseDTO bookRoom(

            @RequestBody
            BookingRequestDTO request
    ) {

        return bookingService.bookRoom(request);
    }

    // CANCEL BOOKING

    @DeleteMapping("/cancel/{bookingId}")

    public String cancelBooking(

            @PathVariable Long bookingId
    ) {

        return bookingService
                .cancelBooking(bookingId);
    }

    // GET USER BOOKINGS

    @GetMapping("/user/{userId}")

    public List<BookingResponseDTO>
    getBookingsByUser(

            @PathVariable Long userId
    ) {

        return bookingService
                .getBookingsByUser(userId);
    }
}