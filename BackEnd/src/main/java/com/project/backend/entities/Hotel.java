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

public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;

    private String location;

    private String description;

    private Double rating;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)

    private List<Room> rooms;
}