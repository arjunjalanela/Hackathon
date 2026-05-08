import { useEffect, useState } from "react";

import {

    getMyBookings,
    deleteBooking

} from "../services/BookingService";
import "../styles/MyBookings.css";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        try {

            const data =
                await getMyBookings();

            console.log(data);

            setBookings(data);

        } catch (error) {

            console.log(error);

            alert("Failed To Fetch Bookings");
        }
    };

    const handleCancel = async (id) => {

        try {

            await deleteBooking(id);

            alert("Booking Cancelled");

            fetchBookings();

        } catch (error) {

            console.log(error);

            alert("Cancellation Failed");
        }
    };

    return (

        <div className="bookings-container">
            <h1>My Bookings</h1>

            {bookings.length === 0 && (
                <h3 className="no-bookings">
                    No Bookings Found
                </h3>
            )}

            <div className="bookings-list">
                {bookings.map((booking) => (
                    <div
                        className="booking-card"
                        key={booking.bookingId}
                    >
                        <h2>{booking.hotelName}</h2>
                        <p>
                            Room Number: {booking.roomNumber}
                        </p>
                        <p>
                            Price: ₹{booking.price}
                        </p>
                        <p>
                            Check In: {booking.checkInDate}
                        </p>
                        <p>
                            Check Out: {booking.checkOutDate}
                        </p>
                        <p>
                            Status: {booking.status}
                        </p>

                        {booking.status ===
                            "CONFIRMED" && (
                            <button
                                onClick={() =>
                                    handleCancel(
                                        booking.bookingId
                                    )
                                }
                            >
                                Cancel Booking
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyBookings;