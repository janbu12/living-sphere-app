import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function Results() {
    const location = useLocation();
    const [apiData, setApiData] = useState([{fasilities: ["1", "2"], images: ["ex.png"], id: "ex", title: "Loading judul...", location: "Loading lokasi...", price: "Rp. 0", detail_price: "Rp. 01"}]);
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

    if(Object.hasOwn(apiData, 'message')) {
        if(apiData.message === "No properties found matching your criteria.") {
            navigate("/nopropertiesfound", {});
        }
    }

    else {
        return(
        <>
        
        <h1 className="defCentered">Rekomendasi</h1>
        
        <br></br>
        <form>
            <table className="defTable">
                <tbody>
                    {apiData.map((data) => {
                        let facilityString = "";
                        data.fasilities.map((fac) => {
                            facilityString += fac;
                            facilityString += ", ";
                        })
                        return(
                            <>
                            <tr>
                                <td rowSpan="3"><img src={data.images[0]} /></td>
                                <td><a href={"https://www.dotproperty.id/en/ads/" + data.id}>{data.title}</a></td>
                                <td>{data.location}</td>
                            </tr>
                            <tr>
                                <td>{data.price}</td>
                                <td>{data.detail_price}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    {facilityString}
                                </td>
                            </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </form>
        <Outlet />
        </>
    );
    }
};

export default Results;