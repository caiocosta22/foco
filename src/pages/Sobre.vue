<script setup>
import { ref } from "vue";

const objetivos = ref([
  {
    icon: "/images/sobre/inclusao.svg",
    titulo: "Inclusão",
    descricao: "Democratizar o acesso<br>à preparação e garantir<br>que todos tenham uma<br>chance justa de alcançar<br>a aprovação.",
    border: true
  },
  {
    icon: "/images/sobre/inovacao.svg",
    titulo: "Inovação",
    descricao: "Usar a tecnologia<br>para transformar a<br>experiência de<br>aprendizagem<br>para concursos.",
    border: true
  },
  {
    icon: "/images/sobre/eficiencia.svg",
    titulo: "Eficiência",
    descricao: "Otimizar o tempo<br>e o esforço dos<br>candidatos com <br>soluções práticas<br>e direcionadas.",
    border: true
  },
  {
    icon: "/images/sobre/empatia.svg",
    titulo: "Empatia",
    descricao: "Entender e atender<br>às necessidades<br>emocionais e<br>práticas de cada<br>usuário."
  }
]);
</script>

<template>
<section class="flex-column bg-white text-center border-radius">
  <img src="/images/servico/logopic.png" class="logopic" alt="Logo Foco">
  <h1 class="text-xl texto-roxo text-bold">
    Descubra a nossa história
  </h1>
  <h2 class="text-lg texto-roxo">
    FOCO é a capacitação educacional focada para concursos públicos,<br>projetada para democratizar o acesso à preparação e oferecer uma<br>experiência eficiente e personalizada.
  </h2>
</section>
<div class="background-amarelo">
  <section class="missao border-radius">
    <div class="flex-column">
      <h3 class="text-xlg texto-amarelo text-bold">
        Acreditamos que o<br>acesso a oportunidades<br>deve ser igualitário.
      </h3>
      <p class="text-white text-lg">
        Por isso, criamos um serviço<br>acessível que combina eficiência<br>e inovação para atender às<br>necessidades de candidatos de <br>todas as áreas.
      </p>
    </div>
    <q-separator vertical></q-separator>
    <div class="flex-column">
      <div class="q-gutter-md flex">
        <img src="/images/sobre/visao.svg" alt="">
        <h2 class="text-xlg texto-amarelo text-bold">
          Visão
        </h2>
      </div>
      <p class="text-md text-white">
        Ser a principal referência em preparação<br>acessível e tecnológica para concursos<br>públicos no Brasil.
      </p>
      <q-separator></q-separator>
      <div class="q-gutter-md flex">
        <img src="/images/sobre/missao.svg" alt="">
        <h2 class="text-xlg texto-amarelo text-bold">
          Missão
        </h2>
      </div>
      <p class="text-md text-white">
        Ser a principal referência em preparação<br>acessível e tecnológica para concursos<br>públicos no Brasil.
      </p>
    </div>
  </section>
</div>
<section class="flex-column bg-amarelo border-radius">
  <h1 class="texto-roxo text-xlg text-bold text-center">
    Nosso objetivo é simplificar o caminho<br>da aprovação por meio da tecnologia.
  </h1>
  <h2 class="text-md text-center texto-roxo text-regular">
    No FOCO, seguimos princípios que refletem o nosso compromisso<br>em oferecer uma preparação acessível, <br>eficiente e transformadora<br>para concursos públicos.
  </h2>
  <div class="objetivos flex">
    <div class="flex-column text-center"
    v-for="objetivo in objetivos"
    :key="objetivo"
    :class="{border: objetivo.border}">
      <img :src="objetivo.icon" alt=""
      class="icons">
      <h3 class="text-xlg text-bold texto-roxo">
        {{ objetivo.titulo }}
      </h3>
      <p class="texto-roxo text-regular text-sm"
      v-html="objetivo.descricao"></p>
    </div>
  </div>
</section>
</template>

<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

* {
  line-height: 1.2;
}

.missao {
  display: flex;
  padding: 60px 80px;
  justify-content: center;
  gap: 40px;
  width: 100%;
  background-color: var(--roxo-medio);
}

.logopic {
  width: 88px;
  height: 88px;
  align-self: center;
}

.bg-white {
  padding: 60px 80px;
}

.bg-amarelo {
  padding: 60px 80px;
}

.background-amarelo {
  background-color: var(--amarelo);
}

.flex {
  align-items: center;
}

.bg-amarelo {
  background-color: var(--amarelo);
}

.objetivos {
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.icons {
  height: 130px;
}

.border {
  border-right: 2px solid var(--roxo-medio);
  padding-right: 20px;
}
</style>
