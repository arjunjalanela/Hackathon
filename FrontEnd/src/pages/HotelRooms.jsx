import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { getAvailableRooms } from "../services/HotelService";

import { bookRoom } from "../services/BookingService";

function HotelRooms() {

    const location = useLocation();

    const hotelId =
        window.location.pathname.split("/")[2];

    const { checkInDate, checkOutDate } =
        location.state;

    const [rooms, setRooms] = useState([]);

    useEffect(() => {

        fetchRooms();

    }, []);

    const fetchRooms = async () => {

        try {

            const data =
                await getAvailableRooms(

                    hotelId,

                    checkInDate,

                    checkOutDate
                );

            setRooms(data);

        } catch (error) {

            console.log(error);

            alert("Failed To Fetch Rooms");
        }
    };

    const handleBookRoom = async (roomId) => {

        try {

            const userId =
                localStorage.getItem("userId");

            const bookingData = {

                userId,

                roomId,

                checkInDate,

                checkOutDate
            };

            const response =
                await bookRoom(bookingData);

            alert(

                `Room Booked Successfully
                 Booking ID: ${response.bookingId}`
            );

            fetchRooms();

        } catch (error) {

            console.log(error);

            alert("Booking Failed");
        }
    };

    return (

        <div
            style={{
                padding: "30px"
            }}
        >

            <h1>

                Available Rooms 🛏️

            </h1>

            {

                rooms.map((room) => (

                    <div

                        key={room.roomId}

                        style={{
                            border: "1px solid black",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>

                            {room.roomNumber}

                        </h2>

                        <p>

                            Room Type:
                            {" "}
                            {room.roomType}

                        </p>

                        <p>

                            Price:
                            {" "}
                            ₹{room.price}

                        </p>

                        <button

                            onClick={() =>
                                handleBookRoom(
                                    room.roomId
                                )
                            }

                        >

                            Book Room

                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default HotelRooms;