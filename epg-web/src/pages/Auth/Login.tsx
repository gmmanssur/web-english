import { useState } from "react";
import Register from "./Register";
import LoginImgBg from "../../assets/login.png";
import type { LoginRequest } from "../../Models/Auth/LoginRequest";
import { loginUser } from "../../services/Auth/authService";


function Login() {
    const [showRegister, setShowRegister] = useState(false);
    
    const [form, setForm] = useState<LoginRequest>({
            email: "",
            password: ""
        }); 

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
        ) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        };
    
        const handleLogin = async () => {
            try {
                await loginUser(form);
                alert("Login successful!");
            } catch (error: any) {
                console.error(error.message);
            }
        };

    if (showRegister) {
        return <Register />;
    }

    return(
        <div className="min-h-full w-full flex flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat relative rounded-[5%]"
        style={{backgroundImage: `url(${LoginImgBg})`}}>
            <div className="flex flex-col w-[300px] min-w-[100px]
                        bg-white/10 backdrop-blur-lg
                        rounded-3xl shadow-2xl
                        p-6 sm:p-8 md:p-10">
                
                <h2 className="font-bold text-2xl text-white">
                    Login
                </h2>

                <input className="border border-white/30 rounded-lg p-2 bg-transparent text-white placeholder-white/50 mb-4" name="email" type="email" placeholder="Email" onChange={handleChange}/>
                <input className="border border-white/30 rounded-lg p-2 bg-transparent text-white placeholder-white/50 mb-4" name="password" type="password" placeholder="Password" onChange={handleChange}/>

                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleLogin}>Login</button>
                
                <button className="cursor-pointer text-white hover:text-blue-300 mt-4"
                onClick={() => setShowRegister(true)}>
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default Login;