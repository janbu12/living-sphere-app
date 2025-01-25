// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function Confirmation() {
    const location = useLocation();
    const navigate = useNavigate();

    const features = location.state.daftar_fitur;
    const features_internal = ["Swimming Pool", "Air Conditioning", "Internet", "Security", "Balcony", "Equipped Kitchen", "Car Park", "CCTV", "Cellar", "Garden", "Electricity", "Roof Garden", "Terrace", "Built-in Kitchen", "Cistern", "Alarm"];
    const features_string = ["Kolam Renang", "Air Conditioning", "Internet", "Security", "Balkon", "Dapur Lengkap", "Parkir Mobil", "CCTV", "Gudang Bawah Tanah", "Taman", "Listrik", "Taman Atap", "Teras", "Dapur built-in", "Tadah / Cistern", "Alarm"];

    useEffect(() => {
        // nextButtonDisabled = locationValue1 === null ? true : false;
    });

    const cleanseName = (c_name) => {
        const dotproperty_translation = [
            ["Jawa Barat", "west-java"],
            ["Jawa Tengah", "central-java"],
            ["Jawa Timur", "east-java"],
            ["Daerah Istimewa Yogyakarta", "yogyakarta"],
            ["Daerah Khusus Ibukota Jakarta", "jakarta"],
            ["Kota Jakarta Utara", "jakarta-utara"],
            ["Kota Jakarta Timur", "jakarta-timur"],
            ["Kota Jakarta Selatan", "jakarta-selatan"],
            ["Kota Jakarta Barat", "jakarta-barat"],
            ["Kota Jakarta Tengah", "jakarta-tengah"],
            ["Kalimantan Utara", "north-kalimantan"],
            ["Kalimantan Barat", "west-kalimantan"],
            ["Kalimantan Timur", "east-kalimantan"],
            ["Kalimantan Tengah", "central-kalimantan"],
            ["Kalimantan Selatan", "south-kalimantan"],
            ["Kepulauan Bangka Belitung", "bangka-belitung"],
            ["Maluku Utara", "north-maluku"],
            ["Nusa Tenggara Timur", "east-nusa-tenggara"],
            ["Nusa Tenggara Barat", "west-nusa-tenggara"],
            ["Papua Barat", "west-papua"],
            ["Papua Selatan", "south-papua"],
            ["Papua Barat Daya", "south-west-papua"],
            ["Papua Tengah", "central-papua"],
            ["Sulawesi Barat", "west-sulawesi"],
            ["Sulawesi Selatan", "south-sulawesi"],
            ["Sulawesi Tengah", "central-sulawesi"],
            ["Sulawesi Tenggara", "south-east-sulawesi"],
            ["Sulawesi Utara", "north-sulawesi"],
            ["Sumatera Barat", "west-sumatra"],
            ["Sumatera Selatan", "south-sumatra"],
            ["Sumatera Utara", "north-sumatra"]
        ];

        let j = 0;
        for(j = 0; j < dotproperty_translation.length; j++) {
            if (c_name === dotproperty_translation[j][0]) {
                c_name = dotproperty_translation[j][1];
            }
        }

        if(c_name.includes("Kota ")) {
            c_name = c_name.slice(5);
        }

        c_name = c_name.replace(" ", "-");
        c_name = c_name.toLowerCase();
        return c_name;
    }

    const goToResults = (e) => {
        e.preventDefault();
        let features_string_array = [];
        let i = 0;
        for(i = 0; i < 16; i++) {
            if (features[i] === true) {
                features_string_array.push(features_internal[i]);
            }
        }
        // console.log(features_string_array);
        location.state.tempat_1_district = cleanseName(location.state.tempat_1_district);
        location.state.tempat_1_city = cleanseName(location.state.tempat_1_city);
        location.state.tempat_1_province = cleanseName(location.state.tempat_1_province);
        if(location.state.tempat_2_district !== null) {
            location.state.tempat_2_district = cleanseName(location.state.tempat_2_district);
            location.state.tempat_2_city = cleanseName(location.state.tempat_2_city);
            location.state.tempat_2_province = cleanseName(location.state.tempat_2_province);
        }
        if(location.state.tempat_3_district !== null) {
            location.state.tempat_3_district = cleanseName(location.state.tempat_3_district);
            location.state.tempat_3_city = cleanseName(location.state.tempat_3_city);
            location.state.tempat_3_province = cleanseName(location.state.tempat_3_province);
        }

        // navigate("/results", {state: location.state})
        navigate("/results", {state: {
            preferensi_jenis: location.state.preferensi_jenis,
            jangkauan_harga_min: location.state.jangkauan_harga_min,
            jangkauan_harga_max: location.state.jangkauan_harga_max,
            jumlah_orang: location.state.jumlah_orang,
            daftar_fitur: features_string_array,
            tempat_1_id: location.state.tempat_1_id,
            tempat_2_id: location.state.tempat_2_id,
            tempat_3_id: location.state.tempat_3_id,
            tempat_1_district: location.state.tempat_1_district,
            tempat_1_city: location.state.tempat_1_city,
            tempat_1_province: location.state.tempat_1_province,
            tempat_2_district: location.state.tempat_2_district,
            tempat_2_city: location.state.tempat_2_city,
            tempat_2_province: location.state.tempat_2_province,
            tempat_3_district: location.state.tempat_3_district,
            tempat_3_city: location.state.tempat_3_city,
            tempat_3_province: location.state.tempat_3_province
        }});
    }

    return(
        <>
        
        <h1 className="defCentered">Konfirmasi parameter</h1>
        
        <br></br>
        <form>
            <table className="defTable">
                <tbody>
                    {/* <tr>
                        <td colSpan="2">
                            <h2>Adakah tempat atau area tertentu yang anda ingin dekat dengan properti ini?</h2>
                        </td>
                    </tr> */}
                    <tr>
                        <td>Beli/sewa:</td>
                        <td>
                            {location.state.preferensi_jenis}
                        </td>
                        <td>jumlah orang</td>
                        <td>
                            {location.state.jumlah_orang}
                        </td>
                    </tr>
                    <tr>
                        <td>Jangkauan harga:</td>
                        <td>
                            Rp. {location.state.jangkauan_harga_min}
                        </td>
                        <td>sampai dengan</td>
                        <td>
                            Rp. {location.state.jangkauan_harga_max}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Fitur-fitur:</td>
                        <td colSpan="2">
                            {features.map((featurebool, index) => {
                                if(featurebool === true) {
                                    return(
                                        <li>{features_string[index]}</li>
                                    );
                                }
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Tempat penting 1:</td>
                        <td colSpan="2">
                            {location.state.tempat_1}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Tempat penting 2:</td>
                        <td colSpan="2">
                            {location.state.tempat_2 || "tidak ada"}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">Tempat penting 3:</td>
                        <td colSpan="2">
                            {location.state.tempat_3 || "tidak ada"}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <button className="defButton" onClick={goToResults} >Dapatkan rekomendasi properti</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <Outlet />
        </>
    );
}

export default Confirmation;