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
                <div className='flex items-center gap-4'>
                    <div className='w-12 h-12'>
                        <img src="/image/logo.png" alt="logo.png" className='w-full h-full object-cover' />
                    </div>
                    <h3 className="text-3xl text-white font-semibold">Living Sphere</h3>
                </div>
                <button onClick={goToHome} className="bg-white text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition mt-4 duration-300">Home</button>
            </div>
            <hr className="border-t-2 border-white " />
        </>
    )
}
