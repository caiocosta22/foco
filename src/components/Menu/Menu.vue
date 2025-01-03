<script setup>
import { ref, computed } from "vue";

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

const menuAtual = computed(() => { return menuStore.menuAtual; });

const input = ref("");
</script>

<template>
<div class="menu-input">
  <div v-if="menuAtual === 1 || menuAtual === 5" class="chat-input-container">
    <div class="chat-input">
      <input v-model="mensagem" type="text" placeholder="Texto aqui..." />
      <q-btn flat round color="yellow" class="send-btn">
        <img src="/icons/arrow.svg" alt="Enviar" />
      </q-btn>
    </div>
  </div>
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
</div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--roxo-medio);
  gap: 80px;
  padding: 10px 30px;
  border-radius: 35px;
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

.menu-input {
  border-radius: 40px;
  width: 769px;
  margin: 0 auto;
  background-color: #ffffff;
}

.chat-input-container {
  display: flex;
  justify-content: center;
}

.chat-input {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  width: 100%;
  border-radius: 40px;
}

.chat-input input {
  flex: 1;
  border: none;
  background: transparent;
  color: #000000;
  font-size: 16px;
  outline: none;
}

.chat-input input::placeholder {
  color: var(--cinza-claro);
}

.send-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--roxo-medio);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.send-btn img {
  width: 24px;
  height: 24px;
}
</style>
