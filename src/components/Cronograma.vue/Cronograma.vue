<script setup>
import { ref, computed } from "vue";
import { TypingEffect } from "src/router";
import { useQuasar } from "quasar";

const $q = useQuasar();

const toggle = computed(() => { return $q.dark.isActive; });

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
<div class="texto-inicial">
  <img src="/images/logopicroxo.svg" alt="Logo Foco" class="logo" v-if="!toggle">
  <img src="/images/logomin.svg" alt="Logo Foco" class="logo" v-if="toggle">
  <div>
    <h2 class="text-white text-sm" :class="{textoroxo:!toggle,}">
      <b :class="{textoroxo:!toggle,}">Semana 1</b><br>Edital: <b :class="{textoroxo:!toggle,}">TSE Unificado 2024</b><br>Carga horária: <b :class="{textoroxo:!toggle,}">3 horas por dia</b><br>Dias de estudo: <b :class="{textoroxo:!toggle,}">Segunda a Sexta</b><br>Cargo: <b :class="{textoroxo:!toggle,}">Analista Administrativo</b><br>Método: <b :class="{textoroxo:!toggle,}">Alternância de disciplinas</b>
    </h2>
  </div>
</div>
<q-separator style="width: 100%; height: 2px;" color="primary" class="q-my-md"></q-separator>
<section class="rotinas">
  <div v-for="rotina in rotinas" :key="rotina" class="rotina">
    <a class="botao-amarelo texto-roxo text-md" :class="{textoroxo: !toggle}">
      {{ rotina.titulo }}
    </a>
    <p v-for="descricoes in rotina.descricao" :key="descricoes" class="text-sm descricao" @click="goTo(descricoes.link)"
    :class="{ativo:descricoes.link, descricaoalt: !toggle, ativoalt:descricoes.link}"
    v-html="descricoes.name">
    </p>
  </div>
</section>
</template>

<style scoped>
.logo {
  align-self: flex-start;
  width: 60px;
}

.texto-inicial {
  display: flex;
  flex-direction: row;
  gap: 10px;
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

.descricao {
  position: relative;
  padding-left: 10px;
}

.ativo:hover {
  cursor: pointer;
  color: var(--amarelo);
  transition: 0.3s ease-in-out;
}

.descricao::before {
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

.descricaoalt::before {
  background-color: var(--roxo-escuro) !important;
}

.descricaoalt:hover {
  cursor: pointer;
  color: var(--roxo-medio) !important;
  transition: 0.3s ease-in-out;
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

.textoroxo{
  color: var(--roxo-escuro) !important;
}

@media screen and (max-width:1440px) {
  .text-xl {
    font-size: 3.75rem;
  }
  .text-xlgv {
    font-size: 2.5rem;
  }
  .text-md {
    font-size: 1.25rem;
  }
  .text-sm {
    font-size: 1rem;
  }
}

@media screen and (max-width: 1006px) {
  .logo {
    width: 30px;
  }
}

@media screen and (max-width:769px) {
  .rotinas {
    padding: 0px 5px;
  }
  .descricao {
    padding-left: 20px;
  }
  .descricao::before {
    content: "";
    background-color: var(--amarelo);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    margin-top: 10px;
    padding: 3px;
  }
}

@media screen and (max-width:640px) {
  .botao-amarelo {
    padding: 5px 10px;
    width: 200px;
  }
}
</style>
