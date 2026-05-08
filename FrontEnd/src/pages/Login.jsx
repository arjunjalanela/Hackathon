import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser }
from "../services/AuthService";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response =
                await loginUser({

                    email,
                    password
                });

            // SAVE TOKEN

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

            alert("Login Successful");

            // ADMIN NAVIGATION

            if (
                response.role ===
                "ROLE_ADMIN"
            ) {

                navigate("/create-hotel");
            }

            // USER NAVIGATION

            else {

                navigate("/search");
            }

        } catch (error) {

            console.log(error);

            alert("Invalid Credentials");
        }
    };

    return (

        <div
            style={{
                padding: "30px"
            }}
        >

            <h1>

                Login 🔐

            </h1>

            <form onSubmit={handleLogin}>

                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <br /><br />

                <button type="submit">

                    Login

                </button>

            </form>

        </div>
    );
}

export default Login;