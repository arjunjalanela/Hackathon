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

import "../styles/Hoteldetails.css";

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
                // await getRoomsByHotel(id);
                await getRoomsByHotel(
                id,
                checkIn,
                checkOut
            );

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

        <div className="hotel-details-container">
            <h1>{hotel.name}</h1>

            <div className="hotel-info">
                <p>Location: {hotel.location}</p>
                <p>Check In: {checkIn}</p>
                <p>Check Out: {checkOut}</p>
            </div>

            <div className="rooms-section">
                <h2>Rooms</h2>
                <div className="rooms-grid">
                    {rooms.length > 0 ? (
                        rooms.map((room) => (
                            <div className="room-card" key={room.id}>
                                <h3>Room {room.roomNumber}</h3>
                                <p>Type: {room.roomType}</p>
                                <p>Price: ₹{room.price}</p>
                                <p>
                                    Available:
                                    {room.available ? "Yes" : "No"}
                                </p>
                                {room.available && (
                                    <button
                                        onClick={() =>
                                            handleBooking(room.id)
                                        }
                                    >
                                        Book Room
                                    </button>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="no-rooms">
                            No rooms available
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HotelDetails;