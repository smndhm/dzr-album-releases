import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Routes
import Releases from "../views/Releases.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "releases",
    component: Releases
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!localStorage.accessToken && to.name !== "login") {
    next("/login");
  } else if (localStorage.accessToken) {
    const expired =
      JSON.parse(localStorage.accessToken).expire <
      Math.floor(Date.now() / 1000);
    if (expired) {
      delete localStorage.accessToken;
      next("/login");
    } else if (!expired && to.name === "login") {
      next("/");
    } else {
      next();
    }
  } else next();
});

export default router;
