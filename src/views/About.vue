<template>
  <div>
    <navbar />
  <div class="about-us mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src="/assets/images/logo.jpeg" alt="TK" class="img-fluid">
        </div>
        <div class="col-md-6">
          <h2>Tentang Kami</h2>
          <p class="lead">Sekolah Taman Kanak-Kanak (TK) kami berdiri sejak tahun 1990 dan terletak di daerah yang strategis, mudah dijangkau, dan dekat dengan fasilitas umum seperti pasar, rumah sakit, dan pusat perbelanjaan.</p>
          <p class="lead">Kami memiliki visi untuk memberikan pendidikan berkualitas yang memperhatikan perkembangan anak secara holistik dan berbasis kecerdasan majemuk. Selain itu, kami juga menekankan pada nilai-nilai karakter yang baik seperti kerja sama, kemandirian, kejujuran, dan disiplin.</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card border-0 shadow mb-2">
            <div class="card-body">
              <h3 class="card-title">Kurikulum</h3>
              <p class="card-text">Kami menggunakan kurikulum yang berbasis kecerdasan majemuk dan mengutamakan pendekatan play-based learning untuk memberikan pengalaman belajar yang menyenangkan dan interaktif bagi anak-anak.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow mb-2">
            <div class="card-body">
              <h3 class="card-title">Fasilitas</h3>
              <p class="card-text">Kami menyediakan fasilitas yang lengkap dan modern seperti ruang kelas yang nyaman, perpustakaan, taman bermain, serta aula untuk kegiatan ekstrakurikuler dan acara penting lainnya.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow mb-2">
            <div class="card-body">
              <h3 class="card-title">Guru</h3>
              <p class="card-text">Kami memiliki tenaga pengajar yang berkualitas dan berpengalaman dalam mengajar anak usia dini. Selain itu, kami juga memberikan pelatihan dan pengembangan diri secara berkala kepada guru-guru kami.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  }
}
</script>

