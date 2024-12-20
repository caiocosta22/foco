<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menus = ref([
  {
    name: "Serviço",
    link: "/servico"
  },
  {
    name: "Blog",
    link: "/blog"
  },
  {
    name: "Sobre",
    link: "/sobre"
  },
  {
    name: "Contato",
    link: "/contato"
  }
]);

</script>

<template>
<section class="header">
  <img src="/images/logo.svg" alt="Logo Foco"
  @click="router.push('/')"
  class="cursor-pointer">
  <ul>
    <li v-for="menu in menus" :key="menu"
    @click="router.push(menu.link)">
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
