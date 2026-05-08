import { useState } from "react";

import { createHotel }
from "../services/HotelService";

function CreateHotel() {

    const [name, setName] =
        useState("");

    const [location, setLocation] =
        useState("");

    const [totalRooms, setTotalRooms] =
        useState("");

    const [price, setPrice] =
        useState("");

    const handleCreateHotel = async (e) => {

        e.preventDefault();

        try {

            const hotelData = {

                name,

                location,

                totalRooms,

                price
            };

            const response =
                await createHotel(hotelData);

            console.log(response);

            alert(
                "Hotel Created Successfully"
            );

            setName("");

            setLocation("");

            setTotalRooms("");

            setPrice("");

        } catch (error) {

            console.log(error);

            alert("Failed To Create Hotel");
        }
    };

    return (

        <div
            style={{
                padding: "30px"
            }}
        >

            <h1>

                Create Hotel 🏨

            </h1>

            <form
                onSubmit={handleCreateHotel}
            >

                <input

                    type="text"

                    placeholder="Hotel Name"

                    value={name}

                    onChange={(e) =>
                        setName(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <input

                    type="text"

                    placeholder="Location"

                    value={location}

                    onChange={(e) =>
                        setLocation(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <input

                    type="number"

                    placeholder="Total Rooms"

                    value={totalRooms}

                    onChange={(e) =>
                        setTotalRooms(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <input

                    type="number"

                    placeholder="Price"

                    value={price}

                    onChange={(e) =>
                        setPrice(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <button type="submit">

                    Create Hotel

                </button>

            </form>

        </div>
    );
}

export default CreateHotel;