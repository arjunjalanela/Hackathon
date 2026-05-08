import API from "./api";

// BOOK ROOM

export const bookRoom = async (
    bookingData
) => {

    const response = await API.post(
        "/bookings/book",
        bookingData
    );

    return response.data;
};

// GET USER BOOKINGS

export const getBookingsByUser = async (
    userId
) => {

    const response = await API.get(
        `/bookings/user/${userId}`
    );

    return response.data;
};

// CANCEL BOOKING

export const cancelBooking = async (
    bookingId
) => {

    const response = await API.delete(
        `/bookings/cancel/${bookingId}`
    );

    return response.data;
};