package com.project.backend.controller;

import com.project.backend.dto.PaymentRequestDTO;
import com.project.backend.dto.PaymentResponseDTO;
import com.project.backend.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor

public class PaymentController {

    private final PaymentService paymentService;

    // MAKE PAYMENT

    @PostMapping

    public PaymentResponseDTO makePayment(

            @RequestBody
            PaymentRequestDTO request
    ) {

        return paymentService.makePayment(request);
    }
}