import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroDashboard.css';
import video1 from '../videos/video-2.mp4'
import image1 from '../images/farmology logo-01-01.png'
import { Link } from 'react-router-dom';

function HeroDashboard() {
    return ( <
        div className = "heroDashboard-container" >
        <
        video autoPlay loop muted > < source src = { video1 }
        type = "video/mp4" / > < /video>  <
        img src = { image1 }
        />  <
        h3 > FARMOLOGY < /h3> <
        div className = "hero-button" >
        <
        Link to = '/SignUp' > < Button className = "button"
        buttonStyle = "btn-outline"
        buttonSize = "btn-large" > DAFTAR < /Button> </Link >
        <
        Link to = '/Login' > < Button className = "button"
        buttonStyle = "btn-primary"
        buttonSize = "btn-large" > MASUK < /Button> </Link >
        <
        /div> <
        /div>
    )
}

export default HeroDashboard