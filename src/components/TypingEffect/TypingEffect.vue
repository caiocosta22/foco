<template>
  <div class="typing-container">
    <p class="typed-text" v-html="displayedHTML"></p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true // Texto com HTML
    },
    speed: {
      type: Number,
      default: 100 // Velocidade de digitação em milissegundos
    }
  },
  data () {
    return {
      displayedHTML: "", // Texto processado
      currentIndex: 0,
      isTag: false // Para rastrear quando está dentro de uma tag HTML
    };
  },
  mounted () {
    this.startTyping();
  },
  methods: {
    startTyping () {
      const interval = setInterval(() => {
        if (this.currentIndex < this.text.length) {
          const currentChar = this.text[this.currentIndex];

          // Identificar abertura ou fechamento de tags HTML
          if (currentChar === "<") this.isTag = true;
          if (this.isTag) {
            this.displayedHTML += currentChar;
            if (currentChar === ">") this.isTag = false;
          } else {
            // Adicionar o caractere normalmente se não for uma tag
            this.displayedHTML += currentChar;
          }
          this.currentIndex++;
        } else {
          clearInterval(interval); // Finaliza quando o texto está completo
        }
      }, this.speed);
    }
  }
};
</script>

<style scoped>
.typing-container {
  white-space: pre-wrap; /* Permite que <br> funcione corretamente */
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
