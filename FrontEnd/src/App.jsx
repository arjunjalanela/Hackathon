import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchHotels from "./pages/SearchHotels";
import HotelDetails from "./pages/HotelDetails";
import MyBookings from "./pages/MyBookings";

function App() {

    return (

        <>

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
                    path="/hotel/:id"
                    element={<HotelDetails />}
                />

                <Route
                    path="/my-bookings"
                    element={<MyBookings />}
                />

            </Routes>

        </>
    );
}

export default App;