<script setup>
import { ref } from "vue";
import VueSelect from "vue3-select-component";
const selected = ref("Nordeste");
const selected2 = ref("Nordeste");
const options = ref([
  {
    label: "Norte",
    value: "objeto1"
  },
  {
    label: "Nordeste",
    value: "objeto2"
  },
  {
    label: "Centro",
    value: "objeto3"
  },
  {
    label: "Sudeste",
    value: "objeto4"
  },
  {
    label: "Sul",
    value: "objeto5"
  }
]);

const options2 = ref([
  {
    label: "Policial",
    value: "objeto1"
  },
  {
    label: "Fiscal",
    value: "objeto2"
  },
  {
    label: "Tribunal",
    value: "objeto3"
  },
  {
    label: "Jurídico",
    value: "objeto4"
  },
  {
    label: "Educação",
    value: "objeto5"
  },
  {
    label: "Militar",
    value: "objeto5"
  },
  {
    label: "Saúde",
    value: "objeto5"
  }
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
<div class="bg-branco">
  <section class="bg-roxo">
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
</div>
<section class="bg-white border-radius">
  <div class="filtros">
    <div class="flex filtros-interno">
      <img src="/images/blog/filtro.svg" alt="icone filtro"
      style="width: 30px; height: 30px;">
      <span class="texto-roxo text-md text-bold">
        Filtros
      </span>
      <VueSelect
        v-model="selected"
        :options="options"
        style="width:200px;"
        placeholder="Estado"
        class="select"
      />
      <VueSelect
        v-model="selected2"
        :options="options2"
        style="width:200px;"
        placeholder="Carreiras"
        class="select"
      />
    </div>
    <div class="flex filtrinhos">
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
        <div>
          <h3 class="texto-amarelo text-bold text-md">
            {{card.titulo}}
          </h3>
          <p class="text-regular text-white text-md">
            {{ card.descricao }}
          </p>
        </div>
        <q-btn
        round
        color="yellow"
        class="botao">
          <q-icon
          name="fa-solid fa-chevron-right"
          color="primary"/>
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
  padding: 80px;
}

.flex {
  flex-wrap: nowrap;
  gap: 15px;
}

* {
  line-height: 1.2;
}

.bg-branco {
  background-color: #ffffff;
}

.bg-roxo {
  background-color: var(--roxo-medio);
  border-radius: 0px 0px 100px 100px;
}

.filtros {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

p {
  background-color: var(--roxo-medio);
  color: var(--amarelo);
  text-align: left;
}

.flex p {
  border-radius: 60px;
  padding: 10px 20px;
  cursor: pointer;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 40px 0px;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  background-color: var(--roxo-medio);
  text-align: left;
}

.textos {
  text-align: left;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.botao {
  width: 10px;
  align-self: flex-end;
}

.select {
  --vs-border-radius: 20px;
  --vs-padding: 0.5rem 0.5rem;
}

@media screen and (max-width:1006px) {
  .text-xl {
    font-size: 3.5rem;
  }
  .text-xlg {
    font-size: 2rem;
  }
  .text-lg {
    font-size: 1.75rem;
  }
  .text-md {
    font-size: 1.25rem;
  }
  section {
    padding: 40px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 40px 0px;
  }
  .filtros {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .filtrinhos {
    display: none;
  }
  .filtros-interno {
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width:769px) {
  section {
    padding: 40px 20px;
  }
}
</style>
