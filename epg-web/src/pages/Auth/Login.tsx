import { useState } from "react";
import Register from "./Register";

function Login() {
    const [showRegister, setShowRegister] = useState(false);

    if (showRegister) {
        return <Register />;
    }

    return(
        <div className="container">
            <div className="login-content">
                <h1>Login</h1>

                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>

                <button>Login</button>
            </div>

            <button onClick={() => setShowRegister(true)}>Create Account</button>
        </div>
    )
}

export default Login;