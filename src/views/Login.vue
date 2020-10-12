<template>
  <div id="login">
    <div id="dz-root"></div>
    <h1>Deezer Album Releases</h1>
    <h2>Get your favorite artists albums releases</h2>
    <p>
      Connect to your Deezer account to get your favorite artists albums
      releases.
    </p>
    <button role="button" @click="login">Connect to Deezer</button>
  </div>
</template>

<script>
/*global DZ*/
export default {
  name: "Login",
  methods: {
    login() {
      DZ.login(
        ({ authResponse, authInitDate }) => {
          if (authResponse.accessToken) {
            localStorage.accessToken = JSON.stringify({
              token: authResponse.accessToken,
              expire: Math.floor(authInitDate / 1000 + authResponse.expire)
            });
            this.$router.push("/");
          }
        },
        { perms: "basic_access" }
      );
    },
    init() {
      /* Init Deezer SDK */
      DZ.init({
        appId: this.getAppId,
        channelUrl: `${document.location.origin}${document.location.pathname}channel.html`,
        player: {
          onload: dzInit => {
            console.log("DZ.init", dzInit); // eslint-disable-line no-console
          }
        }
      });
    }
  },
  mounted() {
    window.dzAsyncInit = () => {
      this.init();
    };
    (() => {
      var e = document.createElement("script");
      e.src = "https://e-cdns-files.dzcdn.net/js/min/dz.js";
      e.async = true;
      document.getElementById("dz-root").appendChild(e);
    })();
  }
};
</script>
