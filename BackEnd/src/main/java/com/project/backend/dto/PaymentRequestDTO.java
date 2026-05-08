package com.project.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PaymentRequestDTO {

    private Long bookingId;

    private String paymentMethod;
}