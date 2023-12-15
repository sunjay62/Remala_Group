import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chintia from '../../../../../assets/fotoprofile/chintia.png';

const profiles = [
  {
    name: 'Chintia Hong',
    image: Chintia,
    role: 'Sekretaris Perusahaan',
    description:
      'Nama saya Chintia Hong, Dalam peran saya saat ini di PT. Remala Abadi, tempat saya menjabat sejak Agustus 2022, saya menjabat sebagai Sekretaris Perusahaan sejak November 2023. Pada jabatan saya sebelumnya dari November 2022 hingga November 2023, saya menjabat sebagai Kepala CRM ( Customer Relationship Management ). Sebelumnya, saya mulai sebagai Asisten Pribadi Dewan Direktur dari Agustus 2022 hingga November 2022. Dalam kapasitas ini, saya bertanggung jawab untuk melaksanakan dan memelihara semua pengarsipan, dokumen, laporan, dan catatan resmi perusahaan yang diperlukan sesuai dengan ketentuan yang berlaku undang-undang. Hal ini termasuk mengelola hubungan pemegang saham, berkomunikasi dengan anggota dewan, dan mengoordinasikan daftar dan pendaftaran pemegang saham. Selain itu, saya secara aktif menjaga komunikasi dengan pelanggan kami melalui berbagai saluran, menggunakan survei berbasis Skala Likert untuk mengukur tingkat kepuasan.<br><br>' +
      'Sebelumnya, di XYNERGY REALTY INDONESIA, sebuah Perusahaan Properti & Real Estate yang berbasis di Melbourne, saya menjabat sebagai Administrator Properti dari Februari 2021 hingga Agustus 2022. Dalam peran ini, saya memproses aplikasi penyewa, induksi properti terjadwal, dan inspeksi terbuka melalui Aplikasi IRE , mengirimkan surat selamat datang, dan memastikan dokumentasi yang akurat dalam sistem database. Tanggung jawab saya juga mencakup koordinasi yang erat dengan Manajer Properti untuk persetujuan permohonan dan mengatasi masalah terkait.<br><br>' +
      'Sebelumnya, di ASTON CIREBON HOTEL & CONVENTION CENTER di Jawa Barat, saya menjabat sebagai Account Payable Clerk dari Oktober 2020 hingga Februari 2021. Tanggung jawab saya termasuk menerima faktur asli, menyiapkan dokumen pembayaran, dan memastikan pembayaran tepat waktu kepada pemasok, serta memelihara pencatatan dan pengarsipan yang akurat.<br><br>' +
      'Dalam peran saya sebagai Purchasing di SWISS-BELHOTEL JAYAPURA di Papua dari Agustus 2018 hingga Juli 2020, saya mengelola proses pengadaan, menegosiasikan harga, berkoordinasi dengan pengguna untuk spesifikasi, dan menjaga hubungan positif dengan pemasok.<br><br>' +
      'Di awal karir saya, saya memegang peran penting sebagai Manajer di CAFÉ CARSTENSZ di Jayapura dari tahun 2013 hingga 2017. Dalam usaha ini, saya berhasil mendirikan dan mengoperasikan kafe, mengawasi berbagai aspek seperti keuangan, operasional, pemeliharaan, dan sumber daya manusia.<br><br>' +
      'Peran yang beragam ini telah membekali saya dengan keahlian yang komprehensif, mulai dari tata kelola perusahaan dan hubungan pelanggan hingga administrasi properti, hutang, dan pengadaan, yang menunjukkan kemampuan saya untuk beradaptasi dan unggul dalam berbagai lingkungan profesional.',
  },
];

const SekretarisPerusahaan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      {profiles.map((profile, index) => (
        <div className="col-profile d-flex mt-5" data-aos="fade-left" key={index}>
          <div className="col-6 profile-box">{profile.image && <img src={profile.image} alt={profile.name} />}</div>
          <div className="mx-4">
            <h6>{profile.name}</h6>
            <p>{profile.role}</p>
            <p dangerouslySetInnerHTML={{ __html: profile.description }} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SekretarisPerusahaan;
