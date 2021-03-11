import React from "react";
import "../../App.css";
import "./HeroProfile.css";
import video1 from "../../videos/video-2.mp4";

function HeroProfile() {
    return (
        <div className="hero-container">
            <video autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
            <h1> PROFILE </h1> <p> Lorem Ipsum is simply </p>
        </div>
    );
}

export default HeroProfile;
