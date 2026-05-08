import api from "./api";

// CREATE BOOKING

export const createBooking = async (

    roomId,
    checkInDate,
    checkOutDate

) => {

    const userId =
        localStorage.getItem("userId");

    const response = await api.post(

        "/bookings/book",

        {
            userId,
            roomId,
            checkInDate,
            checkOutDate
        }
    );

    return response.data;
};

// GET USER BOOKINGS

export const getMyBookings = async () => {

    const userId =
        localStorage.getItem("userId");

    const response = await api.get(

        `/bookings/user/${userId}`
    );

    return response.data;
};

// CANCEL BOOKING

export const deleteBooking = async (

    bookingId

) => {

    const response = await api.delete(

        `/bookings/cancel/${bookingId}`
    );

    return response.data;
};