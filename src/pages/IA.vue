<script setup>
import { Apresentacao, Menu, Sidebar, Chat, Metricas, Cronograma, SaudeMental } from "src/router";
import { computed } from "vue";
import { useMenuStore } from "src/stores/menu-store.js";
import { useQuasar } from "quasar";

const $q = useQuasar();
const toggle = computed(() => $q.dark.isActive);

const menuStore = useMenuStore();
const menuAtual = computed(() => menuStore.menuAtual);
</script>

<template>
  <div class="layout">
    <div class="iconesmob">
      <Sidebar />
      <img src="/icons/duvida.svg" class="ajudamob cursor-pointer" alt="ajuda" v-if="toggle">
      <img src="/icons/duvidaroxo.svg" class="ajudamob cursor-pointer" alt="ajuda" v-if="!toggle">
    </div>
    <div class="content">
      <Apresentacao v-if="menuAtual === 4" />
      <div
      v-if="menuAtual !== 4" class="scrollable-content"
      >
        <Chat v-if="menuAtual === 1" />
        <SaudeMental v-if="menuAtual === 5" />
        <Metricas v-if="menuAtual === 3" />
        <Cronograma v-if="menuAtual === 2" />
      </div>
      <Menu />
    </div>
    <img src="/icons/duvida.svg" class="floating-button cursor-pointer" alt="ajuda" v-if="toggle">
    <img src="/icons/duvidaroxo.svg" class="floating-button cursor-pointer" alt="ajuda" v-if="!toggle">
  </div>
</template>
<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  padding: 40px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px;
  position: relative;
}

.floating-button {
  position :fixed;
  bottom: 40px;
  right: 40px;
  z-index:999;
}

.scrollable-content {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  border-radius: 10px;
  width: 900px;
  margin: 0 auto;
  margin-bottom: 10px;
}

.scrollable-content::-webkit-scrollbar {
  width: 8px;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background-color: var(--roxo-medio);
  border-radius: 10px;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--roxo-claro);
}

.scrollable-content::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 10px;
}

@media screen and (max-width:1280px) {
  .scrollable-content {
    width: 700px;
}
}

@media screen and (max-width:1006px) {
  .floating-button {
    display: none;
  }
  .layout {
    flex-direction: column;
  }
  .iconesmob {
    display: flex;
    justify-content: space-between;
  }
  .content {
    padding: 0px;
  }
}

@media screen and (min-width:1006px) {
  .ajudamob {
    display: none;
  }
}
</style>
