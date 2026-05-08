import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (

        <div

            style={{

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                padding: "15px",

                backgroundColor: "#222",

                color: "white"
            }}
        >

            <div>

                <h2>Hotel Booking</h2>

            </div>

            <div>

                <Link
                    to="/"
                    style={{
                        color: "white",
                        marginRight: "15px"
                    }}
                >
                    Home
                </Link>

                <Link
                    to="/search"
                    style={{
                        color: "white",
                        marginRight: "15px"
                    }}
                >
                    Search Hotels
                </Link>

                {

                    token && (

                        <Link
                            to="/my-bookings"
                            style={{
                                color: "white",
                                marginRight: "15px"
                            }}
                        >
                            My Bookings
                        </Link>
                    )
                }

                {

                    !token ? (

                        <>

                            <Link
                                to="/login"
                                style={{
                                    color: "white",
                                    marginRight: "15px"
                                }}
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                style={{
                                    color: "white"
                                }}
                            >
                                Register
                            </Link>

                        </>

                    ) : (

                        <button

                            onClick={handleLogout}

                            style={{

                                padding: "8px 15px",

                                border: "none",

                                cursor: "pointer",

                                borderRadius: "5px"
                            }}
                        >
                            Logout
                        </button>
                    )
                }

            </div>
        </div>
    );
}

export default Header;