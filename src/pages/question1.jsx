// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

function Question1() {
    const location = useLocation();
    const [question1data, setQuestion1data] = useState({preferensi_jenis: "Hanya sewa", jangkauan_harga_min: 0, jangkauan_harga_max: 150000000000, jumlah_orang: 1});

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

    const goToHome = (e) => {
      e.preventDefault();
      navigate("/", {state: {
      }})
  }


    return (
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/image/background2.jpg')" }}
        >
          <div className="flex items-center space-x-5 pt-5 pl-5">
            <h3 className="text-4xl text-white font-semibold">CariProperti</h3>
            <button onClick={goToHome} className="text-l text-white ml-3">Home</button>
          </div>
      
          <hr className="mt-5 mb-5 border-t-2 border-white " />
          <div className="max-w-3xl mx-auto p-8 bg-black bg-opacity-60 shadow-md rounded-md border">
            <form>
              <div className="mb-4">
                <label className="text-white block font-medium mb-1">
                  Apakah anda ingin <b>menyewa</b> atau <b>membeli</b> properti?
                </label>
                <select
                  name="preferensi_jenis"
                  className="defInput w-full p-2 border rounded-md"
                  value={question1data.preferensi_jenis}
                  onChange={(e) => updateQuestion1data(e)}
                >
                  <option value="Hanya sewa">Hanya sewa</option>
                  <option value="Hanya beli">Hanya beli</option>
                </select>
              </div>
      
              {/* Input Harga */}
              <div className="mb-4 grid grid-cols-2 gap-2">
                <label className="text-white col-span-2 block font-medium">
                  Apa jangkauan harga anda?
                </label>
      
                {/* Minimum Harga */}
                <div className="flex flex-col">
                  <label className="text-center text-white text-sm mb-1">Minimum</label>
                  <div className="flex items-center">
                    <span className="text-white mr-2">Rp.</span>
                    <input
                      className="defInput w-full p-2 border rounded-md"
                      type="number"
                      name="jangkauan_harga_min"
                      value={question1data.jangkauan_harga_min}
                      onChange={(e) => updateQuestion1data(e)}
                    />
                  </div>
                </div>
      
                {/* Maksimum Harga */}
                <div className="flex flex-col">
                  <label className="text-center text-white text-sm mb-1">Maksimum</label>
                  <div className="flex items-center gap-2">
                    <span className="text-white">Rp.</span>
                    <input
                      className="defInput w-full p-2 border rounded-md"
                      type="number"
                      name="jangkauan_harga_max"
                      value={question1data.jangkauan_harga_max}
                      onChange={(e) => updateQuestion1data(e)}
                    />
                    <span className="text-white text-sm">
                      {question1data.preferensi_jenis === "Hanya sewa"
                        ? " / bulan"
                        : " total"}
                    </span>
                  </div>
                </div>
              </div>
      
              {/* Jumlah Orang */}
              <div className="mb-4">
                <label className="text-white block font-medium mb-1">
                  Berapa orang yang akan memakai properti ini?
                </label>
                <input
                  className="defInput w-full p-2 border rounded-md"
                  type="number"
                  name="jumlah_orang"
                  value={question1data.jumlah_orang}
                  onChange={(e) => updateQuestion1data(e)}
                />
              </div>
      
              {/* Tombol Lanjut */}
              <div className="text-center mt-6">
                <button
                  className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-10 rounded-lg shadow-md"
                  onClick={goToQuestion2}
                  disabled={false}
                >
                  Lanjut
                </button>
              </div>
            </form>
            <Outlet />
          </div>
        </div>
      );
      
}


export default Question1;