import React from "react";
import "../../App.css";
import "./Service_PanganPertanian.css";
import { Row, Col } from "antd";
import image from "../../images/service-segeraHadir.png";
import image2 from "../../images/google.png";
import { Input } from "antd";
import { Menu, Dropdown, Button, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import bawangmerah from "../../images/bawang merah.png";
import bawangputih from "../../images/bawang putih.png";
import jahe from "../../images/jahe.png";

function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">Paling sesuai</Menu.Item>
        <Menu.Item key="2">Harga terendah</Menu.Item>
        <Menu.Item key="3">Ulasan terbanyak</Menu.Item>
    </Menu>
);

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
                                        <button> Rempah - rempah </button>
                                    </li>
                                    <li id="list">
                                        <button> Sayuran </button>
                                    </li>
                                    <li id="list">
                                        <button> Buah - buahan </button>
                                    </li>
                                    <li id="list">
                                        <button> Bibit </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="InfoBerlangganan sides">
                                <ul>
                                    <li>
                                        <h3> Info Berlangganan </h3>
                                    </li>
                                    <li style={{ width: 250, marginLeft: 40 }}>
                                        Get all the latest information on
                                        Events, Sales and Offers.
                                    </li>
                                    <li>
                                        <Input
                                            placeholder="Basic usage"
                                            style={{
                                                width: 270,
                                                height: 40,
                                            }}
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
                    <Col sm={{ span: 15 }} xs={{ span: 24 }}>
                        <div className="content" style={{ marginLeft: -60 }}>
                            <Row>
                                <Col span={12} id="rekom">
                                    Rekomendasi
                                </Col>
                                <Col span={12} style={{ textAlign: "right" }}>
                                    Urutkan Berdasarkan :
                                    <Space wrap>
                                        <Dropdown overlay={menu}>
                                            <Button style={{ width: 150 }}>
                                                Paling Sesuai <DownOutlined />
                                            </Button>
                                        </Dropdown>
                                    </Space>
                                </Col>
                            </Row>
                            <div className="rekomendasi">
                                <div className="container">
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangputih} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Putih </h2>
                                                <p> SUDORSONO, BOJONEGORO </p>
                                                <h5> Rp. 65.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={jahe} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Jahe </h2>
                                                <p> SAMSUDIN, NGANJUK </p>
                                                <h5> Rp. 50.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="card">
                                        <div className="image">
                                            <img src={bawangmerah} />
                                        </div>
                                        <Row>
                                            <Col span={12}>
                                                <h2> Bawang Merah </h2>
                                                <p> SUMARTONO, BANYUWANGI </p>
                                                <h5> Rp. 75.000/kg </h5>
                                            </Col>
                                            <Col span={12}>
                                                <button> Beli </button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
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
