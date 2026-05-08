import API from "./api";

// SEARCH HOTELS

export const searchHotels = async (

    location,
    checkInDate,
    checkOutDate

) => {

    const response = await API.get(

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

export const getAvailableRooms = async (

    hotelId,
    checkInDate,
    checkOutDate

) => {

    const response = await API.get(

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

// CREATE HOTEL (ADMIN)

export const createHotel = async (
    hotelData
) => {

    const response = await API.post(
        "/hotels/create",
        hotelData
    );

    return response.data;
};