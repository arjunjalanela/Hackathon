package com.project.backend.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class SearchHotelsRequestDTO {

    private String location;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;
}