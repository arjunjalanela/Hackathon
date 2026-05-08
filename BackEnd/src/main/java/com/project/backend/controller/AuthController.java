package com.project.backend.controller;

import com.project.backend.dto.AuthResponseDTO;
import com.project.backend.dto.LoginRequestDTO;
import com.project.backend.entities.User;
import com.project.backend.service.AuthService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor

public class AuthController {

    private final AuthService authService;

    // REGISTER

    @PostMapping("/register")

    public AuthResponseDTO register(

            @RequestBody
            User user
    ) {

        return authService.register(user);
    }

    // LOGIN

    @PostMapping("/login")

    public AuthResponseDTO login(

            @RequestBody
            LoginRequestDTO request
    ) {

        return authService.login(request);
    }
}