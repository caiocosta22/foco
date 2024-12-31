<script setup>
import { ref } from "vue";

import { useMenuStore } from "src/stores/menu-store.js";

const menuStore = useMenuStore();

const menus = ref([
  {
    icon: "/icons/menu/chat.svg",
    ativo: false,
    name: "Chat",
    id: 1
  },
  {
    icon: "/icons/menu/calendar.svg",
    ativo: false,
    name: "Calendário",
    id: 2
  },
  {
    icon: "/icons/menu/graph.svg",
    ativo: false,
    name: "Métricas",
    id: 3
  },
  {
    icon: "/icons/menu/file.svg",
    ativo: false,
    name: "Arquivo",
    id: 4
  }
]);

const ativaMenu = (objeto) => {
  menus.value.forEach((menu) => {
    menu.name !== objeto.name ? menu.ativo = false : menu.ativo = true;
    menuStore.setMenuAtual(objeto.id);
  });
};
</script>

<template>
<section class="menu">
  <q-btn size="lg" round flat v-for="menu in menus"
    :key="menu.id"
    @click="ativaMenu(menu)"
    class="menu-btn"
  >
    <img :src="menu.icon"
         :class="{ 'icon-ativo': menu.ativo }"
         alt="menu.name"
         style="width: 39px; height: 39px;">
  </q-btn>
  <div class="flex">
    <q-separator vertical></q-separator>
    <img src="/icons/menu/logopic.svg" alt="Logo Foco" class="logo">
  </div>
</section>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--roxo-medio);
  gap: 80px;
  padding: 10px 30px;
  border-radius: 40px;
  width: 769px;
  justify-content: center;
  margin: 0 auto;
}

.menu-btn img {
  transition: filter 0.3s ease-in-out;
}

.menu-btn img.icon-ativo {
  filter: brightness(0) saturate(100%) invert(64%) sepia(92%) saturate(547%) hue-rotate(3deg) brightness(100%) contrast(100%);
}

a {
  cursor: pointer;
}

.flex {
  gap: 35px;
}
</style>
