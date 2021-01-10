<template>
  <div id="releases">
    <div id="progress-bar" :style="progress"></div>
    <release-date
      v-for="(releaseDate, name) in releaseDatesDisplay"
      :key="name"
      :albums="releaseDate"
      :date="name"
      @intersect="setDate"
    />
    <loader v-if="loading" />
  </div>
</template>

<script>
import ReleaseDate from "@/components/ReleaseDate.vue";
import Loader from "@/components/Loader.vue";
import dzrSvc from "@/deezer.service";

/*global DZ*/
export default {
  name: "Releases",
  data() {
    return {
      loading: false,
      displayDate: null,
      releaseDates: {},
      loadingArtists: {},
      totalArtists: 0
    };
  },
  methods: {
    setDate(date) {
      let d = new Date(date);
      d.setMonth(d.getMonth() - 1);
      const offset = d.getTimezoneOffset();
      d = new Date(d.getTime() - offset * 60 * 1000);
      this.displayDate = d.toISOString().split("T")[0];
    },
    addToReleases(album) {
      // Create release date if doesn't exist
      if (!this.releaseDates[album.release_date]) {
        this.releaseDates[album.release_date] = [];
        // Reorder dates desc
        this.releaseDates = Object.keys(this.releaseDates)
          .sort()
          .reverse()
          .reduce((acc, obj) => ((acc[obj] = this.releaseDates[obj]), acc), {});
      }
      //Check if album already exist in release date
      const index = this.releaseDates[album.release_date].findIndex(
        a => a.id === album.id
      );
      if (index >= 0) {
        this.releaseDates[album.release_date][
          index
        ].artists = this.releaseDates[album.release_date][index].artists.concat(
          album.artists
        );
      } else {
        this.releaseDates[album.release_date].push(album);
      }
      this.releaseDates[album.release_date].sort((a, b) => {
        // Sort by id if same record type
        if (a.record_type === b.record_type) {
          return a.id - b.id;
        } else {
          // album 1st, compile 2nd, ep 3rd, single 4th
          const record_type = ["album", "compile", "ep", "single"];
          const recordTypeIndex = record_type.findIndex(
            type => type === a.record_type
          );
          if (recordTypeIndex === record_type.length - 1) return 1;
          else if (
            recordTypeIndex === 0 ||
            record_type.slice(recordTypeIndex + 1).includes(b.record_type)
          )
            return -1;
          else return 0;
        }
      });
    },
    async getAlbumsReleases() {
      // Start loader
      this.loading = true;

      // Set token
      dzrSvc.setAccessToken(JSON.parse(localStorage.accessToken).token);

      // Get artists
      const dzrUserArtists = await dzrSvc.getArtists();
      this.totalArtists = dzrUserArtists.length;

      // Add artists to loader
      this.loadingArtists = [...dzrUserArtists];

      // Build batches
      const batches = [];
      while (dzrUserArtists.length) {
        batches.push(dzrUserArtists.splice(0, dzrSvc.batchLength));
      }

      batches.forEach(async artists => {
        const batch_result = await dzrSvc.getArtistsReleases(artists);
        // End loader on first batch result
        this.loading = false;
        // for each artist
        for (const i in batch_result) {
          // add atiststs to album
          for (const album of batch_result[i].data) {
            album.artists = [artists[i]];
            // Add album to releases
            this.addToReleases(album);
          }
          // remove artist from list
          this.loadingArtists = this.loadingArtists.filter(
            artist => artist.id !== artists[i].id
          );
        }
      });
    }
  },
  computed: {
    progress() {
      return `--progress-width:${(100 -
        (this.loadingArtists.length * 100) / this.totalArtists) %
        100}%;`;
    },
    releaseDatesDisplay() {
      const releaseDates = Object.entries(this.releaseDates);
      // return at least the 10 firsts dates
      const tenFirst = Object.fromEntries(releaseDates.splice(0, 10));
      // return last month releases
      const beforeDate = Object.fromEntries(
        releaseDates.filter(([key, value]) => key >= this.displayDate)
      );
      return { ...tenFirst, ...beforeDate };
    }
  },
  mounted() {
    this.getAlbumsReleases();
  },
  components: {
    ReleaseDate,
    Loader
  }
};
</script>

<style lang="scss" scoped>
#releases {
  scroll-snap-type: y;
}
#progress-bar {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: var(--progress-width);
  height: 0.2rem;
  background: rgb(220, 76, 17);
  background: linear-gradient(
    90deg,
    var(--deezer-main-gradient-1) 0%,
    var(--deezer-main-gradient-2) 20%,
    var(--deezer-main-gradient-3) 40%,
    var(--deezer-main-gradient-4) 60%,
    var(--deezer-main-gradient-5) 80%,
    var(--deezer-main-gradient-6) 100%
  );
}
</style>
