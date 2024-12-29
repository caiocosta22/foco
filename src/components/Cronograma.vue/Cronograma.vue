<script setup>
import { ref } from "vue";
import { TypingEffect } from "src/router";

const rotinas = ref([
  {
    titulo: "Segunda-Feira",
    descricao: [
      {
        name: "<b>20h - 20h50:</b> Língua Portuguesa (Concordância Verbal)",
        link: "https://www.youtube.com/watch?v=s2T9Ap2J7u0"
      },
      {
        name: "<b>21h - 21h50:</b> Direito Eleitoral (Código Eleitoral)",
        link: "https://www.youtube.com/watch?v=k8CLd3oPKv8"
      },
      {
        name: "<b>22h - 22h30:</b> Leitura e revisão de anotações"
      }
    ]
  },
  {
    titulo: "Terça-Feira",
    descricao: [
      {
        name: "<b>20h - 20h50:</b> Direito Administrativo (Poderes Administrativos)",
        link: "https://www.youtube.com/watch?v=8xlxjkZ4I4Q&list=PLbQeIXJbBuGJQrcLXeGFTTvypCjJCjjuh"
      },
      {
        name: "<b>21h - 21h50:</b> Direito Constitucional (Princípios Fundamentais)",
        link: "https://www.youtube.com/watch?v=X_-c1VKfpjU"
      },
      {
        name: "<b>22h - 22h30:</b> Questões de Orçamento"
      }
    ]
  },
  {
    titulo: "Quarta-Feira",
    descricao: [
      {
        name: "<b>20h - 20h50:</b> Administração Pública (Gestão de Projetos)",
        link: "https://www.youtube.com/watch?v=KA9Xl2gBoI0"
      },
      {
        name: "<b>21h - 21h50:</b> Gestão de Pessoas (Gestão da Mudança)",
        link: "https://www.youtube.com/watch?v=ZYeDari8iXg"
      },
      {
        name: "<b>22h - 22h30:</b> Revisão de erros frequentes"
      }
    ]
  },
  {
    titulo: "Quinta-Feira",
    descricao: [
      {
        name: "<b>20h - 20h50:</b> Orçamento (PPA)",
        link: "https://www.youtube.com/watch?v=YeY93ywt8l8"
      },
      {
        name: "<b>21h - 21h50:</b> Língua Portuguesa (Concordância Nominal)",
        link: "https://www.youtube.com/watch?v=Ssb7v6KIYt8"
      },
      {
        name: "<b>22h - 22h30:</b> Questões de Direito Administrativo"
      }
    ]
  },
  {
    titulo: "Sexta-Feira",
    descricao: [
      {
        name: "<b>20h - 20h50:</b> Direito Eleitoral (Código Eleitoral)",
        link: "https://www.youtube.com/watch?v=K5md6ikEDmo"
      },
      {
        name: "<b>21h - 21h50:</b> Direito Administrativo (Poderes Administrativos)",
        link: "https://www.youtube.com/watch?v=VBJWVN8DSJs&list=PLbQeIXJbBuGJQrcLXeGFTTvypCjJCjjuh&index=2"
      },
      {
        name: "<b>22h - 22h30:</b> Revisão de anotações"
      }
    ]
  }
]);

const goTo = (url) => {
  if (url.length > 2) {
    window.open(url, "_blank");
  }
};
</script>

<template>
<div class="flex">
  <img src="/images/logomin.svg" alt="Logo Foco" class="logo">
  <div>
    <h2 class="text-white text-sm">
      <b>Semana 1</b><br>Edital: <b>TSE Unificado 2024</b><br>Carga horária: <b>3 horas por dia</b> | Dias de estudo: <b>Segunda a Sexta</b><br>Cargo: <b>Analista Administrativo</b><br>Método: <b>Alternância de disciplinas</b>
    </h2>
  </div>
</div>
<q-separator style="width: 100%; height: 2px;" color="primary" class="q-my-md"></q-separator>
<section class="rotinas">
  <div v-for="rotina in rotinas" :key="rotina" class="rotina">
    <a class="botao-amarelo texto-roxo text-md">
      {{ rotina.titulo }}
    </a>
    <p v-for="descricoes in rotina.descricao" :key="descricoes" class="text-sm" @click="goTo(descricoes.link)"
    :class="{ativo:descricoes.link}"
    v-html="descricoes.name">
    </p>
  </div>
</section>
</template>

<style scoped>
.logo {
  align-self: flex-start;
  padding: 0px 10px;
}

.rotinas {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 60px;
}

.rotina {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

p {
  position: relative;
  padding-left: 10px;
  transition: 0.3s ease-in-out;
}

.ativo:hover {
  cursor: pointer;
  color: var(--amarelo);
}

p::before {
  content: "";
  background-color: var(--amarelo);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  left: -5px;
  margin-top: 10px;
  padding: 3px;
}

a {
  font-weight: 500;
  max-width: 300px;
}

* {
  line-height: 1.2;
}

b {
  color: #ffffff;
}
</style>
