package com.project.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class RoomResponseDTO {

    private Long roomId;

    private String roomNumber;

    private String roomType;

    private Double price;

    private Boolean available;
}