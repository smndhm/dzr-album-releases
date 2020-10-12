import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

Vue.mixin({
  data: function() {
    return {
      get getAppId() {
        return document.location.host === "smndhm.github.io" ? 255742 : 153461;
      }
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
