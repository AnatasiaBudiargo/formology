import React from "react";
import "../../App.css";
import image1 from "../../images/jumbotronPasar.png";
import { Row, Col } from "antd";
import "./HeroService.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
// import { orange } from "@ant-design/colors";
import image from "../../images/Group 264.png";

const { Search } = Input;

const onSearch = (value) => console.log(value);

function HeroService() {
    return (
        <div className="heroService-container">
            <img src={image1} />
            <div className="judul">
                <Row>
                    <Col sm={{ span: 12 }} xs={{ span: 24 }}>
                        <div className="left">
                            <Row>
                                <Col span={18}>
                                    <h1> Carilah kebutuhan anda Disini. </h1>
                                </Col>
                                <Col span={24}>
                                    <Space direction="vertical">
                                        <Search
                                            placeholder="Masukkan pencarian"
                                            allowClear
                                            enterButton="Cari"
                                            size="large"
                                            style={{ width: 400 }}
                                            onSearch={onSearch}
                                        />
                                    </Space>
                                </Col>
                                <Col span={16}>
                                    <p>
                                        Menyediakan berbagai stok bahan pangan
                                        nusantara Beserta alat - alat kebutuhan
                                        pertanian
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={{ span: 12 }} xs={{ span: 24 }}>
                        <div className="right">
                            <img src={image} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HeroService;
