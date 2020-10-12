import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Routes
import Releases from "../views/Releases.vue";
import Login from "../views/Login.vue";

const requireAuth = (to, from, next) => {
  if (
    !localStorage.accessToken ||
    JSON.parse(localStorage.accessToken).expire < Math.floor(Date.now() / 1000)
  ) {
    next("/login");
  } else {
    next();
  }
};

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Releases,
      beforeEnter: requireAuth
    },
    {
      path: "/login",
      component: Login
    }
  ]
});

export default router;
