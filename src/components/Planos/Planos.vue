<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const planos = ref([
  {
    titulo: "Pro",
    subtitulo: "Mensal",
    detalhes: [
      "Até dois editais ativos", "Simplificação de editais", "Cronograma individual", "10 questões por dia", "1 correção por semana", "Apoio à saúde mental", "Feedbacks contínuos", "Mapeamento de aulas"
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
      "Até dois editais ativos", "Simplificação de editais", "Cronograma individual", "10 questões por dia", "1 correção por semana", "Apoio à saúde mental", "Feedbacks contínuos", "Mapeamento de aulas"
    ],
    ativo: false
  }
]);
</script>

<template>
<div class="flex-boxes">
  <div class="box"
  v-for="plano in planos"
  :key="plano"
  :class="{ativo: plano.ativo}"
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

/* Aplica ::after apenas quando a classe .ativo NÃO estiver presente */
.box:not(.ativo)::after {
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

.flex {
  gap:10px
}

.flex-boxes{
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

b{
  color: var(--amarelo);
}
</style>
