<script setup>
import { Apresentacao, Menu, Sidebar, Chat, Metricas, Cronograma } from "src/router";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";
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
    <PerfectScrollbar>
      <Apresentacao
      v-if="menuAtual === 4"
      />
      <Chat
      v-if="menuAtual === 1"
      />
      <Metricas
      v-if="menuAtual === 3"
      />
      <Cronograma
      v-if="menuAtual === 2"
      />
    </PerfectScrollbar>
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

.ps {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0px
}
</style>
