import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    const token =
        localStorage.getItem("token");

    const logout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (

        <div

            style={{

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                padding: "20px",

                backgroundColor: "#222",

                color: "white"
            }}
        >

            <h2

                style={{
                    cursor: "pointer"
                }}

                onClick={() =>
                    navigate("/")
                }
            >

                Hotel Booking 🏨

            </h2>

            {

                token && (

                    <div>

                        <button

                            onClick={() =>
                                navigate(
                                    "/search"
                                )
                            }

                            style={{
                                marginRight: "10px"
                            }}
                        >

                            Search Hotels

                        </button>

                        <button

                            onClick={() =>
                                navigate(
                                    "/my-bookings"
                                )
                            }

                            style={{
                                marginRight: "10px"
                            }}
                        >

                            My Bookings

                        </button>

                        <button onClick={logout}>

                            Logout

                        </button>

                    </div>
                )
            }

        </div>
    );
}

export default Header;