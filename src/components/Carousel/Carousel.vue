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
  arrows: false
};
</script>

<template>
  <Splide :options="options" aria-label="Opções Foco"
  class="q-pt-md">
    <SplideSlide v-for="image in images" :key="image">
      <img :src="image" alt="Foto">
    </SplideSlide>
  </Splide>
</template>

<style scoped>

</style>
