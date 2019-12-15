import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

const setAccessToken = accessToken => {
  localStorage.accessToken = JSON.stringify({
    token: accessToken.authResponse.accessToken,
    expire: Math.floor(
      accessToken.authInitDate / 1000 + accessToken.authResponse.expire
    )
  });
  router.push("/");
};

Vue.mixin({
  methods: {
    setAccessToken
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/*global DZ*/

const appId = document.location.host === "smndhm.github.io" ? 255742 : 153461;

/**
 * Init Deezer SDK
 */
DZ.init({
  appId: appId,
  channelUrl:
    document.location.protocol +
    "//" +
    document.location.host +
    document.location.pathname +
    "channel.html",
  player: {
    onload: response => {
      console.log("DZ.init", response);
    }
  }
});

/**
 * Deezer SDK Ready
 */
DZ.ready(sdkOptions => {
  console.log("DZ.ready", sdkOptions);
  DZ.getLoginStatus(loginStatus => {
    console.log("DZ.getLoginStatus", loginStatus);
    setAccessToken(loginStatus);
  });
});
