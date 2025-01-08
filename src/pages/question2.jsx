// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

function Question2() {
    const location = useLocation();

    const [question2data, setQuestion2data] = useState(
        new Array(16).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = question2data.map((item, index) =>
          index === position ? !item : item
        );
    
        setQuestion2data(updatedCheckedState);
    };

    const navigate = useNavigate();

    // const [customStatusMessage, setCustomStatusMessage] = useState({message: "", status: 0});

    useEffect(() => {
    });

    const goToQuestion3 = (e) => {
        e.preventDefault();
        navigate("/question3", {state: {
            preferensi_jenis: location.state.preferensi_jenis,
            jangkauan_harga_min: location.state.jangkauan_harga_min,
            jangkauan_harga_max: location.state.jangkauan_harga_max,
            jumlah_orang: location.state.jumlah_orang,
            daftar_fitur: question2data
        }})
    }

    return(
        <>
        
        <h1 className="defCentered">Halaman 2</h1>
        
        <br></br>
        <form>
        <h2 className="defCentered">Fitur-fitur mana sajakah yang anda inginkan?</h2>
            <table className="defTable">
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="feature0" value="Swimming Pool"
                            checked={question2data[0]} onChange={() => handleOnChange(0)} />
                            <label htmlFor="feature0"> Kolam Renang</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature1" value="Air Conditioning"
                            checked={question2data[1]} onChange={() => handleOnChange(1)} />
                            <label htmlFor="feature1"> AC</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature2" value="Internet"
                            checked={question2data[2]} onChange={() => handleOnChange(2)} />
                            <label htmlFor="feature2"> Internet</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="feature3" value="Security"
                            checked={question2data[3]} onChange={() => handleOnChange(3)} />
                            <label htmlFor="feature3"> Security</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature4" value="Balcony"
                            checked={question2data[4]} onChange={() => handleOnChange(4)} />
                            <label htmlFor="feature4"> Balkon</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature5" value="Equipped Kitchen"
                            checked={question2data[5]} onChange={() => handleOnChange(5)} />
                            <label htmlFor="feature5"> Dapur Lengkap</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="feature6" value="Car Park"
                            checked={question2data[6]} onChange={() => handleOnChange(6)} />
                            <label htmlFor="feature6"> Parkir mobil</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature7" value="CCTV"
                            checked={question2data[7]} onChange={() => handleOnChange(7)} />
                            <label htmlFor="feature7"> CCTV</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature8" value="Cellar"
                            checked={question2data[8]} onChange={() => handleOnChange(8)} />
                            <label htmlFor="feature8"> Gudang bawah tanah</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="feature9" value="Garden"
                            checked={question2data[9]} onChange={() => handleOnChange(9)} />
                            <label htmlFor="feature9"> Taman</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature10" value="Electricity"
                            checked={question2data[10]} onChange={() => handleOnChange(10)} />
                            <label htmlFor="feature10"> Listrik</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature11" value="Roof Garden"
                            checked={question2data[11]} onChange={() => handleOnChange(11)} />
                            <label htmlFor="feature11"> Taman atap</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="feature12" value="Terrace"
                            checked={question2data[12]} onChange={() => handleOnChange(12)} />
                            <label htmlFor="feature12"> Teras</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature13" value="Built-in kitchen"
                            checked={question2data[13]} onChange={() => handleOnChange(13)} />
                            <label htmlFor="feature13"> Dapur built-in</label>
                        </td>
                        <td>
                            <input type="checkbox" name="feature14" value="Cistern"
                            checked={question2data[14]} onChange={() => handleOnChange(14)} />
                            <label htmlFor="feature14"> Tadah / Cistern</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="feature15" value="Alarm"
                            checked={question2data[15]} onChange={() => handleOnChange(15)} />
                            <label htmlFor="feature15"> Alarm</label>
                        </td>
                        <td>
                            {/* <input type="checkbox" name="feature13" value="Built-in kitchen"
                            checked={question2data[13]} onChange={() => handleOnChange(13)} />
                            <label htmlFor="feature13"> Balkon</label> */}
                        </td>
                        <td>
                            {/* <input type="checkbox" name="feature14" value="Cistern"
                            checked={question2data[14]} onChange={() => handleOnChange(14)} />
                            <label htmlFor="feature14"> Dapur Lengkap</label> */}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <button className="defButton" onClick={goToQuestion3} disabled={false}>Lanjut</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <Outlet />
        </>
    );
}

export default Question2;