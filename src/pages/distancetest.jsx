import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';

const origin = "ChIJixgIqvjmaC4RA4keBuYkLWM";
const destination = "ChIJ_5eaQbPnaC4RDw_WrZT3bnE";

function DistanceTest() {
    const location = useLocation();
    const [apiData, setApiData] = useState([{fasilities: ["1", "2"], images: ["ex.png"], id: "ex", title: "Loading judul...", location: "Loading lokasi...", price: "Rp. 0", detail_price: "Rp. 01"}]);
    // const [question3data, setQuestion3data] = useState({lat_Lokasi_1: 0, lon_lokasi_1: 0, lat_Lokasi_2: 0, lon_lokasi_2: 0, lat_Lokasi_3: 0, lon_lokasi_3: 0});

    const navigate = useNavigate();

    useEffect(() => {
        
        const url = process.env.REACT_APP_VITE_API_URL + "/distance";
        const payload = {
            method: "POST",
            headers: { "Content-Type": "application/json", "api-key": process.env.REACT_APP_VITE_API_KEY },
            body: JSON.stringify({destination: "ChIJixgIqvjmaC4RA4keBuYkLWM", origin: "ChIJ_5eaQbPnaC4RDw_WrZT3bnE"}),
            mode: "cors"
        }
        fetch(url, payload)
        .then(res => res.json())
        .then(jsondata => {setApiData(jsondata)});
        // nextButtonDisabled = locationValue1 === null ? true : false;
    }, []);

    return(
        <>
        
        <p>
            {JSON.stringify(apiData)}
        </p>
        <Outlet />
        </>
    );
};

export default DistanceTest;