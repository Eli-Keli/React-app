import React, { useState } from "react";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome Back!</h2>
                    <button onClick={toggleLogin}>LogOut</button>
                </div>
            ) : (
                <div>
                    <h2>Please Sign in.</h2>
                    <button onClick={toggleLogin}>Log in</button>
                </div>
            )}
        </div>
    )
}

export default Login;