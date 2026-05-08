package com.project.backend.service;

import com.project.backend.dto.PaymentRequestDTO;
import com.project.backend.dto.PaymentResponseDTO;
import com.project.backend.entities.Booking;
import com.project.backend.entities.Payment;
import com.project.backend.respository.BookingRepository;
import com.project.backend.respository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor

public class PaymentService {

    private final PaymentRepository paymentRepository;

    private final BookingRepository bookingRepository;

    // MAKE PAYMENT

    public PaymentResponseDTO makePayment(

            PaymentRequestDTO request
    ) {

        Booking booking =
                bookingRepository.findById(
                                request.getBookingId())

                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Booking Not Found"));

        Payment payment = Payment.builder()

                .amount(
                        (double) booking.getPrice())

                .paymentMethod(
                        request.getPaymentMethod())

                .paymentTime(
                        LocalDateTime.now())

                .status(
                        Payment.PaymentStatus.SUCCESS)

                .booking(booking)

                .build();

        Payment savedPayment =
                paymentRepository.save(payment);

        booking.setPayment(savedPayment);

        bookingRepository.save(booking);

        return PaymentResponseDTO.builder()

                .paymentId(
                        savedPayment.getId())

                .bookingId(
                        booking.getId())

                .amount(
                        savedPayment.getAmount())

                .paymentMethod(
                        savedPayment.getPaymentMethod())

                .paymentStatus(
                        savedPayment.getStatus().name())

                .build();
    }
}