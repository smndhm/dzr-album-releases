<template>
  <section id="dzr-album-releases">
    <router-view />
  </section>
</template>

<script>
/*global DZ*/
export default {
  name: "App",
  computed: {
    getAppId() {
      return document.location.host === "smndhm.github.io" ? 255742 : 153461;
    }
  },
  methods: {
    init() {
      /* Init Deezer SDK */
      DZ.init({
        appId: this.getAppId,
        channelUrl:
          document.location.protocol +
          "//" +
          document.location.host +
          document.location.pathname +
          "channel.html",
        player: {
          onload: () => {}
        }
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss">
@import "bulma";
</style>
