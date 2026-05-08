package com.project.backend.exception;



public class RoomNotFoundException
        extends RuntimeException {

    public RoomNotFoundException(String message) {

        super(message);
    }
}