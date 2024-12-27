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
  }
]);
</script>

<template>
<section class="menu">
  <q-btn size="lg" round flat v-for="menu in menus"
  :key="menu">
    <img :src="menu.icon" alt="menu.name"
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
  width: 90%;
  justify-content: center;
}

a {
  cursor:pointer
}

.flex {
  gap: 35px;
}
</style>
