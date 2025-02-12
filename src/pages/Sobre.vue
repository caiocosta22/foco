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
    Descubra <br class="mobile">a nossa história
  </h1>
  <h2 class="text-lg texto-roxo text-semibold">
    FOCO é a capacitação educacional focada para concursos públicos,<br>projetada para democratizar o acesso à preparação e oferecer uma<br>experiência eficiente e personalizada.
  </h2>
</section>
<div class="background-amarelo">
  <section class="missao border-radius">
    <div class="flex-column texto-missao-principal">
      <h3 class="text-xlg texto-amarelo text-bold text-center-mobile">
        Acreditamos que o <br>acesso a oportunidades<br> deve ser igualitário.
      </h3>
      <p class="text-white text-lg text-center-mobile">
        Por isso, criamos um serviço acessível que combina eficiência e inovação para atender às necessidades de candidatos de todas as áreas.
      </p>
      <q-separator class="mobile"></q-separator>
    </div>
    <q-separator vertical class="separator"></q-separator>
    <div class="flex-column">
      <div class="flex align-center icones">
        <img src="/images/sobre/visao.svg" alt="" class="icon">
        <h2 class="text-xlg texto-amarelo text-bold text-center-mobile">
          Visão
        </h2>
      </div>
      <p class="text-md text-white text-center-mobile">
        Ser a principal referência em preparação acessível e tecnológica para concursos públicos no Brasil.
      </p>
      <q-separator class="separator"></q-separator>
      <div class="flex align-center icones">
        <img src="/images/sobre/missao.svg" alt="missão" class="icon">
        <h2 class="text-xlg texto-amarelo text-bold text-center-mobile">
          Missão
        </h2>
      </div>
      <p class="text-md text-white text-center-mobile">
        Tornar a preparação para concursos públicos mais inclusiva e acessível para todos.
      </p>
    </div>
  </section>
</div>
<section class="flex-column bg-amarelo border-radius">
  <h1 class="texto-roxo text-xlg text-bold text-center">
    Nosso objetivo é simplificar o caminho<br>da aprovação por meio da tecnologia.
  </h1>
  <h2 class="text-md text-center texto-roxo">
    No FOCO, seguimos princípios que refletem o nosso compromisso<br>em oferecer uma preparação acessível,eficiente e transformadora<br>para concursos públicos.
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
      <p class="texto-roxo text-semibold text-sm"
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
  display: grid;
  grid-template-columns: 1fr 10px 1fr;
  padding: 60px 80px;
  gap: 30px;
  align-items: center;
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

.text-md {
  font-weight: 500;
}

.icones {
  gap: 10px;
}

@media screen and (min-width:1006px) {
  .mobile {
    display: none !important;
  }
}

@media screen and (max-width:1006px) {
  .icones {
    justify-content: center;
    flex-direction: column;
  }
  .text-center-mobile {
    text-align: center;
  }
  .text-xl {
    line-height: 1;
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
  .border {
    border-right: 0px solid var(--roxo-medio);
    padding-right: 0px;
    border-bottom: 2px solid var(--roxo-medio);
    padding-bottom: 40px;
    width: 100%;
  }
  .icons {
    margin-top: 20px;
  }
  .missao {
    grid-template-columns: 1fr;
    padding: 40px 40px;
    gap: 20px;
  }
  .icon {
    width: 40px;
  }
  .objetivos {
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
  }
  .bg-white {
    padding: 40px 40px;
  }

  .bg-amarelo {
    padding: 40px 40px;
  }
}
@media screen and (max-width:769px) {
  .missao {
    grid-template-columns: 1fr;
    padding: 40px 20px;
    gap: 20px;
  }
  .icon {
    width: 40px;
  }
  .text-xl {
    font-size: 2.5rem;
  }
  .text-xlg {
    font-size: 1.75rem;
  }
  .text-lg {
    font-size: 1.25rem;
  }
  .text-md {
    font-size: 1rem;
  }
  .text-sm {
    font-size: 1rem;
  }
  .border-radius {
    border-radius: 0px 0px 40px 40px;
  }
  .bg-white {
    padding: 40px 20px;
  }
  .bg-amarelo {
    padding: 40px 20px;
  }
}

@media screen and (max-width:400px) {
  .text-xl {
    font-size: 2rem;
  }
  .text-xlg {
    font-size: 1.5rem;
  }
  .text-lg {
    font-size: 1rem
  }
}
</style>
