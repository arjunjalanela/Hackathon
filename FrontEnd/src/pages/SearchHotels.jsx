import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { searchHotels } from "../services/HotelService";
import "../styles/SearchHotels.css";

function SearchHotels() {

    const navigate = useNavigate();

    const [location, setLocation] = useState("");

    const [checkIn, setCheckIn] = useState("");

    const [checkOut, setCheckOut] = useState("");

    const [hotels, setHotels] = useState([]);

    const handleSearch = async (e) => {

        e.preventDefault();

        try {

            const data = await searchHotels(

                location,
                checkIn,
                checkOut
            );

            console.log(data);

            setHotels(data);

        } catch (error) {

            console.log(error);

            alert("Failed To Fetch Hotels");
        }
    };

    return (

        <div className="search-container">
            <h1>Search Hotels</h1>

            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                />

                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                />

                <button type="submit">
                    Search Hotels
                </button>
            </form>

            <div className="hotels-list">
                {hotels.map((hotel) => (
                    <div className="hotel-card" key={hotel.id}>
                        <h2>{hotel.name}</h2>
                        <p>Location: {hotel.location}</p>
                        <p>Total Rooms: {hotel.totalRooms}</p>
                        <p>Available Rooms: {hotel.availableRooms}</p>
                        <button
                            onClick={() =>
                                navigate(`/hotel/${hotel.id}`, {
                                    state: {
                                        checkIn,
                                        checkOut,
                                    },
                                })
                            }
                        >
                            View Rooms
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchHotels;