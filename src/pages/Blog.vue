<script setup>
import { ref } from "vue";
const selected = ref("Nordeste");
const selected2 = ref("Nordeste");
const options = ref([
  "Norte", "Nordeste", "Centro", "Sudeste", "Sul"
]);
const options2 = ref([
  "Policial", "Fiscal", "Tribunal", "Jurídico", "Educação", "Militar", "Saúde"
]);

const cards = ref([
  {
    titulo: "Concursos Educação",
    descricao: "Veja as vagas abertas e previstas para o começo de 2025!",
    image: "/images/blog/concursos.png"
  },
  {
    titulo: "CNU 2025",
    descricao: "Contratação da banca iniciada!",
    image: "/images/blog/cnu.png"
  },
  {
    titulo: "Concursos PM CE",
    descricao: "Anuncio de novo edital para a Polícia Militar do Estado do Ceará.",
    image: "/images/blog/pm.png"
  }
]);
</script>

<template>
<section class="border-radius">
  <h1 class="text-white text-bold text-xlg text-center">
    Confira as principais notícias
  </h1>
  <h2 class="texto-amarelo text-regular text-xlg text-center">
    no mundo dos concursos
  </h2>
  <div class="flex justify-center align-center q-pt-md">
    <q-separator class="separator"></q-separator>
    <img src="/images/blog/logopic.svg" alt="logo foco"
    class="q-px-xl">
    <q-separator class="separator"></q-separator>
  </div>
</section>
<section class="bg-white border-radius">
  <div class="filtros">
    <div class="flex">
      <img src="/images/blog/filtro.svg" alt="icone filtro"
      style="width: 30px; height: 30px;">
      <span class="texto-roxo text-md">
        Filtros
      </span>
      <q-select
          rounded
          v-model="selected"
          :options="options"
          dense
          popup-content-style="background-color:var(--amarelo);color:var(--roxo-medio)"
          input-style="color:var(--roxo-medio)"
          color="primary"
          style="width:200px"
          bg-color="white"
        />
        <q-select
          rounded
          v-model="selected2"
          :options="options2"
          dense
          popup-content-style="background-color:var(--amarelo);color:var(--roxo-medio)"
          input-style="color:var(--roxo-medio)"
          color="primary"
          style="width:200px"
          bg-color="white"
        />
    </div>
    <div class="flex">
      <p class="text-md">
        CE X
      </p>
      <p class="text-md">
        PE X
      </p>
      <p class="text-md">
        Policial X
      </p>
    </div>
  </div>
  <div class="cards">
    <div class="card" v-for="card in cards"
    :key="card">
      <img :src="card.image" alt="Concurso">
      <div class="textos">
        <h3 class="texto-amarelo text-bold text-md">
          {{card.titulo}}
        </h3>
        <p class="text-regular text-white text-md">
          {{ card.descricao }}
        </p>
        <q-btn
        round
        color="yellow"
        style="align-self: flex-end; width: 10px">
          <span class="texto-roxo">
            ->
          </span>
        </q-btn>
      </div>
    </div>
</div>
</section>
</template>

<style scoped>
.separator {
  width: 43%;
  align-self: center;
}

section {
  padding: 60px;
}

.flex {
  flex-wrap: nowrap;
  gap: 15px;
}

* {
  line-height: 1.2;
}

.filtros {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

p {
  padding: 15px 20px;
  border-radius: 60px;
  background-color: var(--roxo-medio);
  text-align: center;
  color: var(--amarelo);
  cursor: pointer;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 60px;
  background-color: var(--roxo-medio);
  text-align: left;
}

.textos {
  text-align: left;
  padding: 20px;
}
</style>
