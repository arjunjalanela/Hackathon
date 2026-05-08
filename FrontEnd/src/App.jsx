import {

    Routes,
    Route,
    Navigate

} from "react-router-dom";

import Header from "./pages/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchHotels from "./pages/SearchHotels";
import HotelDetails from "./pages/HotelDetails";
import MyBookings from "./pages/MyBookings";

// PROTECTED ROUTE

function ProtectedRoute({ children }) {

    const token =
        localStorage.getItem("token");

    return token
        ? children
        : <Navigate to="/login" />;
}

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

                    element={

                        <ProtectedRoute>

                            <SearchHotels />

                        </ProtectedRoute>
                    }
                />

                <Route

                    path="/hotel/:id"

                    element={

                        <ProtectedRoute>

                            <HotelDetails />

                        </ProtectedRoute>
                    }
                />

                <Route

                    path="/my-bookings"

                    element={

                        <ProtectedRoute>

                            <MyBookings />

                        </ProtectedRoute>
                    }
                />

            </Routes>

        </>
    );
}

export default App;