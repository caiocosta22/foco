<script setup>
import { ref } from "vue";
import VueSelect from "vue3-select-component";
import { useRouter } from "vue-router";

const router = useRouter();
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
    input: true,
    optionmenu: true
  }
]);

const email = ref("");
const selected = ref("");
const options = ref([
  {
    label: "Norte",
    value: "objeto1"
  },
  {
    label: "Nordeste",
    value: "objeto2"
  },
  {
    label: "Centro",
    value: "objeto3"
  },
  {
    label: "Sudeste",
    value: "objeto4"
  },
  {
    label: "Sul",
    value: "objeto5"
  }
]);

</script>

<template>
  <div class="container desktop">
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
          <p class="text-md q-mb-sm" :class="{tituloroxo: content.tituloRoxo}"
          v-html="content.descricao">
          </p>
          <div class="inputs">
            <q-input
            rounded standout
            bg-color="white"
            label-color="black"
            label="Digite seu-email*"
            v-model="email"
            input-style="color:#000"
            dense
            v-if="content.input"
            style="width:200px"
            />
            <VueSelect
            v-model="selected"
            :options="options"
            v-if="content.optionmenu"
            style="width:200px;"
            placeholder="Sua Região*"
            class="select"
            />
            <a class="botao-amarelo texto-roxo"
            :class="{botaoroxo: content.botaoRoxo}">
              <span class="text-sm">
                {{ content.botaodesc }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>

  <div class="container mobile">
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
          <p class="text-md q-mb-sm" :class="{tituloroxo: content.tituloRoxo}"
          v-html="content.descricao">
          </p>
          <div class="inputs">
            <div class="flex gap-10">
              <q-input
              rounded standout
              bg-color="white"
              label-color="black"
              label="Digite seu-email*"
              v-model="email"
              input-style="color:#000"
              dense
              v-if="content.input"
              style="width:130px"
              />
              <VueSelect
              v-model="selected"
              :options="options"
              v-if="content.optionmenu"
              style="width:130px;"
              placeholder="Sua Região*"
              class="select"
              />
            </div>
            <a class="botao-amarelo texto-roxo"
            :class="{botaoroxo: content.botaoRoxo}">
              <span class="text-sm">
                {{ content.botaodesc }}
              </span>
            </a>
          </div>
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
  gap:20px;
  border-radius: 80px;
  background-color: var(--roxo-medio);
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  max-height: 260px;
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
  padding: 20px 10px;
}

a {
  width: 250px;
}

.inputs {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  width: 100%;
}

p {
  line-height: 1.4;
  font-weight: 500;
}

.gap-10 {
  gap: 10px;
  margin-bottom: 5px;
}

.select {
  --vs-border-radius: 20px;
  --vs-padding: 0.5rem 0.5rem;
}
@media screen and (min-width:1006px) {
  .mobile {
    display: none;
  }
}
@media screen and (max-width:1006px) {
  .container {
    padding: 20px
  }
  .box {
    flex-direction: column;
    gap:0px;
    border-radius: 40px;
    margin: 0 auto;
    flex:auto;
    max-height: 100%;
    align-items: center;
    text-align: center;
  }
  img {
    border-radius: 40px 40px 0px 0px;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 250px
  }
  .imgLogo {
    padding: 10px 10px;
    width: 125px;
    height: 125px;
    object-fit: contain;
    margin-top: 20px;
  }
  .conteudo {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    align-items: center;
  }
  a {
    width: 180px;
    margin: 0 auto;
    font-weight: 500;
  }
  .inputs {
    flex-direction: column;
    gap: 10px;
  }
  .desktop {
    display: none;
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
  .text-sm {
    font-size: 1rem;
  }
}
</style>
