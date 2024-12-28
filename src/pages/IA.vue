<script setup>
import { Apresentacao, Menu, Sidebar, Chat, Metricas, Cronograma } from "src/router";
import { computed } from "vue";
import { useMenuStore } from "src/stores/menu-store.js";

const menuStore = useMenuStore();
const menuAtual = computed(() => { return menuStore.menuAtual; });
</script>

<template>
<section class="pagina-estrutura">
  <Sidebar/>
  <section class="IA">
    <span></span>
    <Apresentacao
    v-if="menuAtual === 0"
    />
    <Chat
    v-if="menuAtual === 1"
    />
    <Metricas
    v-if="menuAtual === 2"
    />
    <Cronograma
    v-if="menuAtual === 3"
    />
    <Menu/>
  </section>
  <img src="/icons/duvida.svg" alt="Ajuda" class="ajuda">
</section>
</template>

<style scoped>
.pagina-estrutura {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
}

.IA {
  height: 90vh;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ajuda {
  align-self: flex-end;
  cursor: pointer;
}
</style>
