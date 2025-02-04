import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

function NoPropertiesFound() {
    const navigate = useNavigate();
    
    const goToHome = (e) => {
        e.preventDefault();
        navigate("/", {state: {
        }})
    }
    return(
        <>
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background2.jpg')" }}>
            <div className="flex items-center space-x-5 pt-5 pl-5">
                <h3 className="text-4xl text-white font-semibold">CariProperti</h3>
                <button onClick={goToHome} className="text-l text-white ml-3">Home</button>
            </div>
            
            <hr className="mt-5 mb-5 border-t-2 border-white" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-w-2xl w-[600px] p-6 bg- bg-white pacity-10 shadow-md rounded-md">
        <h1 className="defCentered text-b">Maaf! Tidak ada properti yang ditemukan!</h1>
        <h2 className="defCentered text-b">Silahkan mencoba mencari lagi</h2>
        </div>
        </div>
        <Outlet />
        </>
    );
};

export default NoPropertiesFound;