<script setup>
import { ref } from "vue";
import { Servicos } from "src/router";
const textoPrincipal = ref("FOCO é a sua plataforma de <b>inteligência artificial</b> criada para transformar a maneira como<br>você se prepara para concursos públicos. Com uma abordagem inovadora e acessível,<br> <b>FOCO simplifica cada etapa</b> do processo de estudos.");
</script>

<template>
<section class="chamada">
  <div class="flex-center bg-amarelo">
    <img src="/images/servico/logopic.png
    " alt="logo foco">
    <h1 class="texto-roxo text-xlg">
      Mais do que estudo, <br> FOCO é sua estratégia <br>para conquistar a aprovação.
    </h1>
  </div>
  <div class="flex-center">
    <img src="/icons/logopic.svg
    " alt="logo foco">
    <p v-html="textoPrincipal"
    class="texto-branco text-md">
    </p>
  </div>
</section>
<section class="servicos">
  <h1 class="text-xlg texto-roxo">
    Confira os nossos serviços:
  </h1>
  <Servicos/>
</section>
</template>

<style scoped>
.flex-center {
  display:flex;
  gap: 40px;
  padding: 60px 0px;
  margin: 0 auto;
  justify-content: center;
  align-items:center;
  text-align:left;
}

.bg-amarelo {
  background-color:var(--amarelo);
  border-radius: 0px 0px 100px 100px;
}

h1 {
  font-weight: bold;
  line-height: 1.2
}

.servicos {
  background-color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  border-radius: 0px 0px 100px 100px;
}
</style>
