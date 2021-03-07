import '../App.css';
import './HeroSignUp.css';
import video2 from '../videos/video-2.mp4';
import React, { useState } from 'react';
import { Form, Input, Tooltip, Cascader, Select, Button, } from 'antd';
// , Checkbox
import { QuestionCircleOutlined } from '@ant-design/icons';
import farmology from "../api/farmology";
// import Password from 'antd/lib/input/Password';
import { useAuth } from "../config/Auth";


const { Option } = Select;
const residences = [{
        value: 'indonesia',
        label: 'Indonesia',
        children: [{
            value: 'eastjava',
            label: 'East Java',
            children: [{
                value: 'surabaya',
                label: 'Surabaya',
            }, ],
        }, ],
    },
    {
        value: 'malaysia',
        label: 'Malaysia',
        children: [{
            value: 'georgetown',
            label: 'George Town',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
            }, ],
        }, ],
    },
    {
        value: 'singapore',
        label: 'Singapore',
        children: [{
            value: 'angmokio',
            label: 'Ang Mo Kio',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
            }, ],
        }, ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};




function HeroSignUp() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");
    const { setAuthTokens } = useAuth();

    const [form] = Form.useForm();

    const onFinish = (handleSignup) => {
        console.log('Received values of form: ', handleSignup);
    };

    // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const handleSignUp = async(e) => {
            e.preventDefault();
            await farmology.post("/user/register", {
                username: Username,
                email: Email,
                password: Password
            })
            await farmology.post("/user/login", {
                email: Email,
                password: Password
            }).then((res) => {
                res.status === 200 && setAuthTokens(res.data.data.access_token)
                console.log(res);
            })
        }
        // u/ klo dienter langsung ke input, tanpa perlu click button submit

    return ( <
        div className = "heroSignup-container" >
        <
        video autoPlay loop muted > < source src = { video2 }
        type = "video/mp4" / > < /video>  <
        h1 > DAFTAR < /h1> <
        div className = "formulir" >
        <
        Form {...formItemLayout }
        form = { form }
        name = "register"
        onFinish = { onFinish }
        initialValues = {
            {
                residence: ['Jawa Timur', 'Jawa Barat', 'Jawa Tengah'],
                prefix: '62',
            }
        }
        scrollToFirstError >

        <
        Form.Item classname = "coba"
        name = "email"
        label = "Alamat Email"
        rules = {
            [{
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
            ]
        } >

        <
        Input / >
        <
        /Form.Item>

        <
        Form.Item name = "nickname"
        label = { <
            span >
            Nama Lengkap <
            Tooltip title = "What do you want others to call you?" >
            <
            QuestionCircleOutlined / >
            <
            /Tooltip> <
            /span>
        }
        rules = {
            [{
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
            }, ]
        } >
        <
        Input / >
        <
        /Form.Item>


        <
        Form.Item name = "password"
        label = "Kata Sandi"
        rules = {
            [{
                required: true,
                message: 'Please input your password!',
            }, ]
        }
        hasFeedback >
        <
        Input.Password / >
        <
        /Form.Item>

        <
        Form.Item name = "confirm"
        label = "Konfirmasi Kata Sandi"
        dependencies = {
            ['password'] }
        hasFeedback rules = {
            [{
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
            ]
        } >
        <
        Input.Password / >
        <
        /Form.Item>

        <
        Form.Item label = "Nama Pengguna"
        name = "username"
        rules = {
            [{ required: true, message: 'Please input your username!' }] } >
        <
        Input / >
        <
        /Form.Item>

        <
        Form.Item name = "residence"
        label = "Asal Provinsi"
        rules = {
            [{
                type: 'array',
                required: true,
                message: 'Please select your habitual residence!',
            }, ]
        } >
        <
        Cascader options = { residences }
        /> <
        /Form.Item>

        <
        Form.Item {...tailFormItemLayout } >
        <
        Button type = "default"
        htmlType = "submit"
        className = "submit" >
        Submit <
        /Button> <
        /Form.Item>

        <
        /Form> <
        /div>

        <
        /div>
    )
}

export default HeroSignUp