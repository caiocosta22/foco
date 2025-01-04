<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });

const graficos = ref([
  {
    img: "/images/metricas/1.png",
    img2: "/images/metricas/2.png",
    img3: "/images/metricas/7.png",
    img4: "/images/metricas/8.png",
    titulo: "Progresso no <br> Cronograma",
    titulo2: "Progresso por <br> Matéria(%)",
    separator: true
  },
  {
    img: "/images/metricas/3.png",
    img2: "/images/metricas/4.png",
    img3: "/images/metricas/9.png",
    img4: "/images/metricas/10.png",
    titulo: "Rendimento das <br> Questões",
    titulo2: "Percentual do Rendimento(%)",
    separator: true
  },
  {
    img: "/images/metricas/5.png",
    img2: "/images/metricas/6.png",
    img3: "/images/metricas/11.png",
    img4: "/images/metricas/12.png",
    titulo: "Evolução da Redação",
    titulo2: "",
    separator: false
  }
]);
</script>

<template>
<div class="flex align-center">
  <img src="/images/logopicroxo.svg" alt="Logo Foco" class="logo" v-if="!toggle">
  <img src="/images/logomin.svg" alt="Logo Foco" class="logo" v-if="toggle">
  <p class="text-white text-sm" :class="{textoroxo:!toggle,}">
    Seu dempenho até agora.
  </p>
</div>
<section class="graficos">
  <div v-for="grafico in graficos" :key="grafico">
    <div class="grid">
      <div>
        <h3 v-html="grafico.titulo" class="texto-amarelo text-md" :class="{textoroxo:!toggle,}">
        </h3>
        <img :src="grafico.img" v-if="toggle">
        <img :src="grafico.img3" v-if="!toggle">
      </div>
      <div>
        <h3 v-html="grafico.titulo2" class="texto-amarelo text-md" :class="{textoroxo:!toggle,}">
        </h3>
        <img :src="grafico.img2" v-if="toggle">
        <img :src="grafico.img4" v-if="!toggle">
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
  padding: 20px 60px;
}

h3 {
  font-weight: 500;
  line-height: 1.2;
  padding: 20px 0px;
}

p {
  padding: 10px;
  font-weight: 500;
}

.textoroxo{
  color: var(--roxo-escuro) !important;
}
</style>
