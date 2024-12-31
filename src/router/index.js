import { route } from "quasar/wrappers";
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === "history" ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  return Router;
});

// Importações de Componentes
import Vantagens from "../components/Vantagens/Vantagens.vue";
import Carousel from "src/components/Carousel/Carousel.vue";
import Planos from "src/components/Planos/Planos.vue";
import ScrollEffect from "src/components/ScrollEffect/ScrollEffect.vue";
import Servicos from "src/components/Servicos/Servicos.vue";
import Apresentacao from "src/components/Apresentacao.vue/Apresentacao.vue";
import Sidebar from "src/components/Menu/Sidebar.vue";
import Menu from "src/components/Menu/Menu.vue";
import Cronograma from "src/components/Cronograma.vue/Cronograma.vue";
import Metricas from "src/components/Metricas/Metricas.vue";
import Chat from "src/components/Chat/Chat.vue";
import TypingEffect from "src/components/TypingEffect/TypingEffect.vue";
import SaudeMental from "src/components/Chat/SaudeMental.vue";
export { Chat, SaudeMental, Metricas, Cronograma, Apresentacao, Vantagens, Carousel, Planos, ScrollEffect, Servicos, Sidebar, Menu, TypingEffect };
