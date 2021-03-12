import React from "react";
import "../../App.css";
import "./News_Artikel.css";
import folderphotos from "../../images/photos.png";

import { Row, Col } from "antd";

function News_Artikel() {
    return (
        <div className="container-news">
            <div className="content">
                <div className="tulis-artikel">
                    <Row>
                        <Col span={12}>foto</Col>
                        <Col span={12}>tulis artikel</Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <div className="upload">
                                <img
                                    src={folderphotos}
                                    style={{ width: 30, height: 25 }}
                                />
                                <span> Foto / Gambar </span>
                            </div>
                        </Col>
                        <Col span={8}>lokasi</Col>
                        <Col span={8}>tandai teman anda</Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default News_Artikel;
