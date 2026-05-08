package com.project.backend.exception;

public class InvalidBookingDateException
        extends RuntimeException {

    public InvalidBookingDateException(String message) {

        super(message);
    }
}