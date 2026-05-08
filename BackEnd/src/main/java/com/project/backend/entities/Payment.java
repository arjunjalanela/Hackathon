package com.project.backend.entities;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private Double amount;

    private String paymentMethod;

    @Enumerated(EnumType.STRING)

    private PaymentStatus status;

    private LocalDateTime paymentTime;

    @OneToOne
    @JoinColumn(name = "booking_id")

    private Booking booking;

    // ENUM INSIDE ENTITY

    public enum PaymentStatus {

        PENDING,
        SUCCESS,
        FAILED
    }
}