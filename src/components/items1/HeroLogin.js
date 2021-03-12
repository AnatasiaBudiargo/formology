import React from "react";
import "../../App.css";
import "./HeroLogin.css";
import video1 from "../../videos/video-2.mp4";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function HeroLogin() {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="heroLogin-container">
            <video autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
            <h1> MASUK </h1>
            <div className="FORM">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Username!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Nama pengguna atau email"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Kata sandi"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox className="checkbox">
                                Ingatkan saya
                            </Checkbox>
                        </Form.Item>
                        <a
                            className="login-form-forgot"
                            href="/MemulihkanKataSandi"
                            className="lupa-pass"
                        >
                            Lupa password
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="default"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Masuk
                        </Button>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </div>
            <div className="blm-pnya-akun">
                <Link to="/StatusPengguna">
                    <a href="/HeroService">Belum memiliki akun? Klik disini</a>
                </Link>
            </div>
        </div>
    );
}

export default HeroLogin;
