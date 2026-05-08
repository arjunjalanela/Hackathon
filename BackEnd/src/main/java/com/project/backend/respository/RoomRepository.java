package com.project.backend.respository;


import com.project.backend.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository
        extends JpaRepository<Room, Long> {

    List<Room> findByAvailableTrue();

    List<Room> findByHotelId(Long hotelId);
}