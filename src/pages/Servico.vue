<script setup>
import { Servicos } from "src/router";
</script>

<template>
<section class="chamada">
  <div class="flex-center bg-amarelo">
    <img src="/images/servico/logopic.png
    " alt="logo foco" class="logo-foco">
    <h1 class="texto-roxo text-xlg">
      Mais do que estudo, <br> FOCO é sua estratégia <br>para conquistar a aprovação.
    </h1>
  </div>
  <div class="bg-branco">
    <div class="flex-center bg-roxo">
      <img src="/icons/logopic.svg
      " alt="logo foco">
      <p
      class="texto-branco text-md text-center">
      FOCO é a sua plataforma de <b>inteligência artificial</b> criada para transformar a maneira como você se prepara para concursos públicos. Com uma abordagem inovadora e acessível, <b>FOCO simplifica cada etapa</b> do processo de estudos.
      </p>
    </div>
  </div>
</section>
<section class="servicos">
  <h1 class="text-xlg texto-roxo confira">
    Confira os nossos <br class="mobile">serviços
  </h1>
  <Servicos/>
</section>
</template>

<style scoped>
.flex-center {
  display:flex;
  gap: 40px;
  padding: 80px 80px;
  margin: 0 auto;
  justify-content: center;
  align-items:center;
  text-align:left;
}

.bg-amarelo {
  background-color:var(--amarelo);
  border-radius: 0px 0px 100px 100px;
}

.bg-branco {
  background-color: #ffffff;
}

.bg-roxo {
  background-color: var(--roxo-medio);
  border-radius: 0px 0px 100px 100px;
}

h1 {
  font-weight: bold;
  line-height: 1.2
}

.servicos {
  background-color: white;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  border-radius: 0px 0px 100px 100px;
}

b {
  color: var(--amarelo);
}

@media screen and (min-width:1006px) {
  .mobile{
    display: none;
  }
}

@media screen and (max-width:1006px) {
  .text-xl {
    font-size: 3.5rem;
  }
  .text-xlg {
    font-size: 2rem;
  }
  .text-lg {
    font-size: 1.75rem;
  }
  .text-md {
    font-size: 1.25rem;
  }
  .flex-center {
    padding: 40px 40px;
  }
  .servicos {
    padding: 40px 0px;
    gap: 40px;
    border-radius: 0px 0px 40px 40px;
  }
  .bg-amarelo {
    border-radius: 0px 0px 40px 40px;
  }
  .bg-roxo {
    border-radius: 0px 0px 40px 40px;
  }
}

@media screen and (max-width:769px) {
  .servicos {
    padding: 40px 0px;
    gap: 20px;
    border-radius: 0px 0px 40px 40px;
  }
  .flex-center {
    padding: 40px 20px;
    flex-direction: column;
    gap:20px
  }
  .text-xlg {
    text-align: center;
  }
  .logo-foco {
    width: 70px;
  }
  .text-md {
    font-size: 1rem;
  }
  .text-md br {
    display: none;
  }
  .confira {
    font-size: 2rem !important;
  }
}

@media screen and (max-width:540px) {
  .text-xlg {
    font-size: 1.5rem;
  }
}

@media screen and (max-width:420px) {
  .text-xlg {
    font-size: 1.25rem;
  }
}
</style>
