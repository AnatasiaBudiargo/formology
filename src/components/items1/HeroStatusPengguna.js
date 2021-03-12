import React from "react";
import "../../App.css";
import "./HeroStatusPengguna.css";
import video1 from "../../videos/video-2.mp4";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function HeroStatusPengguna() {
    return (
        <div className="heroStatusPengguna-container">
            <video autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
            <h1> Apakah anda sebagai? </h1>
            <div className="hero-button">
                <Link to="/SignUp">
                    <Button
                        className="button"
                        buttonStyle="btn-outline"
                        buttonSize="btn-large"
                    >
                        Pemasok
                    </Button>
                </Link>
                <Link to="/SignUp">
                    <Button
                        className="button"
                        buttonStyle="btn-primary"
                        buttonSize="btn-large"
                    >
                        Pembeli
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroStatusPengguna;
