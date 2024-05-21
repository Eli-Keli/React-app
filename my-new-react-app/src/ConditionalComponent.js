import React, { useState } from "react";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            <h2>{isLoggedIn? "Welcome Back!" : "Log in."}</h2>
            <button onClick={toggleLogin}>
                {isLoggedIn? "Log out" : "Log in"}
            </button>
        </div>
    )
}

export default Login;