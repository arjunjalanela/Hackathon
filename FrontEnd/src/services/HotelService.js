import api from "./api";

// GET HOTEL BY ID

export const getHotelById = async (hotelId) => {

    const response = await api.get(

        `/hotels/${hotelId}`
    );

    return response.data;
};

// SEARCH HOTELS

export const searchHotels = async (

    location,
    checkInDate,
    checkOutDate

) => {

    const response = await api.get(

        "/hotels/search",

        {
            params: {
                location,
                checkInDate,
                checkOutDate
            }
        }
    );

    return response.data;
};

// GET AVAILABLE ROOMS

export const getRoomsByHotel = async (

    hotelId,
    checkInDate,
    checkOutDate

) => {

    const response = await api.get(

        `/hotels/${hotelId}/rooms`,

        {
            params: {
                checkInDate,
                checkOutDate
            }
        }
    );

    return response.data;
};