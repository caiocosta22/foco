<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useMenuStore } from "src/stores/menu-store.js";
import { useQuasar } from "quasar";

const $q = useQuasar();
const toggle = ref($q.dark.isActive);

const switchTeme = () => {
  $q.dark.toggle();
};

const menuStore = useMenuStore();
const itemativo = ref(true);
const drawer = ref(true);
const isMobile = ref(window.innerWidth <= 1008);

const itens = ref([
  {
    icon: "/icons/sidebar/brain.svg",
    title: "Saúde Mental",
    id: 5
  },
  {
    icon: "/icons/sidebar/book.svg",
    title: "Tutorial"
  },
  {
    icon: "/icons/sidebar/upgrade.svg",
    title: "Atualize o plano",
    desc: "Questões e correções...",
    yellow: true
  }
]);

const ativaMenu = (objeto) => {
  if (objeto.title === "Saúde Mental") {
    menuStore.setMenuAtual(objeto.id);
  }
};

const updateMobileState = () => {
  isMobile.value = window.innerWidth <= 1008;
};

onMounted(() => {
  window.addEventListener("resize", updateMobileState);
  updateMobileState();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMobileState);
});
</script>

<template>
<img src="/icons/sidebar.svg" alt="Menu Lateral" @click="drawer = !drawer"
v-show="!drawer"
v-if="toggle"
class="icon-sidebar">
<img src="/icons/sidebar/sidebaroxo.svg" alt="Menu Lateral" @click="drawer = !drawer"
v-show="!drawer"
v-if="!toggle"
class="icon-sidebar">
<q-drawer
v-model="drawer"
:width="300"
side="left"
:style="isMobile ? 'border-radius: 0px;' : 'border-radius: 0px 60px 60px 0px;'"
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
        @click="switchTeme()"
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
        <h3 class="avatar-titulo texto-amarelo">Mariana</h3>
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
          <ul class="itens text-white" v-if="itemativo">
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
      @click="ativaMenu(item)"
      >
        <img :src="item.icon" style="width: 30px; height: 30px;" :class="{justifycenter:item.desc}">
        <div>
          <b>
            <h3 class="text-md text-white" :class="{yellow:item.yellow}" >
              {{ item.title }}
            </h3>
          </b>
          <p v-if="item.desc" class="text-white">
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
  padding: 40px 20px;
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

.avatar-titulo {
  font-size: 1.75rem;
}

.flex {
  gap: 15px;
}

.align-center {
  align-items: center;
}

.yellow {
  color: var(--amarelo) !important;
}

.justify-self-center {
  align-self: center;
  max-width: 200px;
}

.justifycenter {
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

.arrow {
  transition: transform 0.3s ease-in-out;
  transform: rotate(-90deg);
}

.arrow.rotated {
  transform: rotate(0deg);
}

  .text-xl {
    font-size: 3.75rem;
  }
  .text-xlgv {
    font-size: 2.5rem;
    line-height: 1.0;
  }
  .text-md {
    font-size: 1.25rem;
  }

@media (max-height: 769px) {
  .sidebar-interno {
    padding: 25px 40px;
  }
  .lista {
    gap: 20px;
  }
  .text-md {
    font-size: 1.25rem;
  }
  .text-sm {
    font-size: 1rem;
  }
}

@media (max-height: 600px) {
  .lista {
    gap: 15px;
  }
}
</style>
