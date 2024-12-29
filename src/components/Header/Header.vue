<script setup>
import { watch, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const menus = ref([
  {
    name: "Serviço",
    link: "/servico",
    ativo: false
  },
  {
    name: "Blog",
    link: "/blog",
    ativo: false
  },
  {
    name: "Sobre",
    link: "/sobre",
    ativo: false
  },
  {
    name: "Contato",
    link: "/contato",
    ativo: false
  }
]);

const updateMenuState = () => {
  menus.value.forEach((menu) => {
    menu.ativo = menu.link === route.path;
  });
};

watch(
  () => route.path,
  () => {
    updateMenuState();
  },
  { immediate: true }
);
</script>

<template>
<section class="header">
  <img src="/images/logo.svg" alt="Logo Foco"
  @click="router.push('/')"
  class="cursor-pointer">
  <ul>
    <li v-for="menu in menus" :key="menu"
    @click="router.push(menu.link)"
    :class="{ativo: menu.ativo}">
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

.ativo {
  color: var(--amarelo);
}
</style>
