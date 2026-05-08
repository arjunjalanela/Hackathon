import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/AuthService";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await registerUser({

                name,
                email,
                password
            });

            // SAVE LOGIN DATA

            localStorage.setItem(
                "token",
                response.token
            );

            localStorage.setItem(
                "role",
                response.role
            );

            localStorage.setItem(
                "email",
                response.email
            );

            localStorage.setItem(
                "userId",
                response.userId
            );

            alert("Registration Successful");

            // REDIRECT

            navigate("/search");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");
        }
    };

    return (

        <div>

            <h1>Register</h1>

            <form onSubmit={handleRegister}>

                <input

                    type="text"

                    placeholder="Enter Name"

                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <br /><br />

                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <br /><br />

                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <br /><br />

                <button type="submit">

                    Register

                </button>

            </form>

        </div>
    );
}

export default Register;