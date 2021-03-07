import React from 'react'
import '../App.css';
import image1 from '../images/jumbotronPasar.png'
import { Row, Col } from 'antd';
import './HeroService.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = ( <
    AudioOutlined style = {
        {
            fontSize: 16,
            color: '#1890ff',
        }
    }
    />
);

const onSearch = value => console.log(value);


function HeroService() {
    return ( <
        div className = "heroService-container" >
        <
        img src = { image1 }
        /> <
        div className = "judul" >
        <
        Row >
        <
        Col span = { 20 } >
        <
        h1 > Carilah kebutuhan anda Disini. < /h1> <
        /Col> <
        Col span = { 24 } >
        <
        Space direction = "vertical" >
        <
        Search placeholder = "input search text"
        allowClear enterButton = "Search"
        size = "large"
        onSearch = { onSearch }
        style = {
            { width: 500 } }
        /> <
        /Space> <
        /Col> <
        Col span = { 10 } >
        <
        p > Menyediakan berbagai stok bahan pangan nusantara Beserta alat - alat kebutuhan pertanian < /p> <
        /Col> <
        /Row> <
        /div>

        <
        /div>
    )
}

export default HeroService