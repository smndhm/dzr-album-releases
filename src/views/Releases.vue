<template>
  <div>
    <Album></Album>
  </div>
</template>

<script>
// @ is an alias to /src
import Album from "@/components/Album.vue";

/*global DZ*/
export default {
  name: "Releases",
  methods: {
    ready() {
      /* Deezer SDK Ready */
      DZ.ready(() => {
        DZ.getLoginStatus(() => {
          this.getAlbumReleases();
        });
      });
    },
    getAlbumReleases() {
      // Get Artists
      DZ.api("user/me/artists", { limit: 2000 }, artists => {
        console.log(artists);
      });
    }
  },
  mounted() {
    this.ready();
  },
  components: {
    Album
  }
};
</script>
