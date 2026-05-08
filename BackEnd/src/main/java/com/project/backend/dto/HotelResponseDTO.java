package com.project.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class HotelResponseDTO {

    private Long hotelId;

    private String hotelName;

    private String location;

    private long totalRooms;

    private long availableRooms;

    private long price;
}