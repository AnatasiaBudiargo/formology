import React from "react";
import "../../App.css";
import Navbar from "../items1/Navbar";
import HeroService from "../items1/HeroService";
import Service_New from "../items2/Service_New";
// import Service_PanganPertanian from "../items2/Service_PanganPertanian";
import Footer from "../items1/Footer";

function Service() {
    return (
        <>
            <Navbar />
            <HeroService />
            <Service_New />
            {/* <Service_PanganPertanian /> */}
            <Footer />
        </>
    );
}

export default Service;
