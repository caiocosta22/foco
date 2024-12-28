<template>
  <div class="typing-container">
    <p class="typed-text">{{ displayedText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 100 // Velocidade de digitação em milissegundos
    }
  },
  data () {
    return {
      displayedText: "",
      currentIndex: 0
    };
  },
  mounted () {
    this.startTyping();
  },
  methods: {
    startTyping () {
      const interval = setInterval(() => {
        if (this.currentIndex < this.text.length) {
          this.displayedText += this.text[this.currentIndex];
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
  white-space: pre; /* Preserva espaços e quebras de linha */
}

.typed-text {
  border-right: 2px solid white;
  animation: blink 0.6s step-end infinite; /* Piscar do cursor */
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>
