<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });
const router = useRouter();
</script>

<template>
<section>
  <h1 class="text-xl ">
    Olá, <b :class="{textoroxo:!toggle}"> Mariana</b>
  </h1>
  <h2 class="text-xlgv text-white" :class="{textoroxoescuro: !toggle}">
    Estou aqui para te ajudar<br>a focar na sua <b :class="{textoroxo:!toggle}">aprovação.</b>
  </h2>
  <p class="text-md text-white" :class="{textoroxoescuro: !toggle}">
    O primeiro passo é simples: basta <b :class="{textoroxo:!toggle}">arrastar o arquivo</b> do <br> edital ou <b :class="{textoroxo:!toggle}">colar o link</b> aqui e eu organizo tudo para você focar<br> no que interessa.
  </p>
  <div class="place">
    <div class="flex q-mt-xs">
      <img src="/icons/plus.svg" class="cursor-pointer"
      v-if="!toggle"/>
      <img src="/icons/plusroxo.svg" class="cursor-pointer"
      v-if="toggle"/>
      <p class="text-md texto-amarelo q-ml-sm cursor-pointer" :class="{textoroxo: !toggle}">
        Arraste aqui
      </p>
    </div>
    <p class="text-md text-white" style="font-weight: 600;" :class="{textoroxo: !toggle}">
      ou
    </p>
    <a class="botao-amarelo text-md texto-roxo-escuro" :class="{textoamarelo: !toggle, botaoroxo: !toggle}">
      Cole o link aqui
    </a>
  </div>
</section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: start;
  text-align: left;
}

h1 {
  line-height: 1.0;
  font-weight: 500;
}

b {
  font-weight: 600;
  color: var(--amarelo);
}

p {
  line-height: 1.2;
}

.place {
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  gap: 80px;
}

.flex {
  align-items: center;
}

.botao-amarelo {
  border-radius: 50px;
}

.botaoroxo {
  background-color: var(--roxo-medio) !important;
}

.textoroxo {
  color: var(--roxo-medio) !important;
}

.textoroxoescuro {
  color: var(--roxo-escuro) !important;
}

.textoamarelo {
  color: var(--amarelo) !important;
}

</style>
