<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
             <h2>
                SELAMAT DATANG DI WEBSITE RESMI
                <br /><strong>RA ASY SYIFA</strong>
              </h2>
              <router-link class="btn btn-lg btn-primary" to="/daftar">
                <b-icon-arrow-right></b-icon-arrow-right>Daftar Sekarang
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption=""
      img-src="assets/images/images1.jpeg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption=""
      img-src="assets/images/images2.jpeg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption=""
      img-src="assets/images/images3.jpeg"
    ></b-carousel-slide>
  </b-carousel>
</div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption=""
      img-src="assets/images/images1.jpeg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption=""
      img-src="assets/images/images2.jpeg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption=""
      img-src="assets/images/images3.jpeg"
    ></b-carousel-slide>
  </b-carousel>
</div>
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                SELAMAT DATANG DI WEBSITE RESMI
                <br /><strong>RA ASY SYIFA</strong>
              </h2>
              <router-link class="btn btn-lg btn-primary" to="/daftar">
                <b-icon-arrow-right></b-icon-arrow-right>Daftar Sekarang
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
body {
  background-image: url('../assets/images/backround\ tk.jpg');
}
</style>