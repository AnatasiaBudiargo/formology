import React from "react";
import "../../App.css";
import "./Home_SeputarPertanian.css";
import firstfoto from "../../images/beranda1.png";
import secondfoto from "../../images/beranda2.png";
import thirdfoto from "../../images/beranda3.png";
import fourthfoto from "../../images/beranda4.png";

function Home_SeputarPertanian() {
    return (
        <div className="container-seputar-pertanian">
            <h1> BERITA SEPUTAR PERTANIAN </h1>
            <div className="card-berita">
                <div className="berita">
                    <a href="">
                        <img src={firstfoto} className="foto-berita" />
                    </a>
                    <h3>
                        INDEF dan KTNA Tolak Impor Beras Demi Kedaulatan Pangan
                        Nasional
                    </h3>
                    <p>
                        Indef menyayangkan kebijakan impor beras 1 juta ton yang
                        sudah dialokasikan melalui Perum Bulog.
                    </p>
                </div>
                <div className="berita">
                    <a href="">
                        <img src={secondfoto} className="foto-berita" />
                    </a>
                    <h3>
                        Kementan Bantu Pertanian Sumbawa Barat dengan Alsintan
                    </h3>
                    <p>
                        Menteri Pertanian (Mentan) Syahrul Yasin Limpo
                        mengatakan bantuan ini merupakan bagian dari upaya
                        modernisasi
                    </p>
                </div>
                <div className="berita">
                    <a href="">
                        <img src={thirdfoto} className="foto-berita" />
                    </a>
                    <h3>BUMN Pertani Pasok Benih untuk Lumbung Pangan NTT</h3>
                    <p>
                        Keberhasilan Pertani dalam memasok benih padi khususnya
                        di Indonesia Timur turut didukung oleh Kementerian
                        Pertanian.
                    </p>
                </div>
                <div className="berita">
                    <a href="">
                        <img src={fourthfoto} className="foto-berita" />
                    </a>
                    <h3>BUMN Pertani Pasok Benih untuk Lumbung Pangan NTT</h3>
                    <p>
                        Keberhasilan Pertani dalam memasok benih padi khususnya
                        di Indonesia Timur turut didukung oleh Kementerian
                        Pertanian.
                    </p>
                </div>
                <div className="berita">
                    <a href="">
                        <img src={firstfoto} className="foto-berita" />
                    </a>
                    <h3>BUMN Pertani Pasok Benih untuk Lumbung Pangan NTT</h3>
                    <p>
                        Keberhasilan Pertani dalam memasok benih padi khususnya
                        di Indonesia Timur turut didukung oleh Kementerian
                        Pertanian.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home_SeputarPertanian;
