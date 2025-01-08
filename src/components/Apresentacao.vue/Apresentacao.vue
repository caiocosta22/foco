<script setup>
import { useMenuStore } from "src/stores/menu-store.js";
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });
const menuStore = useMenuStore();

const ativaMenu = (id) => {
  menuStore.setMenuAtual(id);
};
</script>

<template>
<section>
  <h1 class="text-xl ">
    Olá, <b :class="{textoroxo:!toggle}"> Mariana</b>
  </h1>
  <h2 class="text-xlgv text-white" :class="{textoroxoescuro: !toggle}">
    Estou aqui para te ajudar <br>a focar na sua <b :class="{textoroxo:!toggle}">aprovação.</b>
  </h2>
  <p class="text-md text-white" :class="{textoroxoescuro: !toggle}">
    O primeiro passo é simples: basta <b :class="{textoroxo:!toggle}">arrastar o arquivo</b> do <br> edital ou <b :class="{textoroxo:!toggle}">colar o link</b> aqui e eu organizo tudo para você<br class="mobile"> focar<br class="desktop"> no que interessa.
  </p>
  <div class="place">
    <div class="flex q-mt-xs q-mr-sm"
    @click="ativaMenu(1)">
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
    <a class="botao-amarelo text-md texto-roxo-escuro" :class="{textoamarelo: !toggle, botaoroxo: !toggle}"
    @click="ativaMenu(1)">
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
  text-align: left;
  width: 100%;
  margin: 0 auto;
  align-items: start;
  padding-left: 70px;
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

@media screen and (max-width:1336px) {
  .text-xl {
    font-size: 3.75rem;
  }
  .text-xlgv {
    font-size: 2.5rem;
    line-height: 1.0;
  }
  .text-md {
    font-size: 1.25rem;
  }
}

@media screen and (max-width:1006px) {
  section {
    align-items: center;
    text-align: center;
    padding-left: 0px;
  }
  .place {
    justify-content: center;
  }
  .desktop {
    display: none;
  }
}

@media screen and (min-width:1006px) {
  .mobile {
    display: none;
  }
}

@media screen and (max-width:1006px) {
  .place {
    gap: 20px;
  }
}

@media screen and (max-width:640px) {
  br {
    display: none;
  }
}

@media screen and (max-width:520px) {
  .text-xl {
    font-size: 3.25rem;
  }
  .text-xlgv {
    font-size: 2.25rem;
    line-height: 1.0;
  }
  .text-md {
    font-size: 1rem;
  }
}

@media screen and (max-width:480px) {
  .place {
    flex-direction: column;
    gap: 10px;
  }
}

@media screen and (max-width:400px) {
  .text-xl {
    font-size: 3rem;
  }
  .text-xlgv {
    font-size: 1.75rem;
    line-height: 1.0;
  }
}
</style>
