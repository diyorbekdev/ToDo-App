import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const lazyload = componentPath => {
  return () =>
    import(/* webpackChunkName: "[request]" */ `../views/${componentPath}.vue`);
};

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/todo-app",
    name: "todolist",
    component: lazyload("todolist"),
    meta: {
      auth: true
    }
  },
  {
    path: "/blog",
    name: "blog",
    component: lazyload("blog")
  },
  {
    path: "/docs",
    name: "documentation",
    component: lazyload("docs")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../layout/login.vue`)
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../layout/404.vue`)
  },
  {
    path: "**",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;
  const token = localStorage.getItem("user");

  if (requireAuth && token) {
    if (to.name == "login") {
      return next({
        name: "index"
      });
    } else {
      next();
    }
  } else if (requireAuth) {
    next({
      name: "login"
    });
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
