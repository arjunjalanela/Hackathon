package com.project.backend.exception;

public class NoBookingsFoundException
        extends RuntimeException {

    public NoBookingsFoundException(String message) {

        super(message);
    }
}