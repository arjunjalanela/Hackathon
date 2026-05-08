import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/AuthService";
import "../styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = {

                email,
                password
            };

            const response = await loginUser(data);

            console.log(response);

            alert("Login Successful");

            navigate("/search");

        } catch (error) {

            console.log(error);

            alert("Invalid Credentials");
        }
    };

    return (

        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;