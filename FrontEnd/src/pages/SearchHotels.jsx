import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { searchHotels } from "../services/HotelService";

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

        <div style={{ padding: "20px" }}>

            <h1>Search Hotels</h1>

            <form onSubmit={handleSearch}>

                <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={(e) =>
                        setLocation(e.target.value)
                    }
                />

                <br /><br />

                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) =>
                        setCheckIn(e.target.value)
                    }
                />

                <br /><br />

                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) =>
                        setCheckOut(e.target.value)
                    }
                />

                <br /><br />

                <button type="submit">
                    Search Hotels
                </button>

            </form>

            <br />

            {

                hotels.map((hotel) => (

                    <div

                        key={hotel.id}

                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "10px"
                        }}
                    >

                        <h2>{hotel.name}</h2>

                        <p>
                            Location:
                            {hotel.location}
                        </p>

                        <p>
                            Total Rooms:
                            {hotel.totalRooms}
                        </p>

                        <p>
                            Available Rooms:
                            {hotel.availableRooms}
                        </p>

                        <button

                            onClick={() =>

                                navigate(

                                    `/hotel/${hotel.id}`,

                                    {
                                        state: {

                                            checkIn,
                                            checkOut
                                        }
                                    }
                                )
                            }
                        >
                            View Rooms
                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default SearchHotels;