<script setup>
</script>

<template>
<section>
  <h1 class="text-xl text-white">
    Olá, <b> Mariana</b>
  </h1>
  <h2 class="text-white text-xlgv">
    Estou aqui para te ajudar<br>a focar na sua <b>aprovação.</b>
  </h2>
  <p class="text-md text-white">
    O primeiro passo é simples: basta <b>arrastar o arquivo</b> do <br> edital ou <b>colar o link</b> aqui e eu organizo tudo para você focar no que interessa.
  </p>
  <div class="flex justify-between">
    <div class="flex">
      <img src="/icons/plus.svg" class="cursor-pointer"/>
      <p class="text-md texto-amarelo">
        Arraste aqui
      </p>
    </div>
    <p class="text-md text-white">
      ou
    </p>
    <a href="" class="botao-amarelo">Cole o link aqui</a>
  </div>
</section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: start;
  text-align: left;
  height: 100%;
  width: 40%;
  margin: 0 auto;

}

* {
  line-height: 1.2;
}

.flex {
  align-items: center;
}

</style>
