<script setup>
import { Apresentacao, Menu, Sidebar } from "src/router";
</script>

<template>
<section class="IA">
  <Sidebar/>
  <Apresentacao/>
  <Menu/>
</section>
</template>

<style scoped>
.IA {
  height: 90vh;
  width: 45%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
