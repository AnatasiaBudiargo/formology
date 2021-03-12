import React from "react";
import "../../App.css";
import HeroNews from "../items1/HeroNews";
import Navbar from "../items1/Navbar";
import Footer from "../items1/Footer";
import News_Artikel from "../items2/News_Artikel";

function News() {
    return (
        <>
            <Navbar />
            <HeroNews />
            <News_Artikel />
            <Footer />
        </>
    );
}

export default News;
