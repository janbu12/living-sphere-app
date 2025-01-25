import { React, useState, useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

function NoPropertiesFound() {
    return(
        <>
        
        <h1 className="defCentered">Maaf! Tidak ada properti yang ditemukan!</h1>
        <h2 className="defCentered">Silahkan mencoba mencari lagi</h2>

        <Outlet />
        </>
    );
};

export default NoPropertiesFound;