import React from "react";
import "../../App.css";
import "./HeroProfile.css";
import { Row, Col } from "antd";
import image from "../../images/service-segeraHadir.png";
import image2 from "../../images/google.png";
import imageProfile from "../../images/avatar-2.png";

// $(document).ready(function() {

//     function pageAllCategories() {
//         allCategories.style.display = "flex";
//         mostUsed.style.display = "none";
//     }
//     ButtonAllCategories.addEventListener('click', function() {
//         pageAllCategories()
//     });

//     function pageMostUsed() {
//         allCategories.style.display = "none";
//         mostUsed.style.display = "flex";
//     }
//     ButtonMostUsed.addEventListener('click', function() {
//         pageMostUsed()
//     });

// });

function HeroProfile() {
    return (
        <div className="heroProfile-container">
            <div className="profile">
                <Row>
                    <Col sm={{ span: 9 }} xs={{ span: 24 }}>
                        <div className="kolom">
                            <img src={imageProfile} style={{ width: 170 }} />
                            <button> PILIH FOTO </button>
                            <p> Besar maksimal file : 10 Megabytes </p>
                            <p> File yang diperbolehkan: .JPG .JPEG .PNG </p>
                            <button> EDIT PROFILE </button>
                            <button> UBAH PASSWORD </button>
                        </div>
                    </Col>
                    <Col sm={{ span: 15 }} xs={{ span: 24 }}>
                        <div className="isi">
                            <table>
                                <tr>
                                    <td id="title"> Profil </td>
                                </tr>
                                <tr>
                                    <td> Nama Pengguna </td>
                                    <td> Ali Martoyo </td>
                                </tr>
                                <tr>
                                    <td> Nama Toko </td>
                                    <td> - Tidak Ada - </td>
                                </tr>
                                <tr>
                                    <td> Asal Profensi </td>
                                    <td> Jawa Timur </td>
                                </tr>
                                <tr>
                                    <td> Jenis Kelamin</td>
                                    <td> Pria </td>
                                </tr>
                                <tr>
                                    <td> Email </td>
                                    <td> aselole@gmail.com </td>
                                </tr>
                                <tr>
                                    <td> Nomor HP </td>
                                    <td> 0891114045 </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button> Keluar </button>
                                    </td>
                                </tr>
                            </table>
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

export default HeroProfile;
