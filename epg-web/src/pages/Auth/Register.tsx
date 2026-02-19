import { useState } from "react";
import LoginImgBg from "../../assets/register.png";
import Login from "./Login";
import { registerUser } from "../../services/Auth/authService";
import type { RegisterRequest } from "../../Models/Auth/RegisterRequest";

function Register() {
    const [showLogin, setShowLogin] = useState(false);

    const [form, setForm] = useState<RegisterRequest>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });    

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {
        try {
            await registerUser(form);
            alert("Registration successful!");
            setShowLogin(true);

        } catch (error: any) {
            console.error(error.message);
        }
    };

    if (showLogin) {
        return <Login />;
    }

    return(
        <div className="min-h-full w-full flex flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat relative rounded-[5%]"
        style={{backgroundImage: `url(${LoginImgBg})`}}>
            <div className="flex flex-col w-[300px] min-w-[100px]
                        bg-white/10 backdrop-blur-lg
                        rounded-3xl shadow-2xl
                        p-6 sm:p-8 md:p-10">
                
                <h2 className="font-bold text-2xl text-white pb-5">
                    Register
                </h2>

                <input className="border border-white/30 rounded-lg p-2 bg-transparent text-white placeholder-white/50 mb-4" onChange={handleChange} name="name" type="text" placeholder="Your Name"/>
                <input className="border border-white/30 rounded-lg p-2 bg-transparent text-white placeholder-white/50 mb-4" onChange={handleChange} name="email" type="email" placeholder="Email"/>
                <input className="border border-white/30 rounded-lg p-2 bg-transparent text-white placeholder-white/50 mb-4" onChange={handleChange} name="password" type="password" placeholder="Password"/>
                <input className="border border-white/30 rounded-lg p-2 bg-transparent text-white placeholder-white/50 mb-4" onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirm Password"/>

                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={handleRegister}>Register</button>
                
                <button className="cursor-pointer text-white hover:text-blue-300 mt-4" onClick={() => setShowLogin(true)} >Back to Login</button>
            </div>
        </div>
    )
}

export default Register;