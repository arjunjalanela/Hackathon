import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"
            }}
        >

            <h1>

                Hotel Booking Application 🏨

            </h1>

            <button

                onClick={() =>
                    navigate("/login")
                }

            >

                Login

            </button>

            <button

                onClick={() =>
                    navigate("/register")
                }

            >

                Register

            </button>

        </div>
    );
}

export default Home;