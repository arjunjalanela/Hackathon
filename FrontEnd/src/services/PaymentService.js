import API from "./api";

// MAKE PAYMENT

export const makePayment = async (
    paymentData
) => {

    const response = await API.post(
        "/payments",
        paymentData
    );

    return response.data;
};