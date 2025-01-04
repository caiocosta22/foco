<script setup>
import { ref, onMounted, computed } from "vue";
import { TypingEffect } from "src/router";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });

const botoes = ref([
  {
    descricao: "Criar um cronograma de estudos personalizado"
  },
  {
    descricao: "Tirar dúvidas sobre o edital"
  },
  {
    descricao: "Listar os principais conteúdos cobrados"
  },
  {
    descricao: "Mais"
  }
]);

const selected = ref(null);
const showBotoes = ref(false);
const showResposta = ref(false);
const startLastTyping = ref(false);
onMounted(() => {
  setTimeout(() => {
    showBotoes.value = true;
  }, 6000);
});
function handleClick (botao) {
  selected.value = botao.descricao;
  showResposta.value = true;

  setTimeout(() => {
    startLastTyping.value = true;
  }, 1000);
}
</script>

<template>
<section class="container">
  <div class="texto-inicial">
    <img src="/images/logopicroxo.svg" alt="Logo Foco" class="logo" v-if="!toggle">
    <img src="/images/logomin.svg" alt="Logo Foco" class="logo" v-if="toggle">
    <div>
      <h2 class="text-white text-sm">
        <TypingEffect
          text="<b>Edital recebido com sucesso!</b><br>Detectei que este é o edital do <b>TSE Unificado 2024.</b> <br>Estou pronta para te ajudar a organizar seus estudos<br><br>O que você gostaria de fazer agora?"
          :speed="30"
        />
      </h2>
    </div>
  </div>
  <section class="pd-xl" v-if="showBotoes">
    <div class="flex flex-wrap q-my-md">
      <a
        class="botao-roxo text-sm text-white"
        v-for="botao in botoes"
        :key="botao.descricao"
        @click="handleClick(botao)"
      >
        {{ botao.descricao }}
      </a>
    </div>
  </section>
  <section v-if="showResposta">
    <div class="q-my-md flex resposta">
      <a
        href=""
        class="botao-amarelo texto-roxo-escuro text-sm animate-slide-in"
      >
        {{ selected }}
      </a>
    </div>
    <div class="texto-inicial" v-if="startLastTyping">
      <img src="/images/logopicroxo.svg" alt="Logo Foco" class="logo" v-if="!toggle">
      <img src="/images/logomin.svg" alt="Logo Foco" class="logo" v-if="toggle">
      <div>
        <p class="text-white text-sm q-mb-md">
          <TypingEffect
            text="Certo, vamos criar um cronograma personalizado para o <b>TSE Unificado 2024</b>.<br>Para ajustar o plano às suas necessidades, preciso de algumas informações:<br><br>1. Qual o cargo que quer estudar?<br>2. Quantas horas por dia você pode dedicar aos estudos?<br>3. Quantos dias na semana você planeja estudar?<br>4. Você prefere alternar disciplinas ou focar em uma por vez?<br><br>Assim que me passar essas informações, montarei seu cronograma sob medida."
            :speed="30"
          />
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
  opacity: 0;
  transform: translateX(100%);
  transition: all 1s ease-in-out;
}

.botao-amarelo.animate-slide-in {
  opacity: 1;
  transform: translateX(0);
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

.pd-xl {
  padding: 0px 75px;
}

.botao-roxo {
  padding: 15px;
}

.botao-roxo:hover {
  color: var(--amarelo);
  transition: 0.3s ease-in-out;
}

.resposta {
  justify-self: flex-end;
}
</style>
