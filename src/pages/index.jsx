import { React } from "react";
// import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import "./Basic.css";

function Index() {

    // const location = useLocation();
    //console.log(location);

    const navigate = useNavigate();

    const goToQuestion1 = (e) => {
        e.preventDefault();
        navigate("/question1", {state: {}})
    }

    return(
        <>
        
        <h1 className="defCentered">Selamat datang di namaWebsiteBelumKepikiran </h1>
        <h3 className="defCentered">Kesulitan mencari properti untuk disewa/dibeli?</h3>
        <h3 className="defCentered">Belum kepikiran mau menyewa atau membeli?</h3>
        <h3 className="defCentered">Sulit mempertimbangkan mana properti yang anda mau?</h3>
        <br></br>
        <h2 className="defCentered">Kami dapat merekomendasikan properti-properti yang tersedia</h2>
        <h2 className="defCentered">Cukup isi kuesioner ini saja!</h2>
        <br></br>
        <button className="defButton" onClick={goToQuestion1} >Mulai Kuesioner</button>
        
        <Outlet />
        </>
    );
}

export default Index;