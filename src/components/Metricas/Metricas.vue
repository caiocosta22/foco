<script setup>
import { ref } from "vue";
const graficos = ref([
  {
    img: "/images/metricas/1.png",
    img2: "/images/metricas/2.png",
    titulo: "Progresso no <br> Cronograma",
    titulo2: "Progresso por <br> Matéria(%)",
    separator: true
  },
  {
    img: "/images/metricas/3.png",
    img2: "/images/metricas/4.png",
    titulo: "Rendimento das <br> Questões",
    titulo2: "Percentual do Rendimento(%)",
    separator: true
  },
  {
    img: "/images/metricas/5.png",
    img2: "/images/metricas/6.png",
    titulo: "Evolução da Redação",
    titulo2: "",
    separator: false
  }
]);
</script>

<template>
<section class="graficos">
  <div v-for="grafico in graficos" :key="grafico">
    <div class="grid">
      <div>
        <h3 v-html="grafico.titulo" class="texto-amarelo text-md">
        </h3>
        <img :src="grafico.img">
      </div>
      <div>
        <h3 v-html="grafico.titulo2" class="texto-amarelo text-md">
        </h3>
        <img :src="grafico.img2">
      </div>
    </div>
    <q-separator color="primary" v-if="grafico.separator" style="width:100%; height: 2px;"></q-separator>
  </div>
</section>
</template>

<style scoped>
.graficos {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  padding: 20px 0px;
}

h3 {
  font-weight: 500;
  line-height: 1.2;
  padding: 20px 0px;
}
</style>
