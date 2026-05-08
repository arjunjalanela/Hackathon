import {

    BrowserRouter,

    Routes,

    Route

} from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import SearchHotels
from "./pages/SearchHotels";

import HotelRooms
from "./pages/HotelRooms";

import MyBookings
from "./pages/MyBookings";

import CreateHotel
from "./pages/CreateHotel";

function App() {

    return (

        <BrowserRouter>

            <Header />

            <Routes>

                <Route

                    path="/"

                    element={<Home />}
                />

                <Route

                    path="/login"

                    element={<Login />}
                />

                <Route

                    path="/register"

                    element={<Register />}
                />

                <Route

                    path="/search"

                    element={<SearchHotels />}
                />

                <Route

                    path="/rooms/:hotelId"

                    element={<HotelRooms />}
                />

                <Route

                    path="/my-bookings"

                    element={<MyBookings />}
                />

                <Route

                    path="/create-hotel"

                    element={<CreateHotel />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;