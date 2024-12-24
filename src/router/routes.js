const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Home.vue") }
    ]
  },
  {
    path: "/servico",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Servico.vue") }
    ]
  },
  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Blog.vue") }
    ]
  },
  {
    path: "/contato",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Contato.vue") }
    ]
  },
  {
    path: "/sobre",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Sobre.vue") }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/IALayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Login.vue") }
    ]
  },
  {
    path: "/ia",
    component: () => import("layouts/IALayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IA.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
