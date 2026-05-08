package com.project.backend.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class BookingResponseDTO {

    private Long bookingId;

    private String hotelName;

    private String roomNumber;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private int price;

    private String status;
}