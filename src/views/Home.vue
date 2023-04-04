<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2>
            Best
            <strong>School</strong>
          </h2>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
  }
}
</script>
