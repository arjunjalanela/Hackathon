package com.project.backend.exception;
public class HotelNotFoundException
        extends RuntimeException {

    public HotelNotFoundException(String message) {

        super(message);
    }
}