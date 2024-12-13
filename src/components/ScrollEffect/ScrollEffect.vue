<script setup>
import { ref } from "vue";

const contents = ref([
  {
    img: "/images/home/logopic.png",
    imgLogo: true,
    titulo: "Estude com FOCO",
    descricao: "Comece rapidamente criando uma conta e carregando o edital do concurso. Nossa plataforma vai guiar seus estudos, ajustando cada passo para otimizar seu aprendizado.",
    botaodesc: "Conheça agora"
  },
  {
    img: "/images/home/comunidade.png",
    titulo: "Comunidade FOCO",
    descricao: "Entre para a nossa comunidade online e conecte-se com outros estudantes que, assim como você, estão focados em conquistar a aprovação em concursos públicos. ",
    botaodesc: "Entre aqui",
    backgroundAmarelo: true,
    tituloRoxo: true,
    botaoRoxo: true
  },
  {
    img: "/images/home/newsletter.jpg",
    titulo: "Assine nossa newsletter",
    descricao: "Receba, direto no seu e-mail, informações sobre os editais mais recentes da sua região, dicas exclusivas de estudo e novidades sobre concursos públicos.",
    botaodesc: "Increver-se",
    input: [
      {
        label: "",
        model: ""
      }
    ],
    optionmenu:
    [
      {
        label: "",
        model: "",
        options: ""
      }
    ]
  }
]);
</script>

<template>
<div class="container">
  <template
  v-for="content in contents"
  :key="content">
    <div class="box" :class="{bgamarelo: content.backgroundAmarelo}">
      <img :src="content.img" :alt="content.titulo"
      :class="{imgLogo: content.imgLogo}">
      <div class="conteudo">
        <h3 class="text-lg text-bold texto-amarelo"
        :class="{tituloroxo: content.tituloRoxo}">
          {{ content.titulo }}
        </h3>
        <p class="text-md" :class="{tituloroxo: content.tituloRoxo}"
        v-html="content.descricao">
        </p>
        <a href="" class="botao-amarelo"
        :class="{botaoroxo: content.botaoRoxo}">
          <span class="text-sm">
            {{ content.botaodesc }}
          </span>
        </a>
      </div>
    </div>
  </template>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 40px 60px;
}

.box {
  display: flex;
  gap: 20px;
  border-radius: 80px;
  background-color: var(--roxo-medio);
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  max-height: 280px;
}

.bgamarelo {
  background-color: var(--amarelo);
}

.tituloroxo {
  color: var(--roxo-medio);
}

.botaoroxo {
  background-color: var(--roxo-medio);
  color: var(--amarelo);
}

img {
  border-radius: 60px;
  object-fit: cover;
  object-position: center top;
  width: 250px;
}

.imgLogo {
  padding: 20px 12.5px;
  width: 320px;
}

.conteudo {
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  gap: 5px
}

a {
  width: 250px;
}

</style>
