<script setup>
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
</script>

<template>
<div class="container-box">
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
    width: 100%;
    height: 100%;
    padding: 20px 20px;
  }
  br {
    display: none !important;
  }
  .container-box{
    gap: 20px;
  }
}
</style>
