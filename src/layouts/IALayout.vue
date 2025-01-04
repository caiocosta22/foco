<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });
</script>

<template>
<q-layout view="hHh lpR fff">
  <q-page-container class="pagina"
  :class="{
    dark:toggle,
    light:!toggle
  }">
    <router-view/>
  </q-page-container>
</q-layout>
</template>

<style scoped>
.pagina {
  height: 100vh;
}

.dark {
  background-color: var(--roxo-escuro);
}

.light {
  background-color: #ffffff;
}
</style>
