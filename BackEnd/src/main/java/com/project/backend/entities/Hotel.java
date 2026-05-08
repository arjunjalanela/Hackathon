package com.project.backend.entities;



import com.fasterxml.jackson.annotation.JsonIgnore;
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

    private long totalRooms;
    private long price;
    @JsonIgnore
    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)

    private List<Room> rooms;
}