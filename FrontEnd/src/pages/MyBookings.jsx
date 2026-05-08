import { useEffect, useState } from "react";

import { cancelBooking, getBookingsByUser }
from "../services/BookingService";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        try {

            const userId =
                localStorage.getItem("userId");

            const data =
                await getBookingsByUser(userId);

            setBookings(data);

        } catch (error) {

            console.log(error);

            alert("Failed To Fetch Bookings");
        }
    };

    const handleCancelBooking = async (
        bookingId
    ) => {

        try {

            await cancelBooking(bookingId);

            alert(
                "Booking Cancelled Successfully"
            );

            fetchBookings();

        } catch (error) {

            console.log(error);

            alert("Cancellation Failed");
        }
    };

    return (

        <div
            style={{
                padding: "30px"
            }}
        >

            <h1>

                My Bookings 📖

            </h1>

            {

                bookings.map((booking) => (

                    <div

                        key={booking.bookingId}

                        style={{
                            border: "1px solid black",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>

                            {booking.hotelName}

                        </h2>

                        <p>

                            Room Number:
                            {" "}
                            {booking.roomNumber}

                        </p>

                        <p>

                            Check In:
                            {" "}
                            {booking.checkInDate}

                        </p>

                        <p>

                            Check Out:
                            {" "}
                            {booking.checkOutDate}

                        </p>

                        <p>

                            Price:
                            {" "}
                            ₹{booking.price}

                        </p>

                        <p>

                            Status:
                            {" "}
                            {booking.status}

                        </p>

                        {

                            booking.status !==
                            "CANCELLED"

                            &&

                            (

                                <button

                                    onClick={() =>
                                        handleCancelBooking(
                                            booking.bookingId
                                        )
                                    }

                                >

                                    Cancel Booking

                                </button>
                            )
                        }

                    </div>
                ))
            }

        </div>
    );
}

export default MyBookings;