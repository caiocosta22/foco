<script setup>
import Header from "src/components/Header/Header.vue";
import Footer from "src/components/Footer/Footer.vue";
</script>

<template>
<q-layout class="pagina" view="hHh lpR fff">
  <header>
    <Header/>
  </header>
  <q-page-container class="container">
    <router-view/>
    <Footer/>
  </q-page-container>
</q-layout>
</template>

<style scoped>
</style>
