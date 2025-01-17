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
  rewind: true,
  autoplay: true,
  pagination: false,
  arrows: true, // Ativando as setas
  breakpoints: {
    1024: {
      perPage: 2, // Mostra 2 slides por vez em telas até 1024px
      gap: "15px"
    },
    768: {
      perPage: 1, // Mostra 1 slide por vez em telas até 768px
      gap: "10px",
      arrows: false // Remove as setas em dispositivos menores
    }
  }
};
</script>

<template>
  <Splide :options="options" aria-label="Opções Foco" class="carousel">
    <SplideSlide v-for="image in images" :key="image">
      <img :src="image" alt="Foto">
    </SplideSlide>
  </Splide>
</template>

<style scoped>
.carousel {
  padding: 20px 40px;
}
</style>
