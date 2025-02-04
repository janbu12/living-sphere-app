import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const goToHome = (e) => {
        e.preventDefault();
        navigate("/", {state: {
        }})
    }
    return (
        <>
            <div className="flex items-center justify-between p-4">
                <h3 className="text-4xl text-white font-semibold">CariProperti</h3>
                <button onClick={goToHome} className="text-l bg-white px-4 py-2 rounded-md hover:bg-gray-400 hover:text-gray-50 transition-all duration-200">Home</button>
            </div>
            <hr className="border-t-2 border-white " />
        </>
    )
}
