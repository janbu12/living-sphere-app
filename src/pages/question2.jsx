// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Question2() {
    const location = useLocation();
    const [error, setError] = useState('');

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

        if (!question2data.some(item => item)) {
            setError('Harap pilih minimal satu fitur.');
            return;
        }

        navigate("/question3", {state: {
            preferensi_jenis: location.state.preferensi_jenis,
            jangkauan_harga_min: location.state.jangkauan_harga_min,
            jangkauan_harga_max: location.state.jangkauan_harga_max,
            jumlah_orang: location.state.jumlah_orang,
            daftar_fitur: question2data
        }})
    }

    return (
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/image/background2.jpg')" }}
        >
          {/* Navbar */}
          <Navbar />
      
          {/* Konten Utama */}
          <div className="max-w-2xl mx-auto p-6 bg-black bg-opacity-70 shadow-lg rounded-lg mt-10">
            <h2 className="text-center text-lg font-semibold mb-6 text-white">
              Fitur apa sajakah yang Anda inginkan?
            </h2>
            <form>
              {/* Daftar Fitur */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Kolam Renang",
                  "AC",
                  "Internet",
                  "Security",
                  "Balkon",
                  "Dapur Lengkap",
                  "Parkir mobil",
                  "CCTV",
                  "Gudang bawah tanah",
                  "Taman",
                  "Listrik",
                  "Taman atap",
                  "Teras",
                  "Dapur built-in",
                  "Tadah / Cistern",
                  "Alarm",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`feature${index}`}
                      checked={question2data[index]}
                      onChange={() => handleOnChange(index)}
                      className="mr-2"
                    />
                    <label htmlFor={`feature${index}`} className="text-white">
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
      
              {/* Pesan Error */}
              {error && <p className="text-red-600 mt-4">{error}</p>}
      
              {/* Tombol Lanjut */}
              <div className="text-center mt-6">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-all duration-[250ms]"
                  onClick={goToQuestion3}
                  disabled={false}
                >
                  Lanjut
                </button>
              </div>
            </form>
          </div>
      
          {/* Outlet */}
          <Outlet />
        </div>
      );
}

export default Question2;