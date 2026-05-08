import API from "./api";

// CREATE BOOKING

export const createBooking = async (

    roomId,
    checkIn,
    checkOut

) => {

    const res = await API.post(

        "/bookings",

        {
            roomId,
            checkIn,
            checkOut
        }
    );

    return res.data;
};

// GET MY BOOKINGS

export const getMyBookings = async () => {

    const res = await API.get(

        "/bookings/my"
    );

    return res.data;
};

// CANCEL BOOKING

export const deleteBooking = async (id) => {

    const res = await API.delete(

        `/bookings/${id}`
    );

    return res.data;
};