package com.project.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private int price;

    @Enumerated(EnumType.STRING)

    private BookingStatus status;

    @ManyToOne
    @JoinColumn(name = "user_id")

    private User user;

    @ManyToOne
    @JoinColumn(name = "room_id")

    private Room room;
    @JsonIgnore
    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)

    private Payment payment;

    // ENUM INSIDE ENTITY

    public enum BookingStatus {

        PENDING,
        CONFIRMED,
        CANCELLED
    }
}