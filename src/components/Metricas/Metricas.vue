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
    titulo: "Progresso no<br> cronograma",
    titulo2: "Progresso por Matéria(%)",
    separator: true
  },
  {
    img: "/images/metricas/3.png",
    img2: "/images/metricas/4.png",
    img3: "/images/metricas/9.png",
    img4: "/images/metricas/10.png",
    titulo: "Rendimento das Questões",
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

const graficosmob = ref([
  {
    img: "/images/metricas/1mob.png",
    img2: "/images/metricas/2mob.png",
    img3: "/images/metricas/7mob.png",
    img4: "/images/metricas/8mob.png",
    titulo2: "Progresso por Matéria(%)",
    separator: true
  },
  {
    img: "/images/metricas/3mob.png",
    img2: "/images/metricas/4mob.png",
    img3: "/images/metricas/9mob.png",
    img4: "/images/metricas/10mob.png",
    titulo: "Percentual do Rendimento(%)",
    separator: true
  },
  {
    img: "/images/metricas/5mob.png",
    img2: "/images/metricas/6mob.png",
    img3: "/images/metricas/11mob.png",
    img4: "/images/metricas/12mob.png",
    titulo: "Evolução da Redação",
    titulo2: "",
    separator: false
  }
]);
</script>

<template>
<div class="texto-inicial">
  <img src="/images/logopicroxo.svg" alt="Logo Foco" class="logo" v-if="!toggle">
  <img src="/images/logomin.svg" alt="Logo Foco" class="logo" v-if="toggle">
  <p class="text-white text-sm" :class="{textoroxo:!toggle,}">
    Seu dempenho até agora.
  </p>
</div>
<section class="graficos">
  <div v-for="grafico in graficos" :key="grafico">
    <div class="box">
      <div>
        <h3 v-if="grafico.titulo" v-html="grafico.titulo" class="texto-amarelo text-md" :class="{textoroxo:!toggle,}">
        </h3>
        <img :src="grafico.img" v-if="toggle">
        <img :src="grafico.img3" v-if="!toggle">
      </div>
      <div>
        <h3 v-if="grafico.titulo2" v-html="grafico.titulo2" class="texto-amarelo text-md" :class="{textoroxo:!toggle,}">
        </h3>
        <img :src="grafico.img2" v-if="toggle" :class="{
          aligncenter:grafico.img2==='/images/metricas/6.png',
          aligncenter2:grafico.img2==='/images/metricas/4.png'
        }">
        <img :src="grafico.img4" v-if="!toggle" :class="{
          aligncenter:grafico.img4==='/images/metricas/12.png',
          aligncenter2:grafico.img4==='/images/metricas/10.png'
        }" >
      </div>
    </div>
    <q-separator color="primary" v-if="grafico.separator" style="width:100%; height: 2px;"></q-separator>
  </div>
</section>
<section class="graficos-mobile">
  <div v-for="grafico in graficosmob" :key="grafico">
    <div class="box">
      <div>
        <h3 v-if="grafico.titulo" v-html="grafico.titulo" class="texto-amarelo text-md" :class="{textoroxo:!toggle,}">
        </h3>
        <img :src="grafico.img" v-if="toggle">
        <img :src="grafico.img3" v-if="!toggle">
      </div>
      <div>
        <h3 v-if="grafico.titulo2" v-html="grafico.titulo2" class="texto-amarelo text-md" :class="{textoroxo:!toggle,}">
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
.aligncenter2 {
  margin-top: 40px;
}

.aligncenter {
  margin-top: 120px;
}

.texto-inicial {
  display: flex;
  gap: 10px;
}

.texto-inicial p {
  padding: 0px !important;
}

.logo {
  align-self: flex-start;
  width: 40px;
}

.graficos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.graficos-mobile {
  display: flex;
  flex-direction: column;
}

.box {
  display: flex;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  flex: 1;
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
@media screen and (max-width:1280px) {
  .text-md {
    font-size: 1.25rem;
  }
}

@media screen and (max-width:1006px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
  .graficos {
    display: none;
  }
  .graficos-mobile {
    justify-content: center;
    align-items: center;
  }
  .text-sm {
    font-size: 1rem;
  }
}

@media screen and (min-width:1006px) {
  .graficos-mobile {
    display: none;
  }
}
</style>
