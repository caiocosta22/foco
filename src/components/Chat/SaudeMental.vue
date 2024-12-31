<script setup>
import { ref, onMounted } from "vue";
import { TypingEffect } from "src/router";

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
    <img src="/images/logomin.svg" alt="Logo Foco" class="logo">
    <div>
      <h2 class="text-white text-sm q-mb-lg">
        <TypingEffect
          text="<b>Olá, Mariana! Que bom ter você aqui na nossa área de saúde mental!</b><br>Estudar para concursos pode ser desafiador, mas não se preocupe, estou aqui<br>para ajudar você a cuidar da sua saúde mental enquanto foca nos seus objetivos.<br><br>Antes de começarmos, me conta: como você está se sentindo hoje? Ou, se preferir, escolha uma das opções abaixo para conversarmos sobre o que mais te preocupa no momento:"
          :speed="30"
        />
      </h2>
    </div>
  </div>
  <section class="pd-xl" v-if="showBotoes">
    <div class="flex flex-column">
      <div class="texto-inicial relative"
      v-for="botao in botoes"
      :key="botao.descricao">
        <span></span>
        <div class="flex">
          <span class="texto-roxo semi-bold text-sm cursor-pointer numero">
            {{ botao.id }}
          </span>
          <p
            class="texto-amarelo semi-bold text-sm cursor-pointer itens"
            @click="handleClick(botao)"
          >
            {{ botao.descricao }}
          </p>
        </div>
      </div>
      <div class="texto-inicial">
        <span></span>
        <p class="text-white text-sm">
          Clique em uma das opções ou, se quiser, pode me contar em suas próprias palavras<br><b>como posso ajudar você.</b>
        </p>
      </div>
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
      <img src="/images/logomin.svg" alt="Logo Foco" class="logo">
      <div>
        <p class="text-white text-sm q-mb-md">
          <TypingEffect
            text="<b>Entendido!</b> Preparar-se mentalmente para uma prova é tão importante<br>quanto revisar o conteúdo. <b>Vamos juntos trabalhar nisso!</b> Aqui estão<br>algumas dicas que podem ajudar você a estar emocionalmente<br>pronta no grande dia:"
            :speed="30"
          />
        </p>
      </div>
      <span></span>
      <div class="flex-column flex">
        <p class="text-white text-sm q-mb-md">
          <b>Crie uma rotina de relaxamento:</b> Na noite anterior à prova, tente<br>dormir bem e evitar conteúdos estressantes. No dia da prova,<br>pratique técnicas de respiração profunda para acalmar a mente.
        </p>
        <p class="text-white text-sm q-mb-md">
          <b>Visualize o sucesso:</b> Tire alguns minutos para fechar os olhos e<br>se imaginar na sala da prova, calma, confiante e respondendo<br>as questões com clareza. Essa prática pode ajudar a reduzir a<br>ansiedade.
        </p>
        <p class="text-white text-sm q-mb-md">
          <b>Divida suas preocupações:</b> Se estiver nervosa, escreva seus<br>medos em um papel e reflita sobre o que você já fez para se<br>preparar. Isso ajuda a focar no positivo e reduzir<br>pensamentos negativos.
        </p>
        <p class="text-white text-sm q-mb-md">
          <b>Confie na sua preparação:</b> Lembre-se do esforço e dedicação<br>que você investiu. Você está mais preparada do que imagina!
        </p>
      </div>
      <span></span>
      <p class="text-sm">
          Se quiser, posso sugerir exercícios de respiração ou técnicas específicas<br>de mindfulness para ajudar você a relaxar antes e durante a prova.<br><b>Qual dessas opções parece interessante para você?</b>
        </p>
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
}
</style>
