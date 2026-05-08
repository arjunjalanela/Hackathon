import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <div className="home-container">

            <h1>Hotel Booking System</h1>

            <p>Welcome to Hotel Booking Platform</p>

            <div className="button-group">

                <button
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>

                <button
                    onClick={() => navigate("/register")}
                >
                    Register
                </button>

            </div>

        </div>
    );
}

export default Home;