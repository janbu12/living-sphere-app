import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

function Results() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState([{fasilities: ["1", "2"], images: ["ex.png"], id: "ex", title: "Loading...", location: "", price: "", detail_price: ""}]);
    // const [question3data, setQuestion3data] = useState({lat_Lokasi_1: 0, lon_lokasi_1: 0, lat_Lokasi_2: 0, lon_lokasi_2: 0, lat_Lokasi_3: 0, lon_lokasi_3: 0});

    const navigate = useNavigate();

    useEffect(() => {
        console.log(isLoading);
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
        .then(jsondata => {
            setApiData(jsondata)
            setIsLoading(false);
            console.log(isLoading);
        });
    });


    if(Object.hasOwn(apiData, 'message')) {
        if(apiData.message === "No properties found matching your criteria.") {
            navigate("/nopropertiesfound", {});
        }
    }

    else {
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background2.jpg')" }}>
                        <Navbar />
                        <div className="container mx-auto px-6 py-10">
                            <h1 className="text-center text-3xl font-extrabold text-white mb-8">Rekomendasi Properti</h1>
        
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {apiData.map((data) => (
                                    <a 
                                        key={data.id} 
                                        href={`https://www.dotproperty.id/en/ads/${data.id}`}
                                        target="_blank"
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                                    >
                                        <img 
                                            src={data.images[0]} 
                                            alt={data.title} 
                                            className="w-full h-56 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                                <a href={`https://www.dotproperty.id/en/ads/${data.id}`} target="_blank" rel="noopener noreferrer">
                                                    {data.title}
                                                </a>
                                            </h3>
                                            <p className="text-gray-500 text-sm mt-1">{data.location}</p>
                                            <p className="text-green-600 font-bold text-lg mt-2">{data.price}</p>
                                            <p className="text-gray-400 text-sm">{data.detail_price}</p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {data.fasilities.map(facility => (
                                                    <span 
                                                        key={facility} 
                                                        className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold rounded-full"
                                                    >
                                                        {facility}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <Outlet />
                    </div>
                )}
            </>
        );
        
    }
};

export default Results;