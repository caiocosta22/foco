<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const email = ref();
const senha = ref();
</script>

<template>
<section>
  <img src="/images/login/logo.svg" alt="Logo Foco">
  <div class="campos">
    <h1 class="text-xlg texto-amarelo">
      Bem vindo
    </h1>
    <q-input outlined
    rounded
    color="white"
    label="E-mail"
    v-model="email"
    style="width:430px"></q-input>
    <q-input outlined
    rounded
    color="white"
    label="Senha"
    v-model="senha"
    style="width:430px"></q-input>
    <div class="flex justify-between">
      <p class="texto-amarelo">Lembre de mim</p>
      <p class="texto-amarelo">Esqueceu sua senha?</p>
    </div>
    <a @click="router.push('/IA')" class="botao-amarelo" style="width:330px; align-self: center;">
      <span class="texto-roxo-escuro text-sm text-regular">
        Entrar
      </span>
    </a>
  </div>
  <div>
    <div class="separators text-sm">
      <q-separator
      style="width:40%"
      color="white"></q-separator>
      <p>
        ou
      </p>
      <q-separator style="width:40%"
      color="white"></q-separator>
    </div>
    <img src="/images/login/icons.png" alt="">
    <p class="text-sm q-py-md">
      <b>Não tem conta?</b> Se cadastre aqui
    </p>
  </div>
</section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px;
  text-align: center;
}

img {
  max-width: 350px;
  margin: 0 auto;
}

h1, a {
  font-weight: 500;
  line-height: 1.2;
}

.campos {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.separators {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: center;
}

</style>
