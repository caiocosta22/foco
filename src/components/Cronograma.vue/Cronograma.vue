<script setup>
import { ref } from "vue";
import { TypingEffect } from "src/router";

const rotinas = ref([
  {
    titulo: "Segunda-Feira",
    descricao: ["20h - 20h50: Língua Portuguesa (Concordância Verbal)", "21h - 21h50: Direito Eleitoral (Código Eleitoral)", "22h - 22h30: Leitura e revisão de anotações"]
  },
  {
    titulo: "Terça-Feira",
    descricao: ["20h - 20h50: Língua Portuguesa (Concordância Verbal)", "21h - 21h50: Direito Eleitoral (Código Eleitoral)", "22h - 22h30: Leitura e revisão de anotações"]
  },
  {
    titulo: "Quarta-Feira",
    descricao: ["20h - 20h50: Língua Portuguesa (Concordância Verbal)", "21h - 21h50: Direito Eleitoral (Código Eleitoral)", "22h - 22h30: Leitura e revisão de anotações"]
  },
  {
    titulo: "Quinta-Feira",
    descricao: ["20h - 20h50: Língua Portuguesa (Concordância Verbal)", "21h - 21h50: Direito Eleitoral (Código Eleitoral)", "22h - 22h30: Leitura e revisão de anotações"]
  },
  {
    titulo: "Sexta-Feira",
    descricao: ["20h - 20h50: Língua Portuguesa (Concordância Verbal)", "21h - 21h50: Direito Eleitoral (Código Eleitoral)", "22h - 22h30: Leitura e revisão de anotações"]
  }
]);
</script>

<template>
<div class="flex">
  <img src="/images/logomin.svg" alt="Logo Foco" class="logo">
  <div>
    <h2 class="text-white text-sm">
    <TypingEffect text="<b>Semana 1</b><br>Edital: <b>TSE Unificado 2024</b><br>Carga horária: <b>3 horas por dia</b> | Dias de estudo: <b>Segunda a Sexta</b><br>Cargo: <b>Analista Administrativo</b><br>Método: <b>Alternância de disciplinas</b>"
    :speed="80"/>
    </h2>
  </div>
</div>
<q-separator style="width: 100%; height: 2px;" color="primary" class="q-my-md"></q-separator>
<section class="rotinas">
  <div v-for="rotina in rotinas" :key="rotina" class="rotina">
    <a class="botao-amarelo texto-roxo text-md">
      {{ rotina.titulo }}
    </a>
    <p v-for="descricoes in rotina.descricao" :key="descricoes" class="text-sm text-white">
      {{ descricoes }}
    </p>
  </div>
</section>
</template>

<style scoped>
.logo {
  align-self: flex-start;
  padding: 0px 10px;
}

.rotinas {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 20px;
}

.rotina {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

p {
  position: relative;
  padding-left: 10px;
}

p::before {
  content: "";
  background-color: var(--amarelo);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  left: -5px;
  margin-top: 10px;
  padding: 3px;
}

a {
  font-weight: 500;
  max-width: 300px;
}

* {
  line-height: 1.2;
}
</style>
