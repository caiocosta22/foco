<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { ref } from "vue";
const servicos = ref([
  {
    titulo: "Simplificação de editais",
    descricao: "Encontre as informações mais relevantes<br>do seu edital de forma rápida e clara."
  },
  {
    titulo: "Cronogramas personalizados",
    descricao: "Otimize seus estudos com cronogramas<br>adaptados às suas necessidades"
  },
  {
    titulo: "Mapeamento de videoaulas",
    descricao: "Tenha acesso às melhores aulas<br>disponíveis na internet."
  },
  {
    titulo: "Respostas a dúvidas",
    descricao: "Esclareça suas dúvidas rapidamente<br>com o auxílio da nossa IA."
  },
  {
    titulo: "Questões e redações",
    descricao: "Treine com questões e redações voltadas<br>para o seu cargo e a sua banca."
  },
  {
    titulo: "Aba Saúde Mental",
    descricao: "Receba dicas e suporte para gerenciar a ansiedade e manter o equilíbrio emocional."
  },
  {
    titulo: "Feedbacks contínuos",
    descricao: "Saiba sabe exatamente onde você<br>está indo bem e onde precisa melhorar."
  }
]);

const options = {
  perPage: 3,
  padding: "20px",
  gap: "20px",
  rewind: true,
  autoplay: true,
  pagination: false,
  arrows: true, // Ativando as setas,
  type: "loop",
  breakpoints: {
    769: {
      perPage: 1, // Mostra 2 slides por vez em telas até 1024px
      gap: "10px",
      arrows: true
    }
  }
};
</script>

<template>
<div class="container-box desktop">
  <div class="box" v-for="servico in servicos"
  :key="servico">
    <h3
    class="texto-amarelo text-bold text-md">
      {{ servico.titulo }}
    </h3>
    <p
    v-html="servico.descricao"
    class="text-sm"
    >
    </p>
  </div>
</div>
<div class="container-box mobile">
  <Splide :options="options" aria-label="Opções Foco" class="carousel" style="width: 100%;">
    <SplideSlide v-for="servico in servicos"
      :key="servico"
      >
      <div class="box">
        <h3
        class="texto-amarelo text-bold text-md">
          {{ servico.titulo }}
        </h3>
        <p
        v-html="servico.descricao"
        class="text-sm"
        >
        </p>
      </div>
    </SplideSlide>
  </Splide>
</div>
</template>

<style scoped>
.container-box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 40px;
  background: var(--roxo-medio);
  border-radius: 50px;
  text-align: center;
  justify-content: center;
  width: 500px;
  height: 150px;
}

h3, p {
  line-height: 1.2 ;
}

p {
  color: #ffffff;
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
  .box {
    gap: 10px;
    padding: 20px 20px;
    background: var(--roxo-medio);
  }
  br {
    display: none !important;
  }
  .container-box{
    gap: 20px;
  }
}

@media screen and (min-width:769px) {
  .mobile {
    display:none
  }
}

@media screen and (max-width:769px) {
  .desktop {
    display: none;
  }
  .text-xl {
    font-size: 3rem;
  }
  .text-xlg {
    font-size: 1.5rem;
  }
  .text-lg {
    font-size: 1.5rem;
  }
  .text-md {
    font-size: 1rem;
  }
  .text-sm {
    font-size:0.8rem;
  }
  br {
    display: none;
  }
  .box {
    gap: 5px;
    padding: 10px 10px;
    background: var(--roxo-medio);
    width: 100%;
    margin: 0 auto;
    height: 125px;
  }
}
</style>
