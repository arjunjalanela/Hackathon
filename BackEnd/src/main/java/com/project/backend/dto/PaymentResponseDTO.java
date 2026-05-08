package com.project.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PaymentResponseDTO {

    private Long paymentId;

    private Long bookingId;

    private Double amount;

    private String paymentMethod;

    private String paymentStatus;
}