import { Link, useNavigate }
from "react-router-dom";
import "../styles/Header.css";

function Header() {

    const navigate = useNavigate();

    const token =
        localStorage.getItem("token");

    const role =
        localStorage.getItem("role");

    const handleLogout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("role");

        localStorage.removeItem("email");

        localStorage.removeItem("userId");

        navigate("/login");
    };

    return (

        <div className="header">
            <div className="header-logo">
                <h2>Hotel Booking</h2>
            </div>

            <div className="header-nav">
                <Link to="/">Home</Link>
                <Link to="/search">Search Hotels</Link>

                {token && (
                    <Link to="/my-bookings">
                        My Bookings
                    </Link>
                )}

                {role === "ROLE_ADMIN" && (
                    <Link to="/admin">Admin Panel</Link>
                )}

                {!token ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">
                            Register
                        </Link>
                    </>
                ) : (
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;