<script setup>
import { Vantagens, Carousel, Planos, ScrollEffect } from "src/router";
</script>

<template>
<section class="inicial">
  <h1 class="text-xl">
    Sua jornada <br> até a <b>aprovação</b> <br> começa aqui!
  </h1>
  <h2 class="text-lg">
    Democratizando e otimizando<br> o acesso à capacitação para <br> concursos públicos.
  </h2>
  <a href="">
    <span class="text-md">
      Comece agora >
    </span>
  </a>
</section>
<section class="vantagens">
  <div class="titulos">
    <h1 class="text-xl">
      Focados em simplificar <br> sua preparação para<br> concursos públicos,
    </h1>
    <h2 class="text-xlg">
      tornamos o aprendizado acessível, organizado <br> e totalmente personalizado.
    </h2>
  </div>
  <Vantagens/>
</section>
<section class="apresentacao">
  <img src="/icons/logopic.svg" alt="Logo foco roxo">
  <h1>
    Estudar para concursos nunca foi tão simples.
  </h1>
  <h2>
    Sabemos que se preparar pode ser desafiador, por isso deixe o FOCO facilitar para você. Insira seu edital, organize seus estudos, faça questões, receba feedbacks e tenha o apoio de uma IA ao seu lado, a qualquer momento.
  </h2>
  <a href="">
    <span class="text-md">
      Conheça a versão gratuita agora
    </span>
  </a>
  <Carousel/>
</section>
<section>
  <h1>
    <b> Nossos Planos </b>
  </h1>
  <Planos/>
</section>
<section>
  <h1>
    Como Começar
  </h1>
  <div class="botoes">
    <a href="">
      <span class="text-md">
        Conheça a versão gratuita agora
      </span>
    </a>
    <a href="">
      <span class="text-md">
        Comunidade
      </span>
    </a>
    <a href="">
      <span class="text-md">
        Newsletter
      </span>
    </a>
  </div>
  <ScrollEffect/>
</section>
</template>

<style scoped>
.inicial {
  background-image: url("/images/home/banner.png");
  background-repeat: no-repeat;
  box-sizing: border-box;
  overflow: none;
  border-radius: 0px 0px 100px 100px;
  height: 90vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 0px 80px;
}

b {
  color: var(--amarelo);
}

a {
  padding: 5px;
  border-radius: 20px;
  width: 280px;
  background-color: var(--amarelo);
  text-align: center;
  font-weight: 400;
  text-decoration: none;
}

.text-md {
  color: var(--roxo-medio);
}

.text-xlg {
  color: var(--amarelo)
}

h1 {
  line-height: 1.1;
  font-weight: bold;
}

h2 {
  line-height: 1.1;
  font-weight: 400;
}

.titulos::after {
  content: "";
  right: 0px;
  top: 0px;
  position: absolute;
  padding: 400px 200px;
  background-image: url("/images/meiologo.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

</style>

<style scoped>
.vantagens {
  border-radius: 0px 0px 100px 100px;
  padding: 80px;
  position: relative;
}

.vantagens h2 {
  margin-bottom: 80px;
}
</style>

<style scoped>
.botoes {
  display: flex;
  padding: 40px;
  justify-content: space-between;
  width: 100%;
}
</style>
