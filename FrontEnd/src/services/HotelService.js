import API from "./api";

// SEARCH HOTELS

export const searchHotels = async (

    location,
    checkIn,
    checkOut

) => {

    const res = await API.get(

        `/hotels/search`,

        {
            params: {
                location,
                checkIn,
                checkOut
            }
        }
    );

    return res.data;
};

// GET HOTEL BY ID

export const getHotelById = async (id) => {

    const res = await API.get(

        `/hotels/${id}`

    );

    return res.data;
};

// GET ROOMS OF HOTEL

export const getRoomsByHotel = async (hotelId) => {

    const res = await API.get(

        `/hotels/${hotelId}/rooms`

    );

    return res.data;
};