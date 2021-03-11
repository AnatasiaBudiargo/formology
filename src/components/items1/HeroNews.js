import React from "react";
import "../../App.css";
import "./HeroNews.css";
import image1 from "../../images/jumbotronArtikel.jpg";
import { Row, Col } from "antd";

function HeroNews() {
    return (
        <div className="heroNews-container">
            <img src={image1} />
            <div className="judul">
                <Row>
                    <Col sm={{ span: 24 }} xs={{ span: 24 }}>
                        <p> MALU BERTANYA, SESAT DI JALAN </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 24 }} xs={{ span: 24 }}>
                        <h1>
                            Diskusikan segala <br /> keperluan anda <br />
                            disini
                        </h1>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HeroNews;
