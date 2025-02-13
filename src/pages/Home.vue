<script setup>
import { Vantagens, Carousel, Planos, ScrollEffect } from "src/router";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
<section class="inicial">
  <h1 class="text-xl title-home">
    Sua jornada até <br> a <b>aprovação</b> <br> começa aqui!
  </h1>
  <div class="desc-home">
    <h2 class="text-lg q-mb-md">
      Democratizando e otimizando<br> o acesso à capacitação para <br> concursos públicos.
    </h2>
    <a @click="router.push('/login')">
      <span class="text-md botao-amarelo text-semibold">
        Comece agora >
      </span>
    </a>
  </div>
</section>
<section class="vantagens">
  <div class="interno-vantagens">
    <div class="titulos">
      <h1 class="text-xl">
        Focados em simplificar <br> sua preparação para<br> concursos públicos,
      </h1>
      <h2 class="text-xlg">
        tornamos o aprendizado acessível, organizado <br> e totalmente personalizado.
      </h2>
    </div>
    <Vantagens/>
  </div>
</section>
<section class="apresentacao container-flex-column q-pb-xl q-pt-xl">
  <img src="/icons/logopic.svg" alt="Logo foco roxo" class="align-center logo-foco">
  <h1 class="texto-roxo text-xl text-center" >
    Estudar para concursos<br> nunca foi tão simples.
  </h1>
  <h2 class="text-black text-md text-center text-semibold desc">
    Sabemos que se preparar pode ser desafiador, por isso<br> deixe o FOCO facilitar para você. Insira seu edital, organize<br> seus estudos, faça questões, receba feedbacks e tenha<br> o apoio de uma IA ao seu lado, a qualquer momento.
  </h2>
  <a class="botao-roxo" @click="router.push('/login')">
    <span>
      <b>Conheça a versão gratuita agora</b>
    </span>
  </a>
  <Carousel/>
</section>
<section class="container-flex-column container-planos">
  <div class="interno-planos container-flex-column">
    <h1 class="text-xl q-mt-xl planos">
      <b> Nossos Planos </b>
    </h1>
    <Planos/>
  </div>
</section>
<section class="como-comecar q-pb-xl q-pt-xl">
  <h1 class="texto-roxo text-xl text-center">
    Como Começar
  </h1>
  <div class="botoes desktop">
    <a class="botao-roxo">
      <span class="text-md">
        <b>Versão gratuita</b>
      </span>
    </a>
    <a class="botao-roxo">
      <span class="text-md">
        <b>Comunidade</b>
      </span>
    </a>
    <a class="botao-roxo">
      <span class="text-md">
        <b>Newsletter</b>
      </span>
    </a>
  </div>
  <div class="botoes mobile">
    <div class="flex gap-10">
      <a class="botao-roxo" style="width: 180px;">
        <span class="text-md newsletter">
          <b>Versão gratuita</b>
        </span>
      </a>
      <a class="botao-roxo" style="width: 180px;">
        <span class="text-md newsletter">
          <b>Comunidade</b>
        </span>
      </a>
    </div>
    <a class="botao-roxo" style="width: 180px;">
      <span class="text-md newsletter">
        <b>Newsletter</b>
      </span>
    </a>
  </div>
  <ScrollEffect/>
</section>
</template>

<style scoped>
.gap-10 {
  gap: 10px;
}

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
  position: relative;
}

b {
  color: var(--amarelo);
}

a {
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

.vantagens {
  background-color: var(--amarelo);
}

.interno-vantagens {
  background: var(--roxo-medio);
  border-radius: 0px 0px 100px 100px;
  padding: 80px;
  position: relative;
}

.vantagens h2 {
  margin-bottom: 80px;
}

.titulos {
  background-color: var(--roxo-medio);
  border-radius: 0px 0px 100px 100px;
}
.botoes {
  display: flex;
  padding: 40px;
  width: 100%;
  margin: 0 auto;
  gap: 40px;
  justify-content: center;
}

.apresentacao {
  background-color: var(--amarelo);
  border-radius: 0px 0px 100px 100px;
}

.apresentacao a {
  width: 280px;
}

.como-comecar {
  background-color: #ffffff;
  border-radius: 0px 0px 100px 100px;
}

.container-planos {
  background-color: #ffffff;
}

.interno-planos {
  background-color: var(--roxo-medio);
  border-radius: 0px 0px 100px 100px;
  width: 100%;
}

.text-semibold {
  font-weight: 500;
}

@media screen and (min-width:1006px) {
  .mobile {
    display: none;
  }
}

@media screen and (max-width:1006px) {
  .desktop {
    display: none;
  }
  .inicial {
    padding: 0px 40px;
  }
  .vantagens br {
    display: none;
  }
  .vantagens h2 {
    margin-bottom: 20px;
  }
  .interno-vantagens {
    padding: 40px 40px 40px 40px;
    border-radius: 0px 0px 40px 40px;
  }
  .interno-planos {
    border-radius: 0px 0px 40px 40px;
  }
  .apresentacao {
    padding: 20px 0px;
    border-radius: 0px 0px 40px 40px;
  }
  .titulos::after {
    display: none;
  }
  .titulos {
    border-radius: 0px 0px 40px 40px;
  }
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
  .como-comecar {
    background-color: #ffffff;
    border-radius: 0px 0px 40px 40px;
  }
  .como-comecar .botoes {
    flex-direction: column;
  }
  .botoes {
    padding: 20px 20px;
    gap: 20px;
    align-items: center;
  }
  .newsletter {
    font-size: 1rem !important;
  }
  .logo-foco {
    width: 60px;
    margin-top: 20px;
  }
  .desc br {
    display: none;
  }
  .desc {
    padding: 0px 20px;
  }
  .border-radius {
    border-radius: 0px 0px 40px 40px;
  }
}

@media screen and (max-width:769px) {
  .titulos {
    align-items: center;
    text-align: center;
    gap: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .text-xl {
    font-size: 2rem;
  }
  .text-xlg {
    font-size: 1.75rem;
  }
  .text-lg {
    font-size: 1.5rem;
  }
  .text-md {
    font-size: 1.25rem;
  }
  .inicial {
    padding: 0px 20px;
    text-align: center;
    border-radius: 0px 0px 40px 40px;
    background-image: url("/images/home/banner-mobile.png");
    background-position: center;
    justify-content: flex-start;
  }
  .interno-vantagens {
    padding: 40px 20px 0px 20px;
  }
  .title-home {
    margin-top: 40px;
    font-size: 2rem !important;
  }
  .desc-home .text-lg {
    font-size: 1.25rem;
  }
  .desc-home .text-md {
    font-size: 1rem;
  }
  .planos {
    font-size: 2.25rem !important;
  }
}

@media screen and (max-width:500px){
  .text-xl {
    font-size: 1.75rem;
  }
  .text-xlg {
    font-size: 1.5rem;
  }
  .text-lg {
    font-size: 1.25rem;
  }
}

@media screen and (max-width:400px) {
  .text-xl {
    font-size: 1.4rem;
  }
  .text-xlg {
    font-size: 1.25rem;
  }
  .text-lg {
    font-size: 1rem;
  }
  .text-md {
    font-size: 1rem;
  }
}
</style>
