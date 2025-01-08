<script setup>
import { Apresentacao, Menu, Sidebar, Chat, Metricas, Cronograma, SaudeMental } from "src/router";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/style.css";
import { computed } from "vue";
import { useMenuStore } from "src/stores/menu-store.js";
import { useQuasar } from "quasar";

const $q = useQuasar();
const toggle = computed(() => { return $q.dark.isActive; });

const menuStore = useMenuStore();
const menuAtual = computed(() => { return menuStore.menuAtual; });

</script>

<template>
<section class="pagina-estrutura">
  <div class="flex justify-between">
    <Sidebar/>
    <img src="/icons/duvida.svg" alt="Ajuda" class="ajuda-mob" v-if="toggle">
    <img src="/icons/duvidaroxo.svg" alt="Ajuda" class="ajuda-mob" v-if="!toggle">
  </div>
  <section class="IA">
    <span class="span"></span>
    <Apresentacao
      v-if="menuAtual === 4"
    />
    <PerfectScrollbar v-if="menuAtual !== 4">
      <Chat
      v-if="menuAtual === 1"
      />
      <SaudeMental
      v-if="menuAtual === 5"
      />
      <Metricas
      v-if="menuAtual === 3"
      />
      <Cronograma
      v-if="menuAtual === 2"
      />
    </PerfectScrollbar>
    <Menu/>
  </section>
  <img src="/icons/duvida.svg" alt="Ajuda" class="ajuda floating-button" v-if="toggle">
  <img src="/icons/duvidaroxo.svg" alt="Ajuda" class="ajuda floating-button" v-if="!toggle">
</section>
</template>

<style scoped>
.pagina-estrutura {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 95vh;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.IA {
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ajuda {
  align-self: flex-end;
  cursor: pointer;
}

.ps {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0px;
}

.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}

@media screen and (max-width:1336px) {
  .IA {
    width: 700px;
  }
}

@media screen and (min-width:1006px) {
  .ajuda-mob {
    display: none;
  }
}

@media screen and (max-width:1006px) {
  .pagina-estrutura {
    flex-direction: column;
    padding-top: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    gap: 5px;
    height: 100vh;
    justify-content: baseline;
  }
  .IA {
    width: 100%;
    height: 90vh;
  }
  .ajuda {
    display: none;
  }
  .ps{
    height: 70vh;
  }
  .span {
    display: none;
  }
}

@media screen and (max-width:1006px) and (max-height:800px) {
  .IA {
    height: 85vh;
  }
  .ps{
    height: 75vh;
  }
}

</style>
