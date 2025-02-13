<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
const router = useRouter();
const planos = ref([
  {
    titulo: "Pro",
    subtitulo: "Mensal",
    detalhes: [
      "Editais ilimitados", "Simplificação de editais", "Cronograma individual", "Questões ilimitadas", "Correções ilimitadas", "Apoio à saúde mental", "Feedbacks contínuos", "Mapeamento de aulas"
    ],
    ativo: false
  },
  {
    titulo: "Gratuito",
    detalhes: [
      "Até dois editais ativos", "Simplificação de editais", "Cronograma individual", "10 questões por dia", "1 correção por semana", "Apoio à saúde mental", "Feedbacks contínuos", "Mapeamento de aulas"
    ],
    ativo: true
  },
  {
    titulo: "Pro",
    subtitulo: "Anual",
    detalhes: [
      "Editais ilimitados", "Simplificação de editais", "Cronograma individual", "Questões ilimitadas", "Correções ilimitadas", "Apoio à saúde mental", "Feedbacks contínuos", "Mapeamento de aulas"
    ],
    ativo: false
  }
]);

const splideOptions = {
  type: "loop",
  perPage: 1,
  autoplay: true,
  interval: 3000,
  pagination: false,
  arrows: true,
  height: "auto" // Ajusta dinamicamente
};
</script>

<template>
<div class="flex-boxes desktop">
  <div class="box"
  v-for="plano in planos"
  :key="plano"
  :class="{ativo: plano.ativo}"
  :data-subtitulo="plano.subtitulo"
  >
    <div class="q-pb-sm">
      <h2 class="text-lg texto-roxo">
      {{ plano.titulo }}
      </h2>
      <h3 class="text-lg texto-roxo text-center" v-if="plano.subtitulo">
        {{ plano.subtitulo }}
      </h3>
    </div>
    <ul v-for="detalhe in plano.detalhes" :key="detalhe">
      <li class="flex">
        <img src="/icons/check.svg" alt="">
        <p class="texto-roxo">
          {{ detalhe }}
        </p>
      </li>
    </ul>
    <a class="botao-roxo" @click="router.push('/login')">
      <span>
        <b>Comece agora</b>
      </span>
    </a>
  </div>
</div>

<!-- Carrossel para mobile -->
<div class="mobile">
    <Splide :options="splideOptions" class="splide-container">
      <SplideSlide v-for="(plano, index) in planos" :key="index">
        <div class="box slide-box" :class="{ ativo: plano.ativo }" :data-subtitulo="plano.subtitulo">
          <div class="q-pb-sm">
            <h2 class="text-lg texto-roxo">{{ plano.titulo }}</h2>
            <h3 class="text-lg texto-roxo text-center" v-if="plano.subtitulo">
              {{ plano.subtitulo }}
            </h3>
          </div>
          <ul>
            <li v-for="(detalhe, i) in plano.detalhes" :key="i" class="flex">
              <img src="/icons/check.svg" alt="">
              <p class="texto-roxo">{{ detalhe }}</p>
            </li>
          </ul>
          <a class="botao-roxo" @click="router.push('/login')">
            <span><b>Comece agora</b></span>
          </a>
        </div>
      </SplideSlide>
    </Splide>
  </div>

</template>

<style scoped>
.box {
  background-color: #fff;
  padding: 20px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 80px;
  margin-bottom: 80px;
  position: relative;
}

/* Preço para planos mensais */
.box[data-subtitulo="Mensal"]:not(.ativo)::after {
  content: "R$ 30/mês";
  position: absolute;
  bottom: -43px;
  right: 27px;
  color: var(--roxo-medio);
  padding: 5px 30px;
  background-color: var(--amarelo);
  border-radius: 0px 0px 30px 30px;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Preço para planos anuais */
.box[data-subtitulo="Anual"]:not(.ativo)::after {
  content: "R$ 300/ano";
  position: absolute;
  bottom: -41px;
  right: 22px;
  color: var(--roxo-medio);
  padding: 5px 30px;
  background-color: var(--amarelo);
  border-radius: 0px 0px 30px 30px;
  font-size: 1.5rem;
  font-weight: bold;
}

.flex {
  gap:10px;
}

.flex-boxes {
  gap: 40px;
  display: flex;
}

h2 {
  text-align: center;
  font-weight: bold;
  line-height: 0.8;
}

h3 {
  line-height: 0.8;
}

li {
  align-items: center;
  font-weight: 500;
}

.ativo {
  background-color: var(--amarelo);
  transform: translateY(-80px);
}

.ativo h2 {
  padding-top: 10px;
}

b {
  color: var(--amarelo);
}

.slide-box {
  max-width: 90%; /* Garante que o slide não fique muito grande */
  margin: auto; /* Centraliza o slide */
}

/* Ajusta a largura do Splide */
.splide-container {
  width: 100%;
  max-width: 300px; /* Limita a largura máxima do carrossel */
  margin: 0 auto;
}

@media screen and (min-width:769px) {
  .mobile {
    display: none;
  }
}

@media screen and (max-width:769px) {
  .desktop {
    display: none;
  }
  .flex-boxes {
    flex-direction: column;
    gap: 60px;
    padding: 0px 20px;
    margin-bottom: 60px;
  }
  .box {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .ativo {
    background-color: var(--amarelo);
    transform: translateY(0px);
  }
  .text-lg {
    font-size: 2rem;
  }
  .slide-box {
    max-width: 80%;
    padding: 15px;
  }
  .mobile {
    margin-bottom: 40px;
    margin-top: 30px;
  }
  .box[data-subtitulo="Mensal"]:not(.ativo)::after {
    display: none;
  }
  .box[data-subtitulo="Anual"]:not(.ativo)::after {
    display: none;
  }
  li {
    margin-bottom: 10px;
  }
}
</style>
