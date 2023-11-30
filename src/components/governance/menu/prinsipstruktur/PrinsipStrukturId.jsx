import React, { useEffect } from 'react';
import './prinsipstruktur.scss';
import StrukturOrganisasi from '../../../../assets/home/strukturorganisasi.png';
import DocCsr1 from '../../../../assets/home/docscsr-1.jpeg';
import DocCsr2 from '../../../../assets/home/docscsr-2.jpeg';
import FooterId from '../../../footer/FooterId';
import FooterEn from '../../../footer/FooterEn';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrinsipStruktur = () => {
  const isIdPath = window.location.pathname.startsWith('/en');

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className="containerPrinsip" data-aos="fade-up">
        <div className="boxPrinsip">
          <div className="contentPrinsip">
            <h4>TATA KELOLA PERUSAHAAN</h4>
            <br />
            <p>
              Dalam menjalankan kegiatan usahanya, Perseroan senantiasa memperhatikan dan mematuhi prinsip-prinsip Tata Kelola Perusahaan yang Baik (Good Corporate Governance) sebagaimana diatur dalam peraturan OJK dan Bursa Efek Indonesia.
              Good Corporate Governance ("GCG") pada dasarnya diciptakan sebagai sistem pengendalian dan pengaturan perusahaan, yang berperan sebagai pengukur kinerja yang sehat sebuah perusahaan melalui etika kerja dan prinsip-prinsip
              kerja yang baik. Sistem ini menjaga Perseroan agar dikelola secara terarah untuk memberikan keuntungan bagi stakeholder. <br />
              <br />
              Manajemen menyadari bahwa pelaksanaan tata kelola perusahan membutuhkan suatu kesadaran, kerja keras dan dukungan dari pihak ketiga. Selain itu manajemen juga menyadari pentingnya konsistensi serta penyempurnaan dalam
              pelaksanaan tata kelola perusahaan yang baik. <br /> <br />
              Hal yang berkaitan dengan Tata Kelola Perusahaan Yang Baik (GCG) dilakukan Perseroan melalui penerapan prinsip-prinsip dalam GCG diantaranya transparansi, profesionalisme, akuntabilitas serta pertanggungjawaban. <br /> <br />
              Untuk menerapkan tata kelola perusahaan Perseroan mempersiapkan perangkat-perangkatnya sebagai berikut: Dewan Komisaris termasuk Komisaris Independen, Direksi, Sekretaris Perusahaan, Komite Audit, dan Unit Audit Internal.
            </p>
            <br />
            <h5>Dewan Komisaris</h5>
            <p>
              Perseroan memiliki seorang Komisaris Utama, dan seorang Komisaris Independen. Hal tersebut telah memenuhi ketentuan atas pemenuhan Persyaratan POJK No. 33/2014, yaitu memiliki Komisaris Independen sekurang-kurangnya 30% (tiga
              puluh persen) dari jajaran anggota Dewan Komisaris. Berdasarkan POJK No. 33/2014, Dewan Komisaris bertugas melakukan pengawasan dan bertanggung jawab atas pengawasan terhadap kebijakan pengurusan, jalannya pengurusan pada
              umumnya, baik mengenai Perseroan maupun usaha Perseroan, dan memberi nasihat pada Direksi. <br /> <br />
              Kebijakan mengenai penyelenggaraan rapat Dewan Komisaris ditetapkan sesuai dengan ketentuan Anggaran Dasar dan POJK No. 33/2014, Dewan Komisaris wajib mengadakan rapat paling sedikit 1 (satu) kali dalam 2 (dua) bulan dan rapat
              tersebut dihadiri oleh seluruh Dewan Komisaris serta 1 (satu) kali dalam 4 (empat) bulan untuk rapat gabungan dengan Direksi. <br /> <br />
              Sampai saat Pernyataan Pendaftaran Emisi Efek kepada OJK, Rapat Dewan Komisaris baru dilaksanakan sebanyak 1 (satu) kali, dikarenakan Dewan Komisaris saat ini, baru diangkat pada Maret 2023, sedangkan kedepannya Dewan
              Komisaris akan mengadakan rapat sesuai dengan POJK No. 33/2014.
            </p>
            <p>Berikut rincian Rapat Anggota Dewan Komisaris : </p>
            <table border="1" className="tableContainer">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Jabatan</th>
                  <th>Jumlah Rapat</th>
                  <th>Jumlah Kehadiran</th>
                  <th>Frekuensi Kehadiran</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nama Seseorang</td>
                  <td>Jabatan Seseorang</td>
                  <td>Jumlah Rapat</td>
                  <td>Jumlah Kehadiran</td>
                  <td>Frekuensi Kehadiran</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Nama Seseorang</td>
                  <td>Jabatan Seseorang</td>
                  <td>Jumlah Rapat</td>
                  <td>Jumlah Kehadiran</td>
                  <td>Frekuensi Kehadiran</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>Dewan Komisaris Perseroan selanjutnya berkomitmen untuk melaksanakan rapat sesuai dengan peraturan yang berlaku. </p>
            <br />
            <p>Pelaksanaan tugas dari dewan Komisaris adalah :</p>
            <ul>
              <li>
                Dewan Komisaris melakukan pengawasan dan bertanggung jawab atas pengawasan terhadap kebijakan pengurusan, jalannya pengurusan pada umumnya, baik mengenai Perseroan maupun usaha Perseroan, dan memberi nasihat atau arahan
                kepada Direksi.
              </li>
              <li>Dewan Komisaris melakukan rapat untuk pembentukan komite-komite yang membantu pelaksanaan tugas dan tanggung jawab Direksi. </li>
            </ul>
            <p>Sesuai dengan POJK No. 33/2014 Dewan Komisaris diwajibkan untuk mengadakan rapat dengan Direksi sekurang-kurangnya 1 (satu) kali setiap 4 (empat) bulan. </p>
            <br />
            <h5>Direksi</h5>
            <p>Perseroan memiliki Direktur Utama dan Direktur yang secara bersama-sama bertanggung jawab penuh atas pelaksanaan jalannya seluruh akvitas usaha Perseroan. </p>
            <br />
            <p>Berdasarkan POJK No. 33/2014, berikut ini adalah tugas dan tanggung jawab Direksi: </p>
            <ul>
              <li>
                Menjalankan dan bertanggung jawab atas pengurusan Perseroan atau Perusahaan Publik untuk kepentingan Perseroan atau Perusahaan Publik sesuai dengan maksud dan tujuan Perseroan atau Perusahaan Publik yang ditetapkan dalam
                anggaran dasar.
              </li>
              <li>Menyelenggarakan RUPS tahunan dan RUPS lainnya sebagaimana diatur dalam peraturan perundang-undangan dan anggaran dasar. </li>
              <li>Melakukan evaluasi terhadap kinerja komite setiap akhir tahun buku. </li>
            </ul>
            <br />
            <p>
              Kebijakan mengenai penyelenggaraan rapat Direksi ditetapkan sesuai dengan ketentuan Anggaran Dasar dan POJK No. 33/2014, Direksi wajib mengadakan rapat secara berkala paling kurang 1 (satu) kali dalam setiap bulan dan 1 (satu)
              kali dalam 4 (empat) bulan untuk rapat gabungan dengan Dewan Komisaris.
              <br />
              <br />
              Sampai saat Pernyataan Pendaftaran Emisi Efek kepada OJK, Rapat Direksi baru dilaksanakan sebanyak 1 (satu) kali, dikarenakan Direksi saat ini, baru diangkat pada Maret 2023, sedangkan kedepannya Direksi akan mengadakan rapat
              sesuai dengan POJK No. 33/2014. Berikut rincian Rapat Anggota Direksi
            </p>
            <br />
            <p>Berikut rincian Rapat Anggota Direksi dalam periode laporan keuangan tahunan terakhir : </p>
            <table border="1" className="tableContainer">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Jabatan</th>
                  <th>Jumlah Rapat</th>
                  <th>Jumlah Kehadiran</th>
                  <th>Frekuensi Kehadiran</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nama Seseorang</td>
                  <td>Jabatan Seseorang</td>
                  <td>Jumlah Rapat</td>
                  <td>Jumlah Kehadiran</td>
                  <td>Frekuensi Kehadiran</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Nama Seseorang</td>
                  <td>Jabatan Seseorang</td>
                  <td>Jumlah Rapat</td>
                  <td>Jumlah Kehadiran</td>
                  <td>Frekuensi Kehadiran</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Nama Seseorang</td>
                  <td>Jabatan Seseorang</td>
                  <td>Jumlah Rapat</td>
                  <td>Jumlah Kehadiran</td>
                  <td>Frekuensi Kehadiran</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              Direksi Perseroan berkomitmen untuk melaksanakan rapat sesuai dengan peraturan yang berlaku.
              <br />
              <br />
              Adapun prosedur penetapan dan besaran remunerasi Direksi dan Dewan Komisaris yaitu Dewan Komisaris melaksanakan rapat Dewan Komisaris dengan dihadiri mayoritas dari jumlah anggota Dewan Komisaris dan salah satu dari anggota
              Dewan Komisaris merupakan Komisaris Independen. Hasil dari rapat Dewan Komisaris mengenai remunerasi tersebut dituangkan dalam risalah rapat dan didokumentasikan oleh Perseroan.{' '}
            </p>
            <br />
            <p>
              Sampai saat Prospektus ini dibuat, belum terdapat program pelatihan dalam rangka meningkatkan kompetensi Direksi yang diikuti oleh Direksi. Kedepannya Direksi akan aktif dalam program pelatihan dalam rangka meningkatkan
              kompetensi Direksi.
            </p>
            <p>Tidak terdapat kontrak terkait imbalan kerja setelah masa kerja Direksi berakhir. </p>
            <br />
            <h5>Sekretaris Perusahaan</h5>
            <p>
              Sehubungan Peraturan OJK Nomor 35/POJK.04/2014 tanggal 8 Desember 2014 tentang Sekretaris Perusahaan Emiten Atau Perusahaan Publik (“POJK Nomor 35/2014”), Perseroan telah mengangkat ● sebagai Sekretaris Perusahaan terhitung
              sejak tanggal ● berdasarkan Surat Keputusan Direksi Pengangkatan Sekretaris Perusahaan Nomor :
            </p>
            <p>Tugas dan tanggung jawab Sekretaris Perusahaan yang mengacu pada POJK No. 35/2014 tanggal 8 Desember 2014 tentang Sekretaris Perusahaan Perseroan atau Perusahaan Publik antara lain sebagai berikut: </p>
            <ul className="listAlpha">
              <li>
                Memberikan masukan kepada Direksi Perseroan untuk mematuhi ketentuan–ketentuan yang berlaku, termasuk tapi tidak terbatas Undang-undang nomor 40 tahun 2007 tentang Perseroan Terbatas, Undang-undang nomor 8 tahun 1995 tentang
                Pasar Modal serta peraturan-peraturan yang berlaku di Republik Indonesia dan sesuai dengan norma-norma corporate governance secara umum;
              </li>
              <li>Mengikuti perkembangan Pasar Modal khususnya peraturan-peraturan yang berlaku di bidang Pasar Modal; </li>
              <li>Sebagai penghubung antara dengan Otoritas Jasa Keuangan, Bursa Efek Indonesia, stakeholder, dan masyarakat; </li>
              <li>Memelihara hubungan yang baik antara Perseroan dengan media masa; </li>
              <li>Memberikan pelayanan kepada masyarakat (pemodal) atas setiap Informasi yang dibutuhkan pemodal berkaitan dengan kondisi Perseroan; </li>
              <li>Melaksanakan kegiatan-kegiatan yang mendukung kegiatan Perseroan tersebut di atas antara lain Laporan Tahunan, Rapat Umum Pemegang Saham, Keterbukaan Informasi, dan lain-lain sebagainya; </li>
              <li>Mempersiapkan praktik Good Corporate Governance (GCG) di lingkungan Perseroan; </li>
              <li>Menjaga dan mempersiapkan dokumentasi Perseroan, termasuk notulen dari Rapat Direksi dan Rapat Dewan Komisaris serta hal-hal terkait. </li>
            </ul>
            <br />
            <p>Keterangan mengenai Sekretaris Perusahaan Perseroan : </p>
            <table border="1" className="tableContainerSekretaris">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Hong Chintia </td>
                </tr>
                <tr>
                  <th>Alamat</th>
                  <td>Greenville Blok M no.9., RT 007/ RW 009, Kelurahan Duri Kepa, Kecamatan Kebon Jeruk, Jakarta Barat - DKI Jakarta </td>
                </tr>
                <tr>
                  <th>Telepon</th>
                  <td>0822-38414168 </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>corporatesecretary@remala.id </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>Berikut merupakan riwayat pendidikan dan pekerjaan dari Sekretaris Perusahaan Perseroan: </p>
            <p>Pendidikan : </p>
            <p>Riwayat Pekerjaan : </p>
            <br />
            <h5>Komite Audit</h5>
            <p>Perseroan telah membentuk Komite Audit dan membuat Piagam Komite Audit. Piagam Komite Audit merupakan pedoman kerja bagi Komite Audit. </p>
            <p>
              Komite Audit diangkat sebagaimana diatur dalam POJK No. 55/2015, berdasarkan Surat Keputusan Dewan Komisaris Perseroan tentang Pengangkatan Komite Audit Nomor: 1463/IPC-HO/III/2023 tertanggal 30 Maret 2023 dengan masa jabatan
              Komite Audit adalah tidak boleh lebih lama dari masa jabatan Dewan Komisaris sebagaimana diatur dalam Anggaran Dasar Perseroan dan dapat dipilih kembali hanya untuk 1 periode berikutnya.
              <br />
              <br />
              Komite ini bertugas untuk memberikan pendapat profesional yang independen kepada Dewan Komisaris Perseroan terhadap laporan atau hal-hal yang disampaikan oleh Direksi Perseroan kepada Dewan Komisaris Perseroan serta
              menidentifikasikan hal-hal yang memerlukan perhatian Dewan Komisaris Perseroan, yang antara lain meliputi:
            </p>
            <ul className="listAlpha">
              <li>Membuat rencana kegiatan tahunan yang disetujui oleh Dewan Komisaris Perseroan;</li>
              <li>Melakukan penelaahan atas informasi keuangan yang akan dikeluarkan Perseroan seperti laporan keuangan, proyeksi, dan informasi keuangan lainnya; </li>
              <li>Melakukan penelaahan atas ketaatan Perseroan terhadap peraturan perundang-undangan yang berhubungan dengan kegiatan Perseroan. </li>
              <li>Melakukan penelaahan/penilaian atas pelaksanaan pemeriksaan oleh auditor internal dan mengawasi pelaksanaan tindak lanjut oleh Direksi Perseroan atas semua temuan auditor internal; </li>
              <li>Melakukan penelahaan dan melaporkan kepada Dewan Komisaris Perseroan atas pengaduan yang berkaitan dengan Perseroan; </li>
              <li>Menjaga kerahasiaan dengan Akuntan Publik atas data dan informasi Perseroan; </li>
              <li>Mengawasi hubungan dengan Akuntan Publik dan mengadakan rapat/pembahasan dengan Akuntan Publik; </li>
              <li>Membuat, mengkaji, dan memperbaharui pedoman Komite Audit bila perlu; </li>
              <li>Memberikan pendapat independen apabila terjadi perbedaan pendapat antara manajemen dan Akuntan Publik atas jasa yang diberikan; </li>
              <li>Memberikan rekomendasi kepada Dewan Komisaris Perseroan mengenai penunjukan Akuntan Publik, didasarkan pada independensi, ruang lingkup penugasan, dan fee; </li>
              <li>
                Melakukan penelaahan terhadap akvitas pelaksanaan manajemen resiko yang dilakukan oleh Direksi Perseroan, jika Perseroan tidak memiliki fungsi pemantau resiko yang dilakukan oleh Direksi Perseroan, jika Perseroan tidak
                memiliki fungsi pemantau resiko di bawah Dewan Komisaris Perseroan;
              </li>
              <li>Menelaah dan memberikan saran kepada Dewan Komisaris Perseroan terkait potensi benturan kepentingan Perseroan. </li>
            </ul>
            <br />
            <h5>Wewenang Komite Audit</h5>
            <ul className="listAlpha">
              <li>Mengakses dokumen, data, dan informasi Emiten atau Perusahaan Publik tentang karyawan, dana, aset, dan sumber daya perusahaan yang diperlukan; </li>
              <li>Berkomunikasi langsung dengan karyawan, termasuk Direksi dan pihak yang menjalankan fungsi audit internal, manajemen risiko, dan Akuntan terkait tugas dan tanggung jawab Komite Audit; </li>
              <li>Melibatkan pihak independen di luar anggota Komite Audit yang diperlukan untuk membantu pelaksanaan tugasnya (jika diperlukan). </li>
              <br />
            </ul>
            <p>Susunan anggota Komite Audit Perseroan adalah sebagai berikut : </p>
            <p>Keterangan singkat mengenai pendidikan dan pengalaman kerja dari Ketua Komite Audit dapat dilihat pada subbab Pengurus dan Pengawasan Perseroan</p>
            <table border="1" className="tableContainerAudit">
              <tbody>
                <tr>
                  <th>Ketua</th>
                  <td></td>
                </tr>

                <tr>
                  <th>Anggota 1</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Pendidikan </th>
                  <td></td>
                </tr>
                <tr>
                  <th>Riwayat Pekerjaan </th>
                  <td></td>
                </tr>
                <tr>
                  <th>Anggota 2</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Anggota 1</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Pendidikan</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              Untuk memenuhi Pasal 12 POJK No. 55/2015, Perseroan telah memiliki Piagam Komite Audit tertanggal ● . <br />
              <br />
              Sesuai dengan POJK No. 55/2015, Rapat Komite Audit dilakukan secara berkala paling kurang 1 (satu) kali dalam 3 (tiga bulan) dan dihadiri oleh lebih dari 50% (lima puluh persen) jumlah anggota. Dikarenakan baru efektif
              menjabat pada ●, rapat anggota Komite Audit dan pelaksanaan kegiatan Komite Audit belum diselenggarakan.
              <br />
              <br />
              Pembahasan terkait rapat anggota Komite Audit adalah membahas dan menyusun secara lengkap program kerja untuk pelaksanaan pengawasan terhadap kinerja Direksi.
            </p>
            <br />
            <h5>Unit Audit Internal</h5>
            <p>
              Perseroan juga telah membentuk Unit Audit Internal dan membuat Piagam Audit Internal guna menyusun dan melaksanakan audit internal tahunan serta hal-hal lainnya yang berkaitan laporan keuangan dan pengendalian internal yang
              sesuai dengan tugas dan tanggung jawabnya.
            </p>
            <p>
              Sesuai dengan POJK No.56, maka Perseroan telah membentuk Unit Audit Internal sesuai dengan peraturan dan ketentuan yang berlaku. Berdasarkan Surat Penunjukan Direksi Perseroan Nomor ● tanggal ● <br />
              <br />
              Piagam audit internal Perseroan telah disusun sesuai dengan POJK No.56 mengenai pembentukan dan pedoman penyusunan piagam audit internal.
            </p>
            <p>Unit Audit Internal memiliki tugas dan tanggung jawab sebagai berikut: </p>
            <ul className="listAlpha">
              <li>Menyusun dan melaksanakan rencana Audit Internal tahunan; </li>
              <li>Menguji dan mengevaluasi pelaksanaan pengendalian internal dan sistem manajemen risiko sesuai dengan kebijakan Perseroan; </li>
              <li>Melakukan pemeriksaan dan penilaian atas efisiensi dan efektivitas di bidang keuangan, akuntansi, operasional, sumber daya manusia, pemasaran, teknologi informasi dan kegiatan lainnya; </li>
              <li>Memberikan saran perbaikan dan informasi yang objektif tentang kegiatan yang diperiksa pada semua tingkat manajemen; </li>
              <li>Membuat laporan hasil audit dan menyampaikan laporan tersebut kepada Presiden Direktur dan Dewan Komisaris; </li>
              <li>Memantau, menganalisis dan melaporkan pelaksanaan tindak lanjut perbaikan yang telah disarankan; </li>
              <li>Bekerja sama dengan Komite Audit; </li>
              <li>Menyusun program untuk mengevaluasi mutu kegiatan audit internal yang dilakukannya; dan </li>
              <li>Melakukan pemeriksaan khusus apabila diperlukan. </li>
              <br />
            </ul>
            <br />
            <h5>Wewenang Unit Audit Internal :</h5>
            <ul>
              <li>Mengakses seluruh informasi yang relevan tentang Perseroan terkait dengan tugas dan fungsinya; </li>
              <li>Melakukan komunikasi secara langsung dengan Direksi, Dewan Komisaris, dan/atau Komite Audit serta anggota dari Direksi, Dewan Komisaris, dan/atau Komite Audit; </li>
              <li>Mengadakan rapat secara berkala dan insidentil Dengan Direksi, Dewan Komisaris, dan/atau Komite Audit; dan </li>
              <li>Melakukan koordinasi kegiatannya dengan kegiatan auditor eksternal. </li>
            </ul>
            <br />
            <p>Unit Audit Internal terdiri atas 1 (satu) orang yang bertugas sebagai Ketua merangkap anggota. Susunan Unit Audit Internal Perseroan adalah sebagai berikut: </p>
            <br />
            <table border="1" className="tableContainerAudit">
              <tbody>
                <tr>
                  <th>Nama</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Pendidikan</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Riwayat Pekerjaan</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>Untuk memenuhi Pasal 9 POJK No. 56/2015, Perseroan telah memiliki Piagam Unit Audit Internal Nomor ● tanggal ● </p>
            <br />
            <p>
              Rapat Audit Internal dilakukan secara berkala dihadiri oleh Ketua dan/atau anggota bersamaan dengan Direksi, Dewan Komisaris, dan/atau komite audit.
              <br />
              <br />
              Selain itu audit internal Perseroan juga secara berkala mengevaluasi ketaatan terhadap hukum dan peraturan perundang-undangan seluruh kegiatan dan transaksi yang dilakukan Perseroan serta melakukan evaluasi atas sistem
              pelaporan informasi keuangan dan operasional. Audit internal Perseroan telah memberikan rekomendasi-rekomendasi peningkatan efisiensi proses bisnis dan sistem pelaporan kepada manajemen Perseroan.
            </p>
            <br />
            <h5>Komite Nominasi dan Remunerasi</h5>
            <p>
              Sesuai Peraturan OJK Nomor 34/POJK.04/2014 tentang Komite Nominasi dan Remunerasi Emiten atau Perusahaan Publik (“POJK No. 34/2014”), pelaksanaan fungsi Nominasi dan Remunerasi dalam Perseroan dijalankan oleh Dewan Komisaris
              Perseroan berdasarkan Surat Keputusan Dewan Komisaris Perseroan tentang Pengangkatan Komite Nominasi dan Remunerasi Nomor ... tanggal ... dengan susunan Komite Nominasi dan Remunerasi Perseroan sebagai berikut:
            </p>
            <br />
            <p>
              Ketua : Ahmad Alamsyah Saragih <br /> Keterangan singkat mengenai pendidikan dan pengalaman kerja dari Ahmad Alamsyah Saragih dapat dilihat pada subbab Pengurus dan Pengawasan Perseroan.
            </p>
            <p>
              Anggota : Verah Wahyudi Singgih Wong <br /> Keterangan singkat mengenai pendidikan dan pengalaman kerja dari Verah Wahyudi Singgih Wong dapat dilihat pada subbab Pengurus dan Pengawasan Perseroan.
            </p>
            <p>
              Anggota : Farhanah <br />
              Pendidikan : ● <br /> Keterangan singkat mengenai pendidikan dan pengalaman kerja dari Ketua Komite Audit dapat dilihat pada subbab Pengurus dan Pengawasan Perseroan.
            </p>
            <br />
            <p>
              Untuk memenuhi Pasal 19 POJK No. 34/2014, Perseroan telah memiliki Piagam Komite Nominasi dan Remunerasi nomor ●tanggal ●
              <br />
              <br />
              Jumlah gaji dan tunjangan Dewan Direksi untuk tahun yang berakhir pada tanggal 31 Agustus 2022 dan tahun-tahun yang berakhir pada tanggal 31 Desember 2022, 2021, dan 2020 masing-masing sebesar Rp●,-; Rp●,-; dan Rp●,-.
            </p>
            <br />
            <h5>Sistem Pengendalian Internal</h5>
            <p>
              Pengendalian keuangan dan operasional dilakukan melalui pengawasan terhadap setiap aktivitasnya. Dewan Direksi Perseroan secara aktif melakukan pengawasan terhadap operasi bisnis Perseroan melalui unit audit internal yang
              bertugas mengawasi proses-proses bisnis yang dijalankan oleh karyawan Perseroan. Dewan Komisaris Perseroan juga secara periodik mengadakan pembahasan dengan komite audit untuk membahas kelemahan-kelemahan yang ada pada proses
              bisnis Perseroan.
              <br />
              <br />
              Laporan yang teratur memudahkan manajemen untuk melakukan pengawasan dan koreksi setiap penyimpangan terhadap akvitas keuangan dan operasional. Manajemen juga menugaskan orang-orang yang berintegritas dan cakap dalam
              pekerjaannya untuk memastikan bahwa sistem pengendalian internal berjalan sebagaimana yang diharapkan. Perseroan melakukan penelaahan sistem pengendalian internal secara periodik. Pengawasan terhadap aset-aset Perseroan
              dilakukan dengan pelaporan yang teratur ditelaah oleh auditor internal dan auditor eksternal.
            </p>
            <br />
            <h5>Manajemen Risiko</h5>
            <p>
              Dalam menjalankan usahanya, Perseroan dihadapkan dengan berbagai macam risiko yang dijelaskan dalam Bab VI Prospektus tentang Faktor Risiko. Untuk meminimalisasi risiko-risiko tersebut, Perseroan melakukan manajemen risiko
              antara lain:
            </p>
            <ul className="listDecimal">
              <li>
                <h6>Risiko Gangguan Jaringan Kabel Serat Optik </h6>
                <p>
                  Manajemen risiko gangguan jaringan kabel serat optik merupakan komponen penting dari strategi bisnis perusahaan telekomunikasi. Gangguan jaringan dapat terjadi karena berbagai alasan, termasuk peristiwa alam, kerusakan
                  peralatan, serangan siber, atau kesalahan manusia. Berikut adalah beberapa langkah yang dapat diambil untuk mengelola risiko gangguan jaringan kabel serat optik: penilaian risiko secara menyeluruh, diversifikasi rute
                  jaringan, pemantauan real-time, pemulihan bencana, pelatihan karyawan, perjanjian Service Level Agreement (SLA), perawatan rutin perangkat, asuransi, dan simulasi krisis.
                </p>
              </li>
              <li>
                <h6>Risiko Persaingan Usaha </h6>
                <p>
                  Manajemen risiko persaingan merupakan hal yang krusial dalam bisnis perusahaan telekomunikasi, terutama dalam industri yang sangat kompetitif ini. Berikut adalah beberapa langkah yang dapat diambil untuk mengelola risiko
                  persaingan dalam bisnis Perseroan: analisis pasar dan persaingan, diferensiasi layanan, harga yang kompetitif, inovasi teknologi, pemasaran yang efektif, kemitraan strategis, kualitas layanan pelanggan yang baik, analisis
                  SWOT, dan keterlibatan dalam komunitas.
                </p>
              </li>
              <li>
                <h6>Risiko Sumber Daya Manusia </h6>
                <p>
                  Manajemen risiko sumber daya manusia (SDM) dalam perusahaan telekomunikasi merupakan faktor penting untuk menjaga produktivitas, efisiensi, dan keberlanjutan bisnis. Risiko SDM meliputi aspek seperti rekrutmen, pelatihan,
                  kinerja, kepatuhan, dan pengembangan karyawan. Berikut adalah langkah-langkah yang dapat diambil untuk mengelola risiko SDM dalam perusahaan telekomunikasi: rekrutmen dan selesi yang teliti, pelatihan dan pengembangan
                  karyawan, manajemen kinerja untuk menilai dan memantau kinerja secara efektif, komunikasi dan keterlibatan karyawan, kebijakan dan prosedur yang jelas, rencana penggantian karyawan kunci, keselamatan dan kesehatan kerja
                  (K3), dan kompensasi yang kompetitif.
                </p>
              </li>
              <li>
                <h6>Risiko Pendanaan </h6>
                <p>
                  Manajemen risiko pendanaan (financial risk management) adalah komponen penting dalam menjalankan bisnis perusahaan telekomunikasi. Risiko pendanaan dapat meliputi aspek-aspek seperti likuiditas, pengelolaan utang,
                  fluktuasi nilai tukar, dan pengelolaan kas. Berikut adalah beberapa langkah yang dapat diambil untuk mengelola risiko pendanaan dalam bisnis telekomunikasi: diversifikasi sumber pendanaan, pengelolaan utang yang bijaksana,
                  pengelolaan kas dan investasi, pemantauan dan pelaporan keuangan yang efektif, konsultasi dengan professional, asuransi bisnis, dan membuat rencana krisis keuangan
                </p>
              </li>
            </ul>
            <br />
            <h5>Tanggung Jawab Sosial (Corporate Social Responsibility) </h5>
            <p>
              Pada era digital saat ini, internet telah menjadi kebutuhan pokok yang memengaruhi hampir semua aspek kehidupan. Sayangnya, tidak semua orang memiliki akses mudah ke internet, terutama di daerah terpencil seperti Kepulauan
              Seribu. Di sinilah tanggung jawab sosial perusahaan Corporate Social Responsibility (CSR) dapat berperan penting dalam membantu masyarakat yang membutuhkan.
            </p>
            <p>
              Dalam upaya meningkatkan CSR, Perseroan berkomitmen untuk memberikan manfaat sosial melalui program "Internet Gratis untuk Kepulauan Seribu." Program ini bertujuan untuk membantu masyarakat Kepulauan Seribu mendapatkan akses
              internet secara gratis agar mereka dapat merasakan manfaatnya dalam kehidupan sehari-hari. Berikut adalah rincian lebih lanjut tentang program ini :
            </p>
            <ul className="listDecimal">
              <li>
                <h6>
                  Akses Internet Gratis :{' '}
                  <span>Perseroan telah mendirikan hotspot internet di beberapa lokasi strategis di Kepulauan Seribu yang sulit dijangkau. Ini memungkinkan penduduk setempat dan wisatawan untuk dengan mudah mengakses internet. </span>
                </h6>
              </li>
              <li>
                <h6>
                  Manfaat untuk Pendidikan :{' '}
                  <span>
                    Akses internet membantu meningkatkan akses pendidikan bagi anak-anak di Kepulauan Seribu. Mereka dapat mengakses sumber daya pendidikan online, melakukan penelitian, dan mengikuti kursus online untuk meningkatkan
                    pengetahuan.{' '}
                  </span>
                </h6>
              </li>
              <li>
                <h6>
                  Dukungan untuk Pengembangan Ekonomi :{' '}
                  <span>Internet juga membantu masyarakat lokal dalam mengembangkan usaha mereka. Mereka dapat memasarkan produk lokal, menjalankan bisnis online, dan mencari peluang pekerjaan melalui platform online.</span>
                </h6>
              </li>
              <li>
                <h6>
                  Kemitraan Lokal :{' '}
                  <span>
                    Perseroan bekerja sama dengan pemerintah setempat dan lembaga sosial untuk menjalankan program ini secara efisien dan berkelanjutan. Ini termasuk memberikan pelatihan kepada masyarakat tentang cara menggunakan internet
                    dengan aman dan produktif.
                  </span>
                </h6>
              </li>
            </ul>
            <br />
            <p>Sampai dengan Prospektus ini diterbitkan, Perseroan melakukan CSR dalam bentuk sebagai berikut : </p>
            <table border="1" className="tableProspektus">
              <tbody>
                <tr>
                  <th>Tema</th>
                  <td>Internet Merata untuk Kepulauan Seribu</td>
                </tr>
                <tr>
                  <th>Tujuan</th>
                  <td>Memberi Askes internet secara gratis untuk mememperluas Area layanan di dv Kepulauan Seribu ( Pulau Pari dan Pulau Kelapa) </td>
                </tr>
                <tr>
                  <th>Pelaksanaan</th>
                  <td>Sejak tahun 2022 - Sekarang </td>
                </tr>
                <tr>
                  <th>Bentuk Kegiatan</th>
                  <td>
                    Penempatan Hot Spot Internet di lingkungan padat penduduk dengan membebaskan biaya bulanan, di mana masyarakat hanya perlu menhubungkan perangkat selular maupun elektronik lainnya berbasis WI-FI ke Hot Spot yang
                    tersedia.
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <p>Berikut adalah dokumentasi dari kegiatan CSR Perseroan : </p>
            <div className="containerDokumentasiCsr">
              <img src={DocCsr2} alt="Dokumentasi CSR" />
              <p>Sumber: Perseroan</p>
              <br />
              <img src={DocCsr1} alt="Dokumentasi CSR" />
              <p>Sumber: Perseroan</p>
            </div>
          </div>
          <br />
          <br />
          <div className="contentStruktur">
            <h4>Struktur Organisasi</h4>
            <p>Berikut ini adalah bahan Organisasi pada saat prospektus ini diterbitkan :</p>
            <img src={StrukturOrganisasi} />
          </div>
        </div>
      </div>
      <div className="footer">{isIdPath ? <FooterEn /> : <FooterId />}</div>
    </>
  );
};

export default PrinsipStruktur;
