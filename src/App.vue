<template>
  <section id="dzr-album-releases" class="section">
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
          document.location.pathname.replace("login", "") +
          "channel.html",
        player: {
          onload: dzInit => {
            console.log("DZ.init", dzInit);
          }
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
$link: hsl(0, 0%, 4%);
$link-hover: hsl(217, 71%, 53%);

@import "bulma";

.tag {
  &.is-loading {
    &:after {
      @include loader;
    }
  }
}
</style>
