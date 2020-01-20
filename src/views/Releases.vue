<template>
  <div id="releases" class="container">
    <div id="loader" class="field is-grouped">
      <div
        class="control"
        v-for="loadingArtist in loadingArtists"
        :key="loadingArtist.id"
      >
        <div class="tags has-addons">
          <span class="tag is-loading"></span>
          <span class="tag is-info is-light">{{ loadingArtist.name }}</span>
        </div>
      </div>
    </div>
    <release-date
      v-for="(releaseDate, name) in releaseDates"
      :key="name"
      v-bind:albums="releaseDate"
      v-bind:date="name"
    />
  </div>
</template>

<script>
import ReleaseDate from "@/components/ReleaseDate.vue";

/*global DZ*/
export default {
  name: "Releases",
  data: function() {
    return {
      releaseDates: {},
      loadingArtists: {}
    };
  },
  methods: {
    ready() {
      /* Deezer SDK Ready */
      DZ.ready(dzReady => {
        console.log("DZ.ready", dzReady);
        DZ.getLoginStatus(dzGetLoginStatus => {
          console.log("DZ.getLoginStatus", dzGetLoginStatus);
          this.getAlbumReleases();
        });
      });
    },
    getAlbumReleases() {
      // Get Artists
      DZ.api("user/me/artists", { limit: 2000 }, artists => {
        // For each artist
        artists.data.forEach(artist => {
          // Add artist to loader
          this.loadingArtists[artist.id] = artist;
          // Get Albums
          DZ.api(`artist/${artist.id}/albums`, { limit: 2000 }, albums => {
            //Add artist to album
            albums.data.map(album => {
              album.artists = [artist];
              return album;
            });
            // Send albums to releases object
            this.addToReleases(albums.data);
            // remove from loader
            delete this.loadingArtists[artist.id];
          });
        });
      });
    },
    addToReleases(albums) {
      albums.forEach(album => {
        // Create release date if doesn't exist
        if (!this.releaseDates[album.release_date]) {
          this.releaseDates[album.release_date] = [];
          // Reorder dates desc
          this.releaseDates = Object.keys(this.releaseDates)
            .sort()
            .reverse()
            .reduce((r, k) => ((r[k] = this.releaseDates[k]), r), {});
        }
        //Check if album already exist in release date
        const index = this.releaseDates[album.release_date].findIndex(
          a => a.id === album.id
        );
        if (index >= 0) {
          this.releaseDates[album.release_date][
            index
          ].artists = this.releaseDates[album.release_date][
            index
          ].artists.concat(album.artists);
        } else {
          this.releaseDates[album.release_date].push(album);
        }
      });
    }
  },
  mounted() {
    this.ready();
  },
  components: {
    ReleaseDate
  }
};
</script>

<style lang="scss">
#loader {
  overflow-x: scroll;
  flex-wrap: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#loader::-webkit-scrollbar {
  display: none;
}

#loader:empty {
  display: none;
}
</style>
