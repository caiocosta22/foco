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
  <div class="place">
    <div class="flex q-gutter-md">
      <img src="/icons/plus.svg" class="cursor-pointer"/>
      <p class="text-md texto-amarelo">
        Arraste aqui
      </p>
    </div>
    <p class="text-md text-white">
      ou
    </p>
    <a href="" class="botao-amarelo text-md">Cole o link aqui</a>
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
}

h1 {
  line-height: 1.0;
}

p {
  line-height: 1.2;
}

.place {
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  gap: 80px;
}

.flex {
  align-items: center;
}

</style>
