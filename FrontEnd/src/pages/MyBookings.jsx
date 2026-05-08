import { useEffect, useState } from "react";

import {

    getMyBookings,
    deleteBooking

} from "../services/BookingService";

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

        <div style={{ padding: "20px" }}>

            <h1>My Bookings</h1>

            {

                bookings.length === 0 && (

                    <h3>No Bookings Found</h3>
                )
            }

            {

                bookings.map((booking) => (

                    <div

                        key={booking.bookingId}

                        style={{

                            border: "1px solid gray",

                            padding: "15px",

                            marginBottom: "15px",

                            borderRadius: "10px"
                        }}
                    >

                        <h2>

                            {
                                booking.hotelName
                            }

                        </h2>

                        <p>

                            Room Number:

                            {
                                booking.roomNumber
                            }

                        </p>

                        <p>

                            Room Type:

                            {
                                booking.roomType
                            }

                        </p>

                        <p>

                            Price:

                            ₹{
                                booking.price
                            }

                        </p>

                        <p>

                            Check In:

                            {
                                booking.checkIn
                            }

                        </p>

                        <p>

                            Check Out:

                            {
                                booking.checkOut
                            }

                        </p>

                        <p>

                            Status:

                            {
                                booking.status
                            }

                        </p>

                        {

                            booking.status ===
                            "BOOKED" && (

                                <button

                                    onClick={() =>
                                        handleCancel(
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