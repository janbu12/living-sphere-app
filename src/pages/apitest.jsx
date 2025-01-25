// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function ApiTestx() {
    const location = useLocation();
    const [apiData, setApiData] = useState({yes: 12});
    // const [question3data, setQuestion3data] = useState({lat_Lokasi_1: 0, lon_lokasi_1: 0, lat_Lokasi_2: 0, lon_lokasi_2: 0, lat_Lokasi_3: 0, lon_lokasi_3: 0});

    const navigate = useNavigate();

    useEffect(() => {
        const payload = {
            method: "POST",
            headers: { "Content-Type": "application/json", "api-key": process.env.REACT_APP_VITE_API_KEY },
            body: null,
            mode: "cors"
        }
        fetch(process.env.REACT_APP_VITE_API_URL + `/properties`, payload)
        .then(res => res.json())
        .then(jsondata => {setApiData(jsondata)});
    });

    return(
        <>
        
        <h1 className="defCentered">Api test</h1>
        
        <br></br>
        <form>
            <table className="defTable">
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <h1>{JSON.stringify(apiData)}</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <Outlet />
        </>
    );
}

export default ApiTestx;