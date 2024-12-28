import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menuAtual: 4
  }),
  actions: {
    setMenuAtual (id) {
      this.menuAtual = id;
    }
  }
});
