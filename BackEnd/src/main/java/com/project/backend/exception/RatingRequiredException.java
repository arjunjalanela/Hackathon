package com.project.backend.exception;

public class RatingRequiredException extends RuntimeException{
    public RatingRequiredException(){
        super("Rating Required");
    }
}
