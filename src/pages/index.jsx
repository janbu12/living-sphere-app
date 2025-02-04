import { React } from "react";
// import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import "./Basic.css";
import Navbar from "../components/Navbar";
function Index() {

    // const location = useLocation();
    //console.log(location);

    const navigate = useNavigate();

    const goToQuestion1 = (e) => {
        e.preventDefault();
        navigate("/question1", {state: {}})
    }

    return (
        <>
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background.jpg')" }}>
            <Navbar/>
        </div>

    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-8 text-white">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-white font-[Poppins]">Selamat datang di CariProperti</h1>
        <h3 className="text-m mt-2">Kesulitan mencari properti untuk disewa/dibeli?</h3>
        <h3 className="text-m">Belum kepikiran mau menyewa atau membeli?</h3>
        <h3 className="text-m">Sulit mempertimbangkan mana properti yang anda mau?</h3>
        <br />
        <h2 className="text-l font-semibold">Kami dapat merekomendasikan properti-properti yang tersedia</h2>
        <h2 className="text-l font-semibold">Cukup isi kuesioner ini saja!</h2>
    
        <button className="bg-white text-black py-4 px-8 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition text-2xl mt-4" onClick={goToQuestion1}>Mulai Kuesioner</button>
    
            <Outlet />
            </div>

        </>
    );
    }
    
    export default Index;