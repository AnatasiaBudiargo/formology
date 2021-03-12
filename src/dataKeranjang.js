import bawangmerah from "../src/images/bawang merah.png";
import bawangputih from "../src/images/bawang putih.png";
import cangkul from "../src/images/cangkul.png";
import MenungguKonfirmasi from "../src/images/MenungguKonfirmasi.png";
import Terkonfirmasi from "../src/images/Terkonfirmasi.png";
import BelumTerbayar from "../src/images/BelumTerbayar.png";

export const dataKeranjang = [
    {
        nama: "Bawang Merah",
        ket: "SUMARTONO, BANYUWANGI",
        harga: "Rp. 75.000/Kg",
        gambar: bawangmerah,
        status: BelumTerbayar,
        statKet: "Belum Terbayar",
    },
    {
        nama: "Bawang Putih",
        ket: "SUMARTONO, BANYUWANGI",
        harga: "Rp. 65.000/Kg",
        gambar: bawangputih,
        status: MenungguKonfirmasi,
        statKet: "Menunggu Konfirmsi",
    },
    {
        nama: "Cangkul",
        ket: "SHARTONO, MALANG",
        harga: "Rp. 100.000/Kg",
        gambar: cangkul,
        status: Terkonfirmasi,
        statKet: "Terkonfirmasi",
    },
];
