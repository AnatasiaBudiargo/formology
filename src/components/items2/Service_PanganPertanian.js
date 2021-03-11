import React from "react";
import "../../App.css";
import "./Service_PanganPertanian.css";
import { Row, Col } from "antd";
import image from "../../images/service-segeraHadir.png";
import image2 from "../../images/google.png";
import { Input } from "antd";

function Service_PanganPertanian() {
    return (
        <div className="container-bahan-pangan">
            <div className="options">
                <Row className="row">
                    <Col span={12} id="left">
                        <a href=""> Bahan Pangan </a>
                    </Col>
                    <Col span={12}>
                        <a href=""> Bahan Pertanian </a>
                    </Col>
                </Row>
            </div>
            <div className="konten">
                <Row>
                    <Col sm={{ span: 8 }} xs={{ span: 24 }}>
                        <div className="sidebar">
                            <div className="sides" id="kategori">
                                <ul>
                                    <li className="cat">
                                        <h2> Kategori </h2>
                                    </li>
                                    <li id="list">
                                        <a href=""> Rempah - rempah </a>
                                    </li>
                                    <li id="list">
                                        <a href=""> Sayuran </a>
                                    </li>
                                    <li id="list">
                                        <a href=""> Buah - buahan </a>
                                    </li>
                                    <li id="list">
                                        <a href=""> Bibit </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="InfoBerlangganan sides">
                                <ul>
                                    <li>
                                        <h4> Info Berlangganan </h4>
                                    </li>
                                    <li>
                                        Get all the latest information on
                                        Events, Sales and Offers.
                                    </li>
                                    <li>
                                        <Input
                                            placeholder="Basic usage"
                                            style={{ width: 200 }}
                                            placeholder="Alamat Email"
                                        />
                                    </li>
                                    <li>
                                        <button> Berlangganan </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={{ span: 16 }} xs={{ span: 24 }}>
                        <div className="content">b</div>
                    </Col>
                </Row>
            </div>
            <div className="segeraHadir">
                <div className="content">
                    <h1> Segera hadir di ponsel anda </h1>
                    <h2>
                        Farmology akan segera hadir di playstore dengan tampilan
                        yang memanjakan mata.
                    </h2>
                    <img src={image2} />
                </div>
                <img src={image} className="image" />
            </div>
        </div>
    );
}

export default Service_PanganPertanian;
