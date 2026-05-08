package com.project.backend.service;

import com.project.backend.dto.AuthResponseDTO;
import com.project.backend.dto.LoginRequestDTO;
import com.project.backend.entities.User;
import com.project.backend.respository.UserRepository;
import com.project.backend.security.JwtService;
import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.
        AuthenticationManager;

import org.springframework.security.authentication.
        UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.
        PasswordEncoder;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class AuthService {

    private final UserRepository userRepository;

    private final JwtService jwtService;

    private final AuthenticationManager
            authenticationManager;

    private final PasswordEncoder
            passwordEncoder;

    // REGISTER

    public AuthResponseDTO register(
            User user
    ) {

        user.setPassword(

                passwordEncoder.encode(
                        user.getPassword()
                )
        );

        user.setRole("ROLE_USER");

        User savedUser =
                userRepository.save(user);

        String token =
                jwtService.generateToken(
                        savedUser.getEmail()
                );

        return AuthResponseDTO.builder()

                .token(token)

                .role(savedUser.getRole())

                .email(savedUser.getEmail())

                .build();
    }

    // LOGIN

    public AuthResponseDTO login(

            LoginRequestDTO request
    ) {

        authenticationManager.authenticate(

                new UsernamePasswordAuthenticationToken(

                        request.getEmail(),

                        request.getPassword()
                )
        );

        User user = userRepository

                .findByEmail(request.getEmail())

                .orElseThrow(() ->

                        new RuntimeException(
                                "User Not Found"
                        )
                );

        String token = jwtService.generateToken(
                user.getEmail()
        );

        return AuthResponseDTO.builder()

                .token(token)

                .role(user.getRole())

                .email(user.getEmail())

                .build();
    }
}