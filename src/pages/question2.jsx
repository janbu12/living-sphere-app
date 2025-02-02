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

    const goToHome = (e) => {
        e.preventDefault();
        navigate("/", {state: {
        }})
    }

    return(
        <>
                <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background2.jpg')" }}>
            <div className="flex items-center space-x-5 pt-5 pl-5">
                <h3 className="text-4xl text-white font-semibold">CariProperti</h3>
                <button onClick={goToHome} className="text-l text-white ml-3">Home</button>
            </div>
            
            <hr className="mt-5 mb-5 border-t-2 border-white" />
            <div className="max-w-3xl mx-auto p-8 bg-black bg-opacity-60 shadow-md rounded-md border">
            <h2 className="text-center text-lg font-semibold mb-6 text-white">fitur apa sajakah yang anda inginkan?</h2>

            <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature0"
                            value="Swimming Pool"
                            checked={question2data[0]}
                            onChange={() => handleOnChange(0)}
                            id="feature0"
                        />
                        <label htmlFor="feature0" className="ml-2 text-white">Kolam Renang</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature1"
                            value="Air Conditioning"
                            checked={question2data[1]}
                            onChange={() => handleOnChange(1)}
                            id="feature1"
                        />
                        <label htmlFor="feature1" className="ml-2 text-white">AC</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature2"
                            value="Internet"
                            checked={question2data[2]}
                            onChange={() => handleOnChange(2)}
                            id="feature2"
                        />
                        <label htmlFor="feature2" className="ml-2 text-white">Internet</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature3"
                            value="Security"
                            checked={question2data[3]}
                            onChange={() => handleOnChange(3)}
                            id="feature3"
                        />
                        <label htmlFor="feature3" className="ml-2 text-white">Security</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature4"
                            value="Balcony"
                            checked={question2data[4]}
                            onChange={() => handleOnChange(4)}
                            id="feature4"
                        />
                        <label htmlFor="feature4" className="ml-2 text-white">Balkon</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature5"
                            value="Equipped Kitchen"
                            checked={question2data[5]}
                            onChange={() => handleOnChange(5)}
                            id="feature5"
                        />
                        <label htmlFor="feature5" className="ml-2 text-white">Dapur Lengkap</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature6"
                            value="Car Park"
                            checked={question2data[6]}
                            onChange={() => handleOnChange(6)}
                            id="feature6"
                        />
                        <label htmlFor="feature6" className="ml-2 text-white">Parkir mobil</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature7"
                            value="CCTV"
                            checked={question2data[7]}
                            onChange={() => handleOnChange(7)}
                            id="feature7"
                        />
                        <label htmlFor="feature7" className="ml-2 text-white">CCTV</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature8"
                            value="Cellar"
                            checked={question2data[8]}
                            onChange={() => handleOnChange(8)}
                            id="feature8"
                        />
                        <label htmlFor="feature8" className="ml-2 text-white">Gudang bawah tanah</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature9"
                            value="Garden"
                            checked={question2data[9]}
                            onChange={() => handleOnChange(9)}
                            id="feature9"
                        />
                        <label htmlFor="feature9" className="ml-2 text-white">Taman</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature10"
                            value="Electricity"
                            checked={question2data[10]}
                            onChange={() => handleOnChange(10)}
                            id="feature10"
                        />
                        <label htmlFor="feature10" className="ml-2 text-white">Listrik</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature11"
                            value="Roof Garden"
                            checked={question2data[11]}
                            onChange={() => handleOnChange(11)}
                            id="feature11"
                        />
                        <label htmlFor="feature11" className="ml-2 text-white">Taman atap</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature12"
                            value="Terrace"
                            checked={question2data[12]}
                            onChange={() => handleOnChange(12)}
                            id="feature12"
                        />
                        <label htmlFor="feature12" className="ml-2 text-white">Teras</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature13"
                            value="Built-in kitchen"
                            checked={question2data[13]}
                            onChange={() => handleOnChange(13)}
                            id="feature13"
                        />
                        <label htmlFor="feature13" className="ml-2 text-white">Dapur built-in</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature14"
                            value="Cistern"
                            checked={question2data[14]}
                            onChange={() => handleOnChange(14)}
                            id="feature14"
                        />
                        <label htmlFor="feature14" className="ml-2 text-white">Tadah / Cistern</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="feature15"
                            value="Alarm"
                            checked={question2data[15]}
                            onChange={() => handleOnChange(15)}
                            id="feature15"
                        />
                        <label htmlFor="feature15" className="ml-2 text-white">Alarm</label>
                    </div>
                </div>

                        <div className="text-center mt-4">
                    <button
                        className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-20 rounded-lg shadow-md"
                        onClick={goToQuestion3}
                        disabled={false}
                    >
                        Lanjut
                    </button>
                </div>
            </form>
        </div>
        <Outlet />
        </div>
    </>
);
}

export default Question2;