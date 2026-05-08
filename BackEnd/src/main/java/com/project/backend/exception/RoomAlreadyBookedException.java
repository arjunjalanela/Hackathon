package com.project.backend.exception;


public class RoomAlreadyBookedException
        extends RuntimeException {

    public RoomAlreadyBookedException(String message) {

        super(message);
    }
}
