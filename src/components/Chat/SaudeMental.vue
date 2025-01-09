<script setup>
import { ref, onMounted, computed } from "vue";
import { TypingEffect } from "src/router";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });
const botoes = ref([
  {
    img: "/icons/saudemental/1.svg",
    descricao: "Estou sentindo ansiedade e gostaria de dicas para lidar com isso.",
    id: 1
  },
  {
    img: "/icons/saudemental/2.svg",
    descricao: "Preciso de ajuda para lidar com a pressão familiar ou social.",
    id: 2
  },
  {
    img: "/icons/saudemental/3.svg",
    descricao: "Quero saber como me preparar mentalmente para a prova.",
    id: 3
  },
  {
    img: "/icons/saudemental/4.svg",
    descricao: "Não me sinto bem com falhas e quero aprender a superar isso.",
    id: 4
  },
  {
    img: "/icons/saudemental/5.svg",
    descricao: "Quero explorar técnicas para manter a calma e o foco nos estudos.",
    id: 5
  }
]);

const selected = ref(null);
const showBotoes = ref(false);
const showResposta = ref(false);
const showRespostas = ref(false);
onMounted(() => {
  setTimeout(() => {
    showBotoes.value = true;
  }, 13000);
});
function handleClick (botao) {
  selected.value = botao.descricao;
  showResposta.value = true;
  setTimeout(() => {
    showRespostas.value = true;
  }, 8000);
}
</script>

<template>
<section class="container">
  <div class="texto-inicial">
    <img src="/images/logopicroxo.svg" alt="Logo Foco" class="logo" v-if="!toggle">
    <img src="/images/logomin.svg" alt="Logo Foco" class="logo" v-if="toggle">
    <div>
      <h2 class="text-white text-sm q-mb-lg">
        <TypingEffect
          text="<b>Olá, Mariana! Que bom ter você aqui na nossa área de saúde mental!</b><br>Estudar para concursos pode ser desafiador, mas não se preocupe, estou aqui<br>para ajudar você a cuidar da sua saúde mental enquanto foca nos seus objetivos.<br><br>Antes de começarmos, me conta: como você está se sentindo hoje? Ou, se preferir, escolha uma das opções abaixo para conversarmos sobre o que mais te preocupa no momento:"
          :speed="30"
        />
      </h2>
    </div>
  </div>
  <section v-if="showBotoes">
    <div class="flex flex-column lista-botoes pd-xl">
      <div class="texto-inicial relative"
      v-for="botao in botoes"
      :key="botao.descricao">
        <div class="flex-row">
          <span class="texto-roxo semi-bold text-sm cursor-pointer numero" :class="{numeroroxo:!toggle}">
            {{ botao.id }}
          </span>
          <p
            class="texto-amarelo semi-bold text-sm cursor-pointer teste q-mb-sm"
            @click="handleClick(botao)"
            :class="{textoroxo:!toggle}"
          >
            {{ botao.descricao }}
          </p>
        </div>
      </div>
      <div class="texto-inicial">
        <span></span>
        <p class="text-white text-sm q-pr-md" :class="{textoroxo:!toggle}">
          Clique em uma das opções ou, se quiser, pode me contar em suas próprias palavras <b>como posso ajudar você.</b>
        </p>
      </div>
    </div>
  </section>
  <section v-if="showResposta">
    <div class="q-my-lg flex resposta">
      <span></span>
      <a
        class="botao-amarelo texto-roxo-escuro text-sm animate-slide-in"
      >
        {{ selected }}
      </a>
    </div>
    <div class="texto-inicial">
      <img src="/images/logopicroxo.svg" alt="Logo Foco" class="logo" v-if="!toggle">
      <img src="/images/logomin.svg" alt="Logo Foco" class="logo" v-if="toggle">
      <div>
        <p class="text-white text-sm">
          <TypingEffect
            text="<b>Entendido!</b> Preparar-se mentalmente para uma prova é tão importante<br>quanto revisar o conteúdo. <b>Vamos juntos trabalhar nisso!</b> Aqui estão<br>algumas dicas que podem ajudar você a estar emocionalmente<br>pronta no grande dia:"
            :speed="30"
          />
        </p>
      </div>
    </div>
    <div class="flex-column flex pd-xlg" v-if="showRespostas">
      <div class="flex-row  align-center q-py-md">
        <span class="texto-roxo semi-bold text-sm cursor-pointer numero2" :class="{numeroroxo2:!toggle}">
          1
        </span>
        <p class="text-white text-sm" :class="{textoroxoescuro:!toggle}">
        <b>Crie uma rotina de relaxamento:</b> Na noite anterior à prova, tente<br>dormir bem e evitar conteúdos estressantes. No dia da prova,<br>pratique técnicas de respiração profunda para acalmar a mente.
      </p>
      </div>
      <div class="flex-row align-center q-py-md" >
        <span class="texto-roxo semi-bold text-sm cursor-pointer numero2" :class="{numeroroxo2:!toggle}">
          2
        </span>
        <p class="text-white text-sm" :class="{textoroxoescuro:!toggle}">
        <b :class="{textoroxoescuro:!toggle}">Visualize o sucesso:</b> Tire alguns minutos para fechar os olhos e<br>se imaginar na sala da prova, calma, confiante e respondendo<br>as questões com clareza. Essa prática pode ajudar a reduzir a<br>ansiedade.
        </p>
      </div>
      <div class="flex-row align-center q-py-md" >
        <span class="texto-roxo semi-bold text-sm cursor-pointer numero2" :class="{numeroroxo2:!toggle}">
          3
        </span>
        <p class="text-white text-sm" :class="{textoroxoescuro:!toggle}">
        <b>Divida suas preocupações:</b> Se estiver nervosa, escreva seus<br>medos em um papel e reflita sobre o que você já fez para se<br>preparar. Isso ajuda a focar no positivo e reduzir<br>pensamentos negativos.
      </p>
      </div>
      <div class="flex-row align-center q-py-md">
        <span class="texto-roxo semi-bold text-sm cursor-pointer numero2" :class="{numeroroxo2:!toggle}">
          4
        </span>
        <p class="text-white text-sm" :class="{textoroxoescuro:!toggle}">
        <b>Confie na sua preparação:</b> Lembre-se do esforço e dedicação<br>que você investiu. Você está mais preparada do que imagina!
      </p>
      </div>
    </div>
    <span></span>
    <p class="text-sm q-mt-sm" v-if="showRespostas">
      Se quiser, posso sugerir exercícios de respiração ou técnicas específicas<br>de <i>mindfulness</i> para ajudar você a relaxar antes e durante a prova.<br><b>Qual dessas opções parece interessante para você?</b>
    </p>
  </section>
