import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function Results() {
    const location = useLocation();
    const [apiData, setApiData] = useState([{fasilities: ["1", "2"], images: ["ex.png"], id: "ex", title: "Loading...", location: "", price: "", detail_price: ""}]);
    // const [question3data, setQuestion3data] = useState({lat_Lokasi_1: 0, lon_lokasi_1: 0, lat_Lokasi_2: 0, lon_lokasi_2: 0, lat_Lokasi_3: 0, lon_lokasi_3: 0});

    const navigate = useNavigate();

    useEffect(() => {
        const billing_type = location.state.preferensi_jenis === "Hanya beli" ? "beli" : "sewa";
        const location1_final_string = location.state.tempat_1_province + "/" + location.state.tempat_1_city;
        const location2_final_string = location.state.tempat_2_city === null ? null : location.state.tempat_2_province + "/" + location.state.tempat_2_city + "/" + location.state.tempat_2_district;
        const location3_final_string = location.state.tempat_3_city === null ? null : location.state.tempat_3_province + "/" + location.state.tempat_3_city + "/" + location.state.tempat_3_district;
        const payload = {
            method: "POST",
            headers: { "Content-Type": "application/json", "api-key": process.env.REACT_APP_VITE_API_KEY },
            body: JSON.stringify({
                tipe: billing_type,
                jumlah_orang: location.state.jumlah_orang,
                min_harga: location.state.jangkauan_harga_min,
                max_harga: location.state.jangkauan_harga_max,
                fasilities: location.state.daftar_fitur,
                location1: location1_final_string,
                location2: location2_final_string,
                location3: location3_final_string
            }),
            mode: "cors"
        }
        fetch(process.env.REACT_APP_VITE_API_URL + `/properties/recommendations`, payload)
        .then(res => res.json())
        .then(jsondata => {setApiData(jsondata)});
    });

    const goToHome = (e) => {
        e.preventDefault();
        navigate("/", {state: {
        }})
    }

    if(Object.hasOwn(apiData, 'message')) {
        if(apiData.message === "No properties found matching your criteria.") {
            navigate("/nopropertiesfound", {});
        }
    }

    else {
        return(
        <>
    
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background2.jpg')" }}>
    <div className="flex items-center space-x-5 pt-5 pl-5">
    <h3 className="text-4xl text-white font-semibold">CariProperti</h3>
    <button onClick={goToHome} className="text-l text-white ml-3">Home</button>
    </div>

    <hr className="mt-5 mb-5 border-t-2 border-white " />
    <div className="container mx-auto p-5">
    <h1 className="text-center text-2xl font-bold mb-5 text-white">Rekomendasi Properti</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {apiData.map((data) => (
        <div key={data.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
            <img src={data.images[0]} alt={data.title} className="w-full h-48 object-cover" />
            <div className="p-4">
            <h3 className="mt-2 font-semibold text-lg text-blue-500"><u>
                <a href={`https://www.dotproperty.id/en/ads/${data.id}`} target="_blank" rel="noopener noreferrer">
                {data.title}
                </a>
            </u></h3>
            <p className="text-gray-600 text-sm mt-1">{data.location}</p>
            <p className="text-green-500 font-bold mt-2">{data.price}</p>
            <p className="text-gray-500 text-sm">{data.detail_price}</p>
            <p className="text-gray-600 text-sm mt-1">{data.fasilities.join(", ")}</p>
            </div>
        </div>
        ))}
    </div>
    </div>
    <Outlet />
    </div>

        </>
    );
    }
};

export default Results;