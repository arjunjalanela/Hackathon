package com.project.backend.controller;

import com.project.backend.entities.User;
import com.project.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor

public class UserController {

    private final UserService userService;

    // CREATE USER

    @PostMapping("/create")

    public User createUser(
            @RequestBody User user
    ) {

        return userService.createUser(user);
    }
}