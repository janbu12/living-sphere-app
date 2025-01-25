import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function MapTest() {
    const location = useLocation();
    const [apiData, setApiData] = useState([{fasilities: ["1", "2"], images: ["ex.png"], id: "ex", title: "Loading judul...", location: "Loading lokasi...", price: "Rp. 0", detail_price: "Rp. 01"}]);
    // const [question3data, setQuestion3data] = useState({lat_Lokasi_1: 0, lon_lokasi_1: 0, lat_Lokasi_2: 0, lon_lokasi_2: 0, lat_Lokasi_3: 0, lon_lokasi_3: 0});

    const navigate = useNavigate();

    useEffect(() => {
        const payload = {
            method: "GET",
            headers: { "Content-Type": "application/json", "api-key": process.env.REACT_APP_VITE_API_KEY },
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
                            <h1>{apiData.map((data) => {
                                let facilityString = "";
                                data.fasilities.map((fac) => {
                                    facilityString += fac;
                                    facilityString += ", ";
                                })
                                return(
                                    <>
                                    <tr>
                                        <td rowspan="3"><img src={data.images[0]} /></td>
                                        <td><a href={"https://www.dotproperty.id/en/ads/" + data.id}>{data.title}</a></td>
                                        <td>{data.location}</td>
                                    </tr>
                                    <tr>
                                        <td>{data.price}</td>
                                        <td>{data.detail_price}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            {facilityString}
                                        </td>
                                    </tr>
                                    </>
                                );
                            })}</h1>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <Outlet />
        </>
    );
};

export default MapTest;