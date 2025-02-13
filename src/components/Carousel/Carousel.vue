<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { ref } from "vue";

const images = ref([
  "/images/carousel/editais.png",
  "/images/carousel/cronograma.png",
  "/images/carousel/feedback.png",
  "/images/carousel/questoes.png",
  "/images/carousel/saude.png",
  "/images/carousel/mapeamento.png"
]);

const options = {
  perPage: 3,
  padding: "20px",
  gap: "20px",
  autoplay: true,
  pagination: false,
  arrows: true,
  type: "loop",
  breakpoints: {
    1024: {
      perPage: 2,
      gap: "15px"
    },
    650: {
      perPage: 1,
      gap: "15px",
      padding: "30px"
    }
  }
};
</script>

<template>
  <Splide :options="options" aria-label="Opções Foco" class="carousel" style="width: 100%;">
    <SplideSlide v-for="image in images" :key="image">
      <img :src="image" alt="Foto">
    </SplideSlide>
  </Splide>
</template>

<style scoped>
.carousel {
  padding: 20px 40px;
}

@media screen and (max-width:1006px) {
  .carousel {
    padding: 20px 0px;
  }
}
</style>
