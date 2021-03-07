import React from 'react'
import './Footer.css';
import { Row, Col } from 'antd';
import image1 from '../images/farmology logo-01-01.png'

function Footer() {
    return ( <
        div className = 'footer-container' >
        <
        Row className = 'title' >
        <
        Col span = { 12 } > < img src = { image1 }
        /> <span> FARMOLOGY </span > < /Col> <
        /Row> <
        Row >
        <
        Col sm = {
            { span: 8 } }
        xs = {
            { span: 24 } } >
        <
        h2 > TENTANG KAMI < /h2> <
        p > Kami melayani segala < br / > permintaan mengenai < br / > agraria baik dalam < br / > kebutuhaan pangan < br / > maupun peralatan. < /p>   <
        /Col> <
        Col sm = {
            { span: 8 } }
        xs = {
            { span: 24 } } >
        <
        h2 > HUBUNGI KAMI < /h2> <
        p > Kantor Farmology < br / > Jl.Jalan Veteran No .8, Ketawanggede, < br / > Kecamatan Lowokwaru, Kota Malang, Jawa Timur 65145 < /p> <
        p > Senin - Jumat 09.00 - 17.00 < br / > Email: help @farmology.com < /p> <
        /Col> <
        Col sm = {
            { span: 8 } }
        xs = {
            { span: 24 } } >
        <
        h2 > BANTUAN DAN PANDUAN < /h2> <
        p > Syarat dan Ketentuan Kebijakan Privasi < /p> <
        /Col> <
        /Row> <
        Row className = 'caption' >
        <
        Col span = { 24 } > ©FARMOLOGY < /Col> <
        /Row>

        <
        /div>
    );
};
export default Footer