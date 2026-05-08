package com.project.backend.exception;


public class NoRoomsAvailableException
        extends RuntimeException {

    public NoRoomsAvailableException(String message) {

        super(message);
    }
}