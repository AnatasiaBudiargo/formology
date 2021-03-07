import React from 'react'
import '../App.css';
import './HeroHome.css';
import video1 from '../videos/video-2.mp4'
import { Row, Col } from 'antd';
// import { Link } from 'react-router-dom';

function HeroHome() {
    return ( <
        div className = "heroHome-container" >
        <
        video autoPlay loop muted > < source src = { video1 }
        type = "video/mp4" / > < /video>  <
        div className = 'writter' >
        <
        Row >
        <
        Col sm = {
            { span: 12 } }
        xs = {
            { span: 24 } } >
        <
        h5 > SELAMAT DATANG DI < /h5> <
        /Col> <
        /Row> <
        Row >
        <
        Col sm = {
            { span: 12 } }
        xs = {
            { span: 24 } } >
        <
        h1 > FARMOLOGY < /h1> <
        /Col> <
        /Row> <
        Row >
        <
        Col sm = {
            { span: 11 } }
        xs = {
            { span: 24 } } >
        <
        p > menyediakan kebutuhan agraria anda sebagai solusi menuju Indonesia yang lebih sejahtera < /p> <
        /Col> <
        /Row> <
        /div>

        <
        /div>

    )
}

export default HeroHome