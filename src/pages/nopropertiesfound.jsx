import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NoPropertiesFound() {
    return(
        <>
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background2.jpg')" }}>
            <Navbar/>
            
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