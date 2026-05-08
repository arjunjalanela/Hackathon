import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/AuthService";
import "../styles/Register.css";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = {

                name,
                email,
                password
            };

            const response = await registerUser(data);

            console.log(response);

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");
        }
    };

    return (

        <div className="register-container">
            <div className="register-box">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;