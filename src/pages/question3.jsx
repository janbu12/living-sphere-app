// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { APIProvider } from '@vis.gl/react-google-maps';
import Navbar from "../components/Navbar";

function Question3() {
    const location = useLocation();

    // const {isLoaded} = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
    //     libraries: ["places"]
    // });

    const [locationValue1, setLocationValue1] = useState(null);
    const [locationValue2, setLocationValue2] = useState(null);
    const [locationValue3, setLocationValue3] = useState(null);

    const [customStatusMessage, setCustomStatusMessage] = useState("");

    const [route12data, setRoute12data] = useState(null);
    const [route23data, setRoute23data] = useState(null);
    const [route13data, setRoute13data] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setCustomStatusMessage("");
        if(locationValue1 !== null && locationValue2 !== null) {
            const url_12 = process.env.REACT_APP_VITE_API_URL + "/distance";
            const payload_12 = {
                method: "POST",
                headers: { "Content-Type": "application/json", "api-key": process.env.REACT_APP_VITE_API_KEY },
                body: JSON.stringify({destination: locationValue2.value.place_id, origin: locationValue1.value.place_id}),
                mode: "cors"
            }
            fetch(url_12, payload_12)
            .then(res => res.json())
            .then(jsondata => {setRoute12data(jsondata)});
        }
        if(locationValue2 !== null && locationValue3 !== null) {
            const url_23 = process.env.REACT_APP_VITE_API_URL + "/distance";
            const payload_23 = {
                method: "POST",
                headers: { "Content-Type": "application/json", "api-key": process.env.REACT_APP_VITE_API_KEY },
                body: JSON.stringify({destination: locationValue3.value.place_id, origin: locationValue2.value.place_id}),
                mode: "cors"
            }
            fetch(url_23, payload_23)
            .then(res => res.json())
            .then(jsondata => {setRoute23data(jsondata)});
        }
        if(locationValue1 !== null && locationValue3 !== null) {
            const url_13 = process.env.REACT_APP_VITE_API_URL + "/distance";
            const payload_13 = {
                method: "POST",
                headers: { "Content-Type": "application/json", "api-key": process.env.REACT_APP_VITE_API_KEY },
                body: JSON.stringify({destination: locationValue3.value.place_id, origin: locationValue1.value.place_id}),
                mode: "cors"
            }
            fetch(url_13, payload_13)
            .then(res => res.json())
            .then(jsondata => {setRoute13data(jsondata)});
        }
        // nextButtonDisabled = locationValue1 === null ? true : false;
    }, [locationValue1, locationValue2, locationValue3]);

    const goToConfirmation = (e) => {
        e.preventDefault();
        if (locationValue1 === null) {
            setCustomStatusMessage("Mohon setidaknya isi tempat penting 1");
            return;
        }
        if (route12data !== null) {
            console.log(route12data);
            if(route12data.distance_value >= 100000) {
                setCustomStatusMessage("Jangan memilih tempat-tempat yang terlalu jauh!");
                return;
            }
        }
        if (route23data !== null) {
            console.log(route23data);
            if(route23data.distance_value >= 100000) {
                setCustomStatusMessage("Jangan memilih tempat-tempat yang terlalu jauh!");
                return;
            }
        }
        if (route13data !== null) {
            console.log(route13data);
            if(route13data.distance_value >= 100000) {
                setCustomStatusMessage("Jangan memilih tempat-tempat yang terlalu jauh!");
                return;
            }
        }
        let l1d = null;
        let l1c = null;
        let l1p = null;

        let l2l = null;
        let l3l = null;
        let l2i = null;
        let l3i = null;
        let l2d = null;
        let l3d = null;
        let l2c = null;
        let l3c = null;
        let l2p = null;
        let l3p = null;
        switch((locationValue1.value.terms).length) {
            case 3:
                l1d = locationValue1.value.terms[0].value;
                l1c = locationValue1.value.terms[1].value;
                l1p = locationValue1.value.terms[2].value;
                break;
            case 4:
                l1d = locationValue1.value.terms[1].value;
                l1c = locationValue1.value.terms[2].value;
                l1p = locationValue1.value.terms[3].value;
                break;
            case 5:
                l1d = locationValue1.value.terms[2].value;
                l1c = locationValue1.value.terms[3].value;
                l1p = locationValue1.value.terms[4].value;
                break;
            default:
                break;
        }
        if(locationValue2 !== null) {
            l2l = locationValue2.label;
            l2i = locationValue2.value.place_id;
            switch((locationValue2.value.terms).length) {
                case 3:
                    l2d = locationValue2.value.terms[0].value;
                    l2c = locationValue2.value.terms[1].value;
                    l2p = locationValue2.value.terms[2].value;
                    break;
                case 4:
                    l2d = locationValue2.value.terms[1].value;
                    l2c = locationValue2.value.terms[2].value;
                    l2p = locationValue2.value.terms[3].value;
                    break;
                case 5:
                    l2d = locationValue2.value.terms[2].value;
                    l2c = locationValue2.value.terms[3].value;
                    l2p = locationValue2.value.terms[4].value;
                    break;
                default:
                    break;
            }
        }
        if(locationValue3 !== null) {
            l3l = locationValue3.label;
            l3i = locationValue3.value.place_id;
            switch((locationValue3.value.terms).length) {
                case 3:
                    l3d = locationValue3.value.terms[0].value;
                    l3c = locationValue3.value.terms[1].value;
                    l3p = locationValue3.value.terms[2].value;
                    break;
                case 4:
                    l3d = locationValue3.value.terms[1].value;
                    l3c = locationValue3.value.terms[2].value;
                    l3p = locationValue3.value.terms[3].value;
                    break;
                case 5:
                    l3d = locationValue3.value.terms[2].value;
                    l3c = locationValue3.value.terms[3].value;
                    l3p = locationValue3.value.terms[4].value;
                    break;
                default:
                    break;
            }
        }
        navigate("/confirmation", {state: {
            preferensi_jenis: location.state.preferensi_jenis,
            jangkauan_harga_min: location.state.jangkauan_harga_min,
            jangkauan_harga_max: location.state.jangkauan_harga_max,
            jumlah_orang: location.state.jumlah_orang,
            daftar_fitur: location.state.daftar_fitur,
            tempat_1: locationValue1.label,
            tempat_2: l2l,
            tempat_3: l3l,
            tempat_1_id: locationValue1.value.place_id,
            tempat_2_id: l2i,
            tempat_3_id: l3i,
            tempat_1_district: l1d,
            tempat_1_city: l1c,
            tempat_1_province: l1p,
            tempat_2_district: l2d,
            tempat_2_city: l2c,
            tempat_2_province: l2p,
            tempat_3_district: l3d,
            tempat_3_city: l3c,
            tempat_3_province: l3p
        }})
    }

    return(
        <>

        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background2.jpg')" }}>
            <Navbar/>

            <div className="max-w-3xl mx-auto p-8 bg-black bg-opacity-60 shadow-md rounded-md border mt-8">

        <h2 className="text-lg font-semibold text-center text-white"> Adakah tempat atau area tertentu yang anda ingin dekat dengan properti ini?</h2>
                        <div className="font-medium mt-4">
                            <h3 className="text-red-500">{customStatusMessage}</h3>
                            {/* <h3><b>{locationValue1 === null ? null : JSON.stringify(locationValue1)}</b></h3> */}
                            <h3 className="text-red-500">{route12data === null ? null : (route12data.distance_value >= 100000 ?  "Jarak antar tempat 1 dan 2 lebih dari 100 km! Mohon pilih lokasi lain" : "")}</h3>
                            <h3 className="text-red-500">{route23data === null ? null : (route23data.distance_value >= 100000 ? "Jarak antar tempat 2 dan 3 lebih dari 100 km! Mohon pilih lokasi lain" : "")}</h3>
                            <h3 className="text-red-500">{route13data === null ? null : (route13data.distance_value >= 100000 ? "Jarak antar tempat 1 dan 3 lebih dari 100 km! Mohon pilih lokasi lain" : "")}</h3>
                        </div>
                            
                        <div className="mt-4">
                        <label className="block font-semibold text-white"> Tempat penting 1:</label>
                        
                            <GooglePlacesAutocomplete
                                apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                                debounce="1000"
                                apiOptions={{ language: 'id', region: 'id' }}
                                autocompletionRequest={{
                                    componentRestrictions: {
                                        country: 'id',
                                    }
                                }}
                                minLengthAutocomplete="3"
                                selectProps={{
                                    locationValue1,
                                    onChange: setLocationValue1,
                                }}
                            />
                    </div>

                    <div className="mt-4">
                    <label className="block font-semibold text-white">Tempat penting 2:</label>
                    
                            <GooglePlacesAutocomplete
                                apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                                debounce="1000"
                                apiOptions={{ language: 'id', region: 'id' }}
                                autocompletionRequest={{
                                    componentRestrictions: {
                                        country: 'id',
                                    }
                                }}
                                minLengthAutocomplete="3"
                                selectProps={{
                                    locationValue2,
                                    onChange: setLocationValue2,
                                }}
                            />
                    </div>
                    
                    <div className="mt-4">
                    <label className="block font-semibold text-white">Tempat penting 3:</label>
                            <GooglePlacesAutocomplete
                                apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                                debounce="1000"
                                apiOptions={{ language: 'id', region: 'id' }}
                                autocompletionRequest={{
                                    componentRestrictions: {
                                        country: 'id',
                                    }
                                }}
                                minLengthAutocomplete="3"
                                selectProps={{
                                    locationValue3,
                                    onChange: setLocationValue3,
                                }}
                            />
                    </div>
                <div className="mt-6 text-center">
            <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200"
                onClick={goToConfirmation}
            >
                Lanjut
            </button>
        </div>
    </div>
    </div>

    </>
);
};

export default Question3;