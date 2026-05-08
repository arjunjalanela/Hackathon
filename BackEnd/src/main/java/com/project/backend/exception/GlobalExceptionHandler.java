package com.project.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {



//    @ExceptionHandler(RatingRequiredException.class)
//    public ResponseEntity<?> handleRatingRequiredException(RatingRequiredException e){
//    ErrorResponse error = ErrorResponse.builder()
//            .status(HttpStatus.BAD_REQUEST.value())
//            .message(e.getMessage())
//            .build();
//    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
//    }

    // HOTEL NOT FOUND

    @ExceptionHandler(HotelNotFoundException.class)

    public ResponseEntity<ErrorResponse>
    handleHotelNotFoundException(
            HotelNotFoundException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.NOT_FOUND.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.NOT_FOUND
        );
    }

    // HOTEL CREATION FAILED

    @ExceptionHandler(HotelCreationException.class)

    public ResponseEntity<ErrorResponse>
    handleHotelCreationException(
            HotelCreationException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.INTERNAL_SERVER_ERROR.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }

    // INVALID DATE

    @ExceptionHandler(InvalidDateException.class)

    public ResponseEntity<ErrorResponse>
    handleInvalidDateException(
            InvalidDateException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.BAD_REQUEST.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.BAD_REQUEST
        );
    }

    // NO ROOMS AVAILABLE

    @ExceptionHandler(NoRoomsAvailableException.class)

    public ResponseEntity<ErrorResponse>
    handleNoRoomsAvailableException(
            NoRoomsAvailableException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.NOT_FOUND.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.NOT_FOUND
        );
    }

    // ROOM NOT FOUND

    @ExceptionHandler(RoomNotFoundException.class)

    public ResponseEntity<ErrorResponse>
    handleRoomNotFoundException(
            RoomNotFoundException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.NOT_FOUND.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.NOT_FOUND
        );
    }

    // USER NOT FOUND

    @ExceptionHandler(UserNotFoundException.class)

    public ResponseEntity<ErrorResponse>
    handleUserNotFoundException(
            UserNotFoundException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.NOT_FOUND.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.NOT_FOUND
        );
    }

    // ROOM ALREADY BOOKED

    @ExceptionHandler(RoomAlreadyBookedException.class)

    public ResponseEntity<ErrorResponse>
    handleRoomAlreadyBookedException(
            RoomAlreadyBookedException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.BAD_REQUEST.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.BAD_REQUEST
        );
    }

    // BOOKING NOT FOUND

    @ExceptionHandler(BookingNotFoundException.class)

    public ResponseEntity<ErrorResponse>
    handleBookingNotFoundException(
            BookingNotFoundException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.NOT_FOUND.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.NOT_FOUND
        );
    }

    // INVALID BOOKING DATE

    @ExceptionHandler(InvalidBookingDateException.class)

    public ResponseEntity<ErrorResponse>
    handleInvalidBookingDateException(
            InvalidBookingDateException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.BAD_REQUEST.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.BAD_REQUEST
        );
    }

    // NO BOOKINGS FOUND

    @ExceptionHandler(NoBookingsFoundException.class)

    public ResponseEntity<ErrorResponse>
    handleNoBookingsFoundException(
            NoBookingsFoundException ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.NOT_FOUND.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.NOT_FOUND
        );
    }

    // GENERAL EXCEPTION

    @ExceptionHandler(Exception.class)

    public ResponseEntity<ErrorResponse>
    handleGeneralException(
            Exception ex
    ) {

        ErrorResponse error =
                ErrorResponse.builder()

                        .message(ex.getMessage())

                        .status(HttpStatus.INTERNAL_SERVER_ERROR.value())

                        .timestamp(LocalDateTime.now())

                        .build();

        return new ResponseEntity<>(
                error,
                HttpStatus.INTERNAL_SERVER_ERROR
        );
    }
}