</section>
</template>

<style scoped>
.lista-botoes {
  gap: 20px;
}

.container {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
}

.logo {
  align-self: flex-start;
  width: 40px;
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
  display: flex;
  gap: 10px;
}

.justify-center {
  align-self: center;
  padding: 20px;
}

.botao-roxo {
  padding: 15px;
}

.botao-roxo:hover {
  color: var(--amarelo);
  transition: 0.3s ease-in-out;
}

.semibold {
  font-weight: 500;
}

.flex-column {
  flex-direction: column;
}

.numero {
  width: 28px;
  height: 28px;
  background-color: var(--amarelo);
  border-radius: 50%;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
  padding: 2px;
}

.numero2 {
  width: 28px;
  height: 28px;
  background-color: var(--roxo-medio);
  border-radius: 50%;
  text-align: center;
  margin-right: 30px;
  padding: 2px;
  color: var(--amarelo);
}

.numeroroxo {
  background-color: var(--roxo-medio) !important;
  color: var(--amarelo) !important;
}

.numeroroxo2 {
  background-color: var(--roxo-escuro) !important;
  color: #ffffff !important;
}

.semi-bold {
  font-weight: 700;
}

.flex-row {
  display: flex;
}

.align-center {
  align-items: center;
}

.textoroxo {
  color: var(--roxo-medio) !important;
}

.textoroxoescuro {
  color: var(--roxo-escuro) !important;
}

.resposta {
  display: flex;
  justify-content: space-between;
}

.resposta a {
  text-align: left;
  max-width: 600px;
}

.botao-amarelo {
  word-break: break-word;
  white-space: normal;
  padding: 15px 10px;
}

.pd-xl {
  padding-left: 40px;
}

.pd-xlg {
  padding-left: 50px;
}

@media screen and (max-width:1440px) {
  .text-xl {
    font-size: 3.75rem;
  }
  .text-xlgv {
    font-size: 2.5rem;
  }
  .text-md {
    font-size: 1.25rem;
  }
  .text-sm {
    font-size: 1rem;
  }
  .numero, .numero2 {
    padding: 4px;
  }
}
</style>
