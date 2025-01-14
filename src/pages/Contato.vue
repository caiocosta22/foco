<script setup>
import { ref } from "vue";
const inputs = ref([
  {
    titulo: "Seu nome*",
    model: "",
    label: "Digite seu nome aqui"
  },
  {
    titulo: "Seu e-mail*",
    model: "",
    label: "Digite seu e-mail aqui"
  },
  {
    titulo: "Seu número de telefone*",
    model: "",
    label: "Digite seu número de telefone aqui"
  },
  {
    titulo: "Assunto da mensagem",
    model: "",
    label: "Como podemos te ajudar hoje?"
  },
  {
    titulo: "Mensagem",
    model: "",
    label: "Escreva sua mensagem aqui",
    fill: true
  }
]);
</script>

<template>
<section class="form">
  <div>
    <h1 class="texto-roxo text-xl text-bold">
    Entre em contato
  </h1>
  <h2 class="texto-roxo text-xlg">
    Estamos aqui para ajudar e esclarecer <br> qualquer dúvida que possa surgir.
  </h2>
  </div>
  <div class="inputs">
    <div class="input" v-for="input in inputs" :key="input"
    :class="{fill: input.fill}">
      <p class="texto-roxo text-md text-bold">
        {{ input.titulo }}
      </p>
      <q-input
      v-model="input.model"
      :label="input.label"
      color="primary"
      label-color="primary"
      class="input-linha"
      input-style="color:var(--roxo-medio)"
      />
    </div>
  </div>
  <div class="flex-row margin-top">
    <span class="texto-roxo text-sm text-left q-my-lg">
      Estamos comprometidos com a proteção da sua privacidade.<br>Garantimos que nenhuma informação será coletada sobre<br>você sem o seu consentimento explícito.
    </span>
    <a
    class="botao-roxo">
      <span class="text-md texto-amarelo">
        Enviar
      </span>
    </a>
  </div>
</section>
</template>

<style scoped>
.form {
  background-color: #ffffff;
  border-radius: 0px 0px 100px 100px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  text-align: center;
  padding: 60px 80px;
}

h1, h2 {
  line-height: 1.2;
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  justify-content: center;
}

.input {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
}

.input-linha {
  border-bottom: 1px solid var(--roxo-medio);
}

a {
  height: 50px;
}

@media screen and (max-width:1006px) {
  .inputs {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
