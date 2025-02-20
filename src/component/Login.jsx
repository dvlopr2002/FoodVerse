import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import useOnlineStatus from "../utils/useOnlinestatus";

const Login = ({ data }) => {

    useEffect(() => {
        Aos.init();
    }, [])

    const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert("Login Successful!");
        setIsLoggedIn(true);
        data(true, formData.name);
    };

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) {
        return (<p className="text-[23px] text-center  md:text-[27px] lg:text-[30px] text-[red] mt-[250px] pl-[0px]">You are offline. Check your internet connection and try again.</p>)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full" data-aos="zoom-in" data-aos-duration="600">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
