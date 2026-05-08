package com.project.backend.respository;



import com.project.backend.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotelRepository
        extends JpaRepository<Hotel, Long> {

    List<Hotel> findByLocation(String location);
}