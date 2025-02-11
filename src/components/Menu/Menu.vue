<script setup>
import { ref, computed } from "vue";

import { useMenuStore } from "src/stores/menu-store.js";
import { useQuasar } from "quasar";

const menuStore = useMenuStore();

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });

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
    name: "Cronograma",
    id: 2
  },
  {
    icon: "/icons/menu/graph.svg",
    ativo: false,
    name: "Estatísticas",
    id: 3
  },
  {
    icon: "/icons/menu/file.svg",
    ativo: false,
    name: "Anexos",
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

</script>

<template>
  <div class="menu-input" :class="{ borda: !toggle && menuAtual === 1 || !toggle && menuAtual === 5 }">
    <div v-if="menuAtual === 1 || menuAtual === 5" class="chat-input-container">
      <div class="chat-input">
        <input v-model="mensagem" type="text" placeholder="Texto aqui..." />
        <q-btn flat round color="yellow" class="send-btn" size="sm">
          <img src="/icons/arrow.svg" alt="Enviar" style="width: 20px; height: 20px;" />
        </q-btn>
      </div>
    </div>
    <section class="menu">
      <div v-for="menu in menus"
      :key="menu.id" class="text-center">
        <q-btn
          size="lg"
          flat
          round
          @click="ativaMenu(menu)"
          class="menu-btn"
          :title="menu.name"
        >
          <img
            :src="menu.icon"
            :class="{ 'icon-ativo': menu.ativo }"
            :alt="menu.name"
          />
        </q-btn>
        <p class="texto-menu" :class="{'texto-ativo' : menu.ativo}">
          {{ menu.name }}
        </p>
      </div>
      <div class="logo-separator">
        <q-separator vertical color="positive" class="separator"></q-separator>
        <img src="/icons/menu/logopic.svg" alt="Logo Foco" class="logo" />
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
  gap: 30px;
  padding: 10px 30px;
  border-radius: 35px;
  width: 600px;
  justify-content: center;
  margin: 0 auto;
}

.texto-ativo {
  color: var(--amarelo);
  font-weight: 500;
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

img {
  width: 39px;
  height: 39px;
}

.menu-input {
  border-radius: 40px;
  width: 600px;
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

.borda {
  border: 1px solid black;
  border-radius: 36px;
  padding-top: 5px;
}

.logo-separator {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

.texto-menu {
  font-size: 0.8rem;
  text-align: center;
}

@media screen and (max-width:1280px) {
  .menu-input {
    width: 600px;
  }
}

@media screen and (max-width:1006px) {
  .logo {
    display:none
  }
  .texto-menu {
    display: none;
  }
}

@media screen and (max-width:660px) {
  .menu  {
    width: 100%;
    border-radius: 30px;
  }
  .menu-input {
    width: 100%;
  }
  .separator {
    display: none;
  }
}

@media screen and (max-width:600px) {
  .menu  {
    gap: 20px;
    padding: 10px 15px;
  }
  .logo-separator {
    gap: 20px;
  }
}

@media screen and (max-width:500px) {
  .menu  {
    gap: 10px;
    padding: 5px 10px;
  }
  img {
    height: 30px;
    width: 30px
  }
}

@media screen and (max-width:440px) {
  .menu  {
    gap: 10px;
    padding: 5px 5px;
  }
  .separator {
    display: none;
  }
  .logo {
    align-items: center;
  }
}

@media screen and (max-width:400px) {
  .menu {
    gap: 0px;
  }
  img {
    height: 25px;
    width: 25px;
  }
}
@media screen and (max-width: 360px) {
  .logo {
    display: none;
  }
}
</style>
