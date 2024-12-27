<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<template>
<img src="/icons/sidebar.svg" alt="Menu Lateral" @click="drawer = !drawer">
<q-drawer behavior="mobile"
v-model="drawer"
:width="220"
side="left"
class="bg-primary">
  <span><b>teste</b></span>
</q-drawer>
</template>

<style scoped>
.border-radius {
  border-radius: 60px;
}
</style>
