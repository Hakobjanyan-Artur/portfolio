import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function HomeWrapper({togglelang, setTogglelang}) {

    return (
        <div className="wr">
            <Navbar togglelang={togglelang} setTogglelang={setTogglelang} />
            <Outlet /> 
        </div>
    )
}

export default HomeWrapper