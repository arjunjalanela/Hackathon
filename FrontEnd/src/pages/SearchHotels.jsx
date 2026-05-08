import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { searchHotels } from "../services/HotelService";

function SearchHotels() {

    const navigate = useNavigate();

    const [location, setLocation] = useState("");

    const [checkInDate, setCheckInDate] = useState("");

    const [checkOutDate, setCheckOutDate] = useState("");

    const [hotels, setHotels] = useState([]);

    const handleSearch = async (e) => {

        e.preventDefault();

        try {

            const response = await searchHotels(

                location,

                checkInDate,

                checkOutDate
            );

            setHotels(response);

        } catch (error) {

            console.log(error);

            alert("Error Fetching Hotels");
        }
    };

    const handleViewRooms = (hotelId) => {

        navigate(

            `/rooms/${hotelId}`,

            {
                state: {

                    checkInDate,

                    checkOutDate
                }
            }
        );
    };

    return (

        <div
            style={{
                padding: "30px"
            }}
        >

            <h1>

                Search Hotels 🏨

            </h1>

            <form onSubmit={handleSearch}>

                <input

                    type="text"

                    placeholder="Enter Location"

                    value={location}

                    onChange={(e) =>
                        setLocation(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <input

                    type="date"

                    value={checkInDate}

                    onChange={(e) =>
                        setCheckInDate(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <input

                    type="date"

                    value={checkOutDate}

                    onChange={(e) =>
                        setCheckOutDate(
                            e.target.value
                        )
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

                        key={hotel.hotelId}

                        style={{
                            border: "1px solid black",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>

                            {hotel.hotelName}

                        </h2>

                        <p>

                            Location:
                            {" "}
                            {hotel.location}

                        </p>

                        <p>

                            Price:
                            {" "}
                            ₹{hotel.price}

                        </p>

                        <p>

                            Available Rooms:
                            {" "}
                            {hotel.availableRooms}

                        </p>

                        <button

                            onClick={() =>
                                handleViewRooms(
                                    hotel.hotelId
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