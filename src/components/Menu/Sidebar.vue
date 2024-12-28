<script setup>
import { ref } from "vue";

const toggle = ref(false);
const itemativo = ref(true);
const drawer = ref(false);

const itens = ref([
  {
    icon: "/icons/sidebar/brain.svg",
    title: "Saúde Mental"
  },
  {
    icon: "/icons/sidebar/book.svg",
    title: "Tutorial"
  },
  {
    icon: "/icons/sidebar/upgrade.svg",
    title: "Atualize o plano",
    desc: "Questões e correções ilimitadas",
    yellow: true
  }
]);
</script>

<template>
<img src="/icons/sidebar.svg" alt="Menu Lateral" @click="drawer = !drawer">
<q-drawer behavior="mobile"
v-model="drawer"
:width="350"
side="left"
class="bg-primary">
  <div class="sidebar-interno">
    <div class="flex justify-between">
      <div class="icons">
        <q-icon
        name="fa-solid fa-sun"
        color="yellow"
        />
        <q-toggle
        v-model="toggle"
        color="yellow"
        />
        <q-icon
        name="fa-solid fa-moon"
        color="yellow"
        />
      </div>
      <img src="/icons/sidebar.svg" alt="Menu Lateral" @click="drawer = !drawer">
    </div>
    <div class="flex align-center">
      <q-avatar size="85px">
      <img src="/images/sidebar.png" alt="Sua Foto">
      </q-avatar>
      <div>
        <h3 class="text-md texto-amarelo">Mariana</h3>
        <p class="text-xs text-white">Plano Free</p>
      </div>
    </div>
    <div class="lista">
      <div>
        <div class="flex align-center cursor-pointer"
        @click="itemativo = !itemativo">
          <img src="/icons/sidebar/edital.svg" alt="Icone Edital">
          <h3 class="text-md text-white">Meus editais</h3>
          <img src="/icons/sidebar/downarrow.svg" alt="Icone seta para baixo" class="q-mt-sm arrow"
          :class="{ rotated: itemativo }">
        </div>
        <transition name="slide">
          <ul class="itens" v-if="itemativo">
            <li class="flex align-center">
              <img src="/icons/sidebar/dot.png" alt=""
              class="q-mt-sm">
              <p class="text-sm">
                TSE Unificado
              </p>
            </li>
            <li class="flex align-center">
              <img src="/icons/sidebar/dot.png" alt=""
              class="q-mt-sm">
              <p class="text-sm">
                UFC | 2024
              </p>
            </li>
            <li class="flex align-center">
              <img src="/icons/sidebar/plus.svg" alt="">
              <p class="text-sm">
                Novo Edital
              </p>
            </li>
          </ul>
      </transition>
      </div>
      <div class="flex align-center cursor-pointer"
      v-for="item in itens" :key="item"
      >
        <img :src="item.icon">
        <div>
          <h3 :class="{yellow:item.yellow}" class="text-md">
            {{ item.title }}
          </h3>
          <p v-if="item.desc">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
    <img src="/icons/sidebar/logo.svg" class="justify-self-center" alt="Logo Foco">
  </div>
</q-drawer>
</template>

<style scoped>
img {
  cursor: pointer;
  align-self: flex-start;
}

.justify-between {
  width: 100%;
}

.sidebar-interno {
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

* {
  line-height: 1.2;
}

h3 {
  font-weight: 500;
}

.flex {
  gap: 15px;
}

.align-center {
  align-items: center;
}

.yellow {
  color: var(--amarelo);
}

.justify-self-center {
  align-self: center;
}

.lista {
  gap: 60px;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;
}

.itens {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 50px;
  padding-top: 10px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
/* Rotação da seta */
.arrow {
  transition: transform 0.3s ease-in-out;
  transform: rotate(-90deg);
}

.arrow.rotated {
  transform: rotate(0deg);
}
</style>
