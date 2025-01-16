<script setup>
import { watch, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const drawer = ref(false);

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
  <ul class="nav-desktop">
    <li v-for="menu in menus" :key="menu"
    @click="router.push(menu.link)"
    :class="{ativo: menu.ativo}">
      <p class="text-md">
        {{ menu.name }}
      </p>
    </li>
  </ul>
  <q-icon
  name="fa-solid fa-bars"
  alt="Menu Lateral"
  @click="drawer = !drawer"
  color="secondary"
  class="icon-mobile cursor-pointer"
  size="md"/>
</section>
<q-drawer
v-model="drawer"
:width="240"
side="right"
behavior="mobile"
class="bg-primary">
  <div class="drawer">
    <q-icon
    name="fa-solid fa-bars"
    alt="Menu Lateral"
    @click="drawer = !drawer"
    color="secondary"
    class="icon-mobile cursor-pointer"
    size="md"/>
    <ul class="flex column">
      <li v-for="menu in menus" :key="menu"
      @click="router.push(menu.link)"
      :class="{ativo: menu.ativo}">
        <p class="text-sm botao-amarelo texto-roxo text-semibold">
          {{ menu.name }}
        </p>
      </li>
    </ul>
    <img src="/icons/sidebar/logo.svg" class="logo-foco" alt="Logo Foco">
  </div>
</q-drawer>
</template>

<style scoped>
.drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 40px;
}

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

@media screen and (max-width:1006px) {
  .nav-desktop{
    display: none;
  }
  .header {
    padding: 20px 40px;
  }
}

@media screen and (min-width:1006px) {
  .icon-mobile {
    display:none
  }
}
</style>
