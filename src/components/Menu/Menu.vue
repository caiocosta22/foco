<script setup>
import { ref } from "vue";

const menus = ref([
  {
    icon: "/icons/menu/chat.svg",
    ativo: true,
    name: "Chat"
  },
  {
    icon: "/icons/menu/calendar.svg",
    ativo: true,
    name: "Calendário"
  },
  {
    icon: "/icons/menu/graph.svg",
    ativo: true,
    name: "Métricas"
  },
  {
    icon: "/icons/menu/file.svg",
    ativo: true,
    name: "Arquivo"
  },
  {
    icon: "/icons/menu/logopic.svg",
    ativo: true,
    name: "Logo Foco"
  }
]);
</script>

<template>
<section class="menu">
  <a href="" v-for="menu in menus"
  :key="menu">
    <img :src="menu.icon" alt="menu.name">
  </a>
</section>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--roxo-medio);
  padding: 20px 40px;
  border-radius: 40px;
}

a {
  cursor:pointer
}
</style>
