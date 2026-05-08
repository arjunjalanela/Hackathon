package com.project.backend.service;

import com.project.backend.entities.User;
import com.project.backend.respository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class UserService {

    private final UserRepository userRepository;

    // CREATE USER

    public User createUser(User user) {

        return userRepository.save(user);
    }
}