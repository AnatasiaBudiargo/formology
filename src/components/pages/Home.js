import React from "react";
import "../../App.css";
import Navbar from "../items1/Navbar";
import HeroHome from "../items1/HeroHome";
import Home_SeputarPertanian from "../items2/Home_SeputarPertanian";
import Footer from "../items1/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <HeroHome />
            <Home_SeputarPertanian />
            <Footer />
        </>
    );
}

export default Home;
