package com.project.backend.entities;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String roomNumber;

    private String roomType;

    private Double price;

    private Boolean available;

    @ManyToOne
    @JoinColumn(name = "hotel_id")

    private Hotel hotel;

    @OneToMany(mappedBy = "room")

    private List<Booking> bookings;
}