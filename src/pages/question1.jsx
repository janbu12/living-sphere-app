// import { React, useEffect } from "react";
import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

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
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/background2.jpg')" }}>
      <Navbar />
      <div className="flex w-full justify-center mt-8">
        <div className="max-w-max w-full p-8 bg-black bg-opacity-70 rounded-lg shadow-lg border">
          <form>
            {/* Pertanyaan Jenis Properti */}
            <div className="mb-6">
              <label className="text-white block font-semibold mb-2">
                Apakah Anda ingin <b>menyewa</b> atau <b>membeli</b> properti?
              </label>
              <select
                name="preferensi_jenis"
                className="w-full p-3 bg-white text-slate-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                value={question1data.preferensi_jenis}
                onChange={(e) => updateQuestion1data(e)}
              >
                <option value="Hanya sewa">Hanya sewa</option>
                <option value="Hanya beli">Hanya beli</option>
              </select>
            </div>
    
            {/* Input Harga */}
            <div className="mb-6">
              <label className="text-white block font-semibold mb-2">
                Apa jangkauan harga Anda?
              </label>
              <div className="flex gap-4">
                {/* Minimum Harga */}
                <div className="flex-1">
                  <label className="text-white text-sm mb-1 block text-center">Minimum</label>
                  <div className="flex items-center bg-white rounded-lg overflow-hidden">
                    <span className="text-slate-900 px-2">Rp.</span>
                    <input
                      className="w-full p-3 bg-transparent text-slate-900 focus:outline-none"
                      type="number"
                      name="jangkauan_harga_min"
                      min={0}
                      value={question1data.jangkauan_harga_min}
                      onChange={(e) => updateQuestion1data(e)}
                    />
                  </div>
                </div>
    
                {/* Maksimum Harga */}
                <div className="flex-1">
                  <label className="text-white text-sm mb-1 block text-center">Maksimum</label>
                  <div className="flex items-center bg-white rounded-lg overflow-hidden">
                    <span className="text-slate-900 px-2">Rp.</span>
                    <input
                      className="w-full p-3 bg-transparent text-slate-900 focus:outline-none"
                      type="number"
                      name="jangkauan_harga_max"
                      value={question1data.jangkauan_harga_max}
                      min={0}
                      onChange={(e) => updateQuestion1data(e)}
                    />
                    <span className="text-slate-900 px-2 text-sm">
                      {question1data.preferensi_jenis === "Hanya sewa" ? "/ bulan" : " total"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Jumlah Orang */}
            <div className="mb-6">
              <label className="text-white block font-semibold mb-2">
                Berapa orang yang akan memakai properti ini?
              </label>
              <div className="flex items-center bg-white rounded-lg overflow-hidden">
                <input
                  className="w-full p-3 bg-transparent text-slate-900 focus:outline-none"
                  type="number"
                  name="jumlah_orang"
                  min={0}
                  value={question1data.jumlah_orang}
                  onChange={(e) => updateQuestion1data(e)}
                />
              </div>
            </div>
    
            {/* Tombol Lanjut */}
            <div className="text-center">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200"
                onClick={goToQuestion2}
              >
                Lanjut
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
      
}


export default Question1;