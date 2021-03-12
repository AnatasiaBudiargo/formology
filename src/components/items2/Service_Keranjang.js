import React, { useState } from "react";
import "../../App.css";
import "./Keranjang.css";
import { Row, Col } from "antd";
import { Checkbox, Divider } from "antd";
import { dataKeranjang } from "../../dataKeranjang";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

function Service_Keranjang() {
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(false);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <div className="container-service-keranjang">
            <div className="options">
                <h1> KERANJANG SAYA </h1>
                <Row>
                    <Col sm={{ span: 15 }} xs={{ span: 24 }}>
                        <Checkbox
                            indeterminate={indeterminate}
                            onChange={onCheckAllChange}
                            checked={checkAll}
                        >
                            <span> Pilih semua </span>
                        </Checkbox>
                    </Col>
                    <Col sm={{ span: 9 }} xs={{ span: 24 }}>
                        <h2> Status </h2>
                    </Col>
                </Row>
                <hr />

                {dataKeranjang.map((item, index) => {
                    return (
                        //Copas disini
                        <Col sm={{ span: 15 }} xs={{ span: 24 }}>
                            <Checkbox
                                indeterminate={indeterminate}
                                onChange={onCheckAllChange}
                                checked={checkAll}
                            >
                                <span id="ket"> {item.ket}</span>
                            </Checkbox>
                            <div className="card">
                                <Row>
                                    <Col span={24}>
                                        <div className="isi">
                                            <Checkbox
                                                value={checkedList}
                                                onChange={onChange}
                                            />
                                            <img src={item.gambar} />
                                            <Row>
                                                <Col span={24}>
                                                    <h3 className="name">
                                                        {item.nama}
                                                    </h3>
                                                </Col>
                                                <Col span={24}>
                                                    {item.harga}
                                                </Col>
                                            </Row>
                                            <Row className="gambar-status">
                                                {/* <img src={item.status} />
                                                <p> {item.statKet} </p> */}
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <button> HAPUS </button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    );
                })}
            </div>

            <div className="sub-total">
                <h2> Subtotal : Rp. 75.000,00 </h2>
                <button> Bayar </button>
            </div>
        </div>
    );
}

export default Service_Keranjang;
