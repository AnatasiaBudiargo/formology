import React from "react";
import "../../App.css";
import "./MemulihkanKataSandi.css";
import video1 from "../../videos/video-2.mp4";
import image from "../../images/farmology logo-01-01.png";
import { Input } from "antd";
// import { Link } from "react-router-dom";

function MemulihkanKataSandi() {
    return (
        <div className="heroMemulihkanKataSandi-container">
            <video autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
            <img src={image} style={{ height: 100 }} />
            <h2> FARMOLOGY </h2>
            <div className="container">
                <h1> Memulihkan kata sandi </h1>
                <hr />
                <h5 id="atas"> Tenang saja, kami akan berikan solusinya. </h5>
                <h5> Masukkan email anda yang telah terverifikasi </h5>
                <Input placeholder="" style={{ width: 350 }} />
                <button style={{ width: 350 }}>
                    Kirim password ke email saya
                </button>
            </div>
        </div>
    );
}

export default MemulihkanKataSandi;
