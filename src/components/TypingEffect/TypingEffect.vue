<template>
  <div class="typing-container">
    <p class="typed-text" :class="{textoroxo: !toggle}"
    v-html="displayedHTML"></p>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed, onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });

const props = defineProps({
  text: {
    type: String,
    required: true // Texto com HTML
  },
  speed: {
    type: Number,
    default: 100 // Velocidade de digitação em milissegundos
  }
});

const displayedHTML = ref(""); // Texto processado
const currentIndex = ref(0);
const isTag = ref(false); // Para rastrear quando está dentro de uma tag HTML

const startTyping = () => {
  const interval = setInterval(() => {
    if (currentIndex.value < props.text.length) {
      const currentChar = props.text[currentIndex.value];

      // Identificar abertura ou fechamento de tags HTML
      if (currentChar === "<") isTag.value = true;
      if (isTag.value) {
        displayedHTML.value += currentChar;
        if (currentChar === ">") isTag.value = false;
      } else {
        // Adicionar o caractere normalmente se não for uma tag
        displayedHTML.value += currentChar;
      }
      currentIndex.value++;
    } else {
      clearInterval(interval); // Finaliza quando o texto está completo
    }
  }, props.speed);
};

onMounted(() => {
  startTyping();
});
</script>

<style scoped>
.typing-container {
  white-space: pre-wrap; /* Permite que <br> funcione corretamente */
}

.textoroxo{
  color: var(--roxo-escuro);
}

/* .typed-text {
  border-right: 2px solid white;
  animation: blink 0.6s step-end infinite; /* Piscar do cursor *}*/

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
