import { useEffect, useState } from "react";

import {

    useParams,
    useLocation

} from "react-router-dom";

import {

    getHotelById,
    getRoomsByHotel

} from "../services/HotelService";

import {

    createBooking

} from "../services/BookingService";

function HotelDetails() {

    const { id } = useParams();

    const location = useLocation();

    const {

        checkIn,
        checkOut

    } = location.state || {};

    const [hotel, setHotel] = useState(null);

    const [rooms, setRooms] = useState([]);

    useEffect(() => {

        fetchHotel();

        fetchRooms();

    }, []);

    const fetchHotel = async () => {

        try {

            const data =
                await getHotelById(id);

            setHotel(data);

        } catch (error) {

            console.log(error);
        }
    };

    const fetchRooms = async () => {

        try {

            const data =
                await getRoomsByHotel(id);

            setRooms(data);

        } catch (error) {

            console.log(error);
        }
    };

    const handleBooking = async (roomId) => {

        try {

            console.log({

                roomId,
                checkIn,
                checkOut
            });

            await createBooking(

                roomId,
                checkIn,
                checkOut
            );

            alert("Room Booked Successfully");

            fetchRooms();

        } catch (error) {

            console.log(error);

            alert("Booking Failed");
        }
    };

    if (!hotel) {

        return <h2>Loading...</h2>;
    }

    return (

        <div style={{ padding: "20px" }}>

            <h1>{hotel.name}</h1>

            <p>
                Location:
                {hotel.location}
            </p>

            <p>
                Check In:
                {checkIn}
            </p>

            <p>
                Check Out:
                {checkOut}
            </p>

            <hr />

            <h2>Rooms</h2>

            {

                rooms.map((room) => (

                    <div

                        key={room.id}

                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "10px"
                        }}
                    >

                        <h3>
                            Room Number:
                            {room.roomNumber}
                        </h3>

                        <p>
                            Type:
                            {room.roomType}
                        </p>

                        <p>
                            Price:
                            ₹{room.price}
                        </p>

                        <p>
                            Available:
                            {
                                room.available
                                    ? "Yes"
                                    : "No"
                            }
                        </p>

                        {

                            room.available && (

                                <button

                                    onClick={() =>
                                        handleBooking(room.id)
                                    }
                                >
                                    Book Room
                                </button>
                            )
                        }

                    </div>
                ))
            }

        </div>
    );
}

export default HotelDetails;