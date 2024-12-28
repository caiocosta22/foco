<script setup>
import { Apresentacao, Menu, Sidebar } from "src/router";
</script>

<template>
<section class="pagina-estrutura">
  <Sidebar/>
  <section class="IA">
    <span></span>
    <Apresentacao/>
    <Menu/>
  </section>
  <img src="/icons/duvida.svg" alt="Ajuda" class="ajuda">
</section>
</template>

<style scoped>
.pagina-estrutura {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
}

.IA {
  height: 90vh;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ajuda {
  align-self: flex-end;
  cursor: pointer;
}
</style>
