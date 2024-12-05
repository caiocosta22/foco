<script setup>
import { ref } from "vue";

const menus = ref([
  {
    name: "Serviço"
  },
  {
    name: "Blog"
  },
  {
    name: "Sobre"
  },
  {
    name: "Contato"
  }
]);
</script>

<template>
<section class="header">
  <img src="/images/logo.svg" alt="Logo Foco">
  <ul>
    <li v-for="menu in menus" :key="menu">
      <p class="text-md">
        {{ menu.name }}
      </p>
    </li>
  </ul>
</section>
</template>

<style scoped>
.header {
  padding: 20px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--roxo-medio);
}

ul {
  display: flex;
  gap: 40px;
  text-align: center;
}

li {
  cursor: pointer;
}

li:hover {
  color: var(--amarelo);
  transition: ease-in-out 0.3s;
}
</style>
