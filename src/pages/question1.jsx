// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

function Question1() {
    const location = useLocation();
    const [question1data, setQuestion1data] = useState({preferensi_jenis: "Hanya sewa", jangkauan_harga_min: 0, jangkauan_harga_max: 15000000, jumlah_orang: 1});

    const navigate = useNavigate();

    // const [customStatusMessage, setCustomStatusMessage] = useState({message: "", status: 0});

    const updateQuestion1data = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setQuestion1data(values => ({...values, [name]: value}));
    };

    useEffect(() => {
    });

    const goToQuestion2 = (e) => {
        e.preventDefault();
        navigate("/question2", {state: {
            preferensi_jenis: question1data.preferensi_jenis,
            jangkauan_harga_min: question1data.jangkauan_harga_min,
            jangkauan_harga_max: question1data.jangkauan_harga_max,
            jumlah_orang: question1data.jumlah_orang
        }})
    }

    return(
        <>
        
        <h1 className="defCentered">Halaman 1</h1>
        
        <br></br>
        <form>
            <table className="defTable">
                <tbody>
                    <tr>
                        <td>Apakah anda ingin <b>menyewa</b> atau <b>membeli</b> properti?</td>
                        <td colSpan="3"><select name="preferensi_jenis" className="defInput"
                            value={question1data.preferensi_jenis} onChange={(e) => updateQuestion1data(e)}>
                                <option value="Hanya sewa">Hanya sewa</option>
                                <option value="Hanya beli">Hanya beli</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td>Apa jangkauan harga anda?</td>
                        <td>Rp. <input className="defInput" type="number" name="jangkauan_harga_min"
                        value={question1data.jangkauan_harga_min} onChange={(e) => updateQuestion1data(e)} /></td>
                        <td> - </td>
                        <td>Rp. <input className="defInput" type="number" name="jangkauan_harga_max"
                        value={question1data.jangkauan_harga_max} onChange={(e) => updateQuestion1data(e)} /> 
                        {question1data.preferensi_jenis === "Hanya sewa" ? " / bulan" : " total"} </td>
                    </tr>
                    <tr>
                        <td>Berapa orang yang akan memakai properti ini?</td>
                        <td colSpan="3"><input className="defInput" type="number" name="jumlah_orang"
                        value={question1data.jumlah_orang} onChange={(e) => updateQuestion1data(e)} /></td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <button className="defButton" onClick={goToQuestion2} disabled={false}>Lanjut</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <Outlet />
        </>
    );
}

export default Question1;