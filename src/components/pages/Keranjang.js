import React from "react";
import "../../App.css";
import Navbar from "../items1/Navbar";
import HeroService from "../items1/HeroService";
import Keranjang from "../items2/Service_Keranjang";
import Footer from "../items1/Footer";

function Service() {
    return (
        <>
            <Navbar />
            <HeroService />
            <Keranjang />
            <Footer />
        </>
    );
}

export default Service;
