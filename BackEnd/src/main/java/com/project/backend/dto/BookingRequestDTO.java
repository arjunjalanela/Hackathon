package com.project.backend.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class BookingRequestDTO {

    private Long userId;

    private Long roomId;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

}