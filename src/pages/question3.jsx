// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Autocomplete from "react-autocomplete";
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function Question3() {
    const location = useLocation();
    const [locationValue, setLocationValue] = useState({lok1: "", lok2: "", lok3: ""})
    const [locationInput, setLocationInput] = useState({lok1: "", lok2: "", lok3: ""})
    const [question3data, setQuestion3data] = useState({lat_Lokasi_1: 0, lon_lokasi_1: 0, lat_Lokasi_2: 0, lon_lokasi_2: 0, lat_Lokasi_3: 0, lon_lokasi_3: 0});

    const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
    ];

    const navigate = useNavigate();

    // const [customStatusMessage, setCustomStatusMessage] = useState({message: "", status: 0});

    const updateQuestion3data = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setQuestion3data(values => ({...values, [name]: value}));
    };

    const updateLocationValue = (event, nameA) => {
        const value = event.target.value;
        console.log("NAME " + nameA);
        console.log("VALUE " + value);
        setLocationValue(values => ({...values, [nameA]: value}));
        console.log("locationValue.lok1: " + locationValue.lok1)
    };

    const updateLocationInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("INPUT " + value);
        setLocationInput(values => ({...values, [name]: value}));
    };

    useEffect(() => {
    });

    const goToResults = (e) => {
        e.preventDefault();
        navigate("/results", {state: {}})
    }

    return(
        <>
        
        <h1 className="defCentered">Halaman 3</h1>
        
        <br></br>
        <form>
            <table className="defTable">
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <h2>Adakah tempat atau area tertentu yang anda ingin dekat dengan properti ini?</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Tempat penting 1:</td>
                        <td>
                            <div class="defInput">
                            <Autocomplete
                                className="text-red-300"
                                getItemValue={(item) => item.label}
                                value={locationValue.lok1}
                                onChange={(e) => {
                                    updateLocationValue(e, "lok1");
                                }}
                                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                                items={options}
                                sx={{ width: 300, color: red }}
                                renderItem={(item, highlighted) =>
                                    <div
                                    key={item.id}
                                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                    >
                                    {item.label}
                                    </div>
                                }
                            />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button className="defButton" onClick={goToResults} disabled={false}>Lanjut</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <Outlet />
        </>
    );
}

export default Question3;