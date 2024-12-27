<script setup>
import { IconSet } from "quasar";
import { ref } from "vue";

const toggle = ref(false);

const drawer = ref(false);
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
        <h3 class="text-lg texto-amarelo">Mariana</h3>
        <p class="text-xs text-white">Plano Free</p>
      </div>
    </div>
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
  gap: 40px;
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
</style>
