<script setup>
import { ref } from "vue";
import { TypingEffect } from "src/router";

const selected = ref(false);
</script>

<template>
<section class="container">
  <div class="texto-inicial">
    <img src="/images/logomin.svg" alt="Logo Foco" class="logo">
    <div>
      <h2 class="text-white text-sm q-mb-md">
      <TypingEffect text="<b>Edital recebido com sucesso!</b><br>Detectei que este é o edital do <b>TSE Unificado 2024.</b><br>Estou pronta para te ajudar a organizar seus estudos<br><br>O que você gostaria de fazer agora?"
      :speed="50"/>
      </h2>
    </div>
  </div>
  <section>
    <div class="flex flex-wrap q-my-md">
      <a class="botao-roxo text-sm text-white">
        Criar um cronograma de <br> estudos personalizado
      </a>
      <a class="botao-roxo text-sm text-white">
        Tirar dúvidas<br> sobre o edital
      </a>
      <a class="botao-roxo text-sm text-white">
        Listar os principais <br> conteudos cobrados
      </a>
      <a class="botao-roxo text-sm text-white justify-center">
        Mais
      </a>
    </div>
  </section>
  <section v-if="selected">
    <div class="q-my-md flex">
      <a href="" class="botao-amarelo texto-roxo-escuro text-sm">
        Criar um cronograma de estudos personalizados
      </a>
    </div>
    <div class="flex">
      <img src="/images/logomin.svg" alt="Logo Foco" class="logo">
      <div>
        <p class="text-white text-sm q-mb-md">
        <TypingEffect text="Certo, vamos criar um cronograma personalizado para o TSE Unificado 2024.<br>Para ajustar o plano às suas necessidades, preciso de algumas informações:<br>1.Qual o cargo que quer estudar?<br>2.Quantas horas por dia você pode dedicar aos estudos?<br>3.Quantos dias na semana você planeja estudar?<br>4.Você prefere alternar disciplinas ou focar em uma por vez?<br><br>Assim que me passar essas informações, montarei seu cronograma sob medida" :speed="160"/>
        </p>
      </div>
    </div>
  </section>
</section>
</template>

<style scoped>
.container {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
}

.logo {
  align-self: flex-start;
  padding: 0px 10px;
}

* {
  line-height: 1.2;
}

.flex-wrap {
  flex-wrap: wrap;
  gap: 10px;
}

.botao-amarelo {
  align-self: flex-end;
}

.texto-inicial {
  max-width: 100%;
  display: grid;
  grid-template-columns: 8% 90%;
}

.justify-center {
  align-self: center;
  padding: 20px;
}
</style>
