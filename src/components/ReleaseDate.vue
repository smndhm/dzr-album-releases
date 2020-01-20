<template>
  <div
    class="release-date box"
    v-bind:class="{ 'has-background-light': isItToday(date) }"
  >
    <h3 class="moment title is-6">{{ date | moment }}</h3>
    <div class="albums">
      <album v-for="album in albums" :key="album.id" v-bind:album="album" />
    </div>
  </div>
</template>

<script>
import moment from "moment";

moment.updateLocale("en", {
  calendar: {
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    nextWeek: "dddd",
    lastDay: "[Yesterday]",
    lastWeek: "[Last] dddd",
    sameElse: "dddd Do MMMM YYYY"
  }
});

moment.updateLocale("fr", {
  calendar: {
    sameDay: "[Aujourd'hui]",
    nextDay: "[Demain]",
    nextWeek: "dddd",
    lastDay: "[Hier]",
    lastWeek: "dddd [dernier]",
    sameElse: "dddd Do MMMM YYYY"
  }
});

const locale = window.navigator.userLanguage || window.navigator.language;
moment.locale(locale);

import Album from "@/components/Album.vue";

export default {
  name: "ReleaseDate",
  props: {
    albums: Array,
    date: String
  },
  methods: {
    isItToday(date) {
      return moment().diff(date, "days") === 0;
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).calendar();
    }
  },
  components: {
    Album
  }
};
</script>

<style lang="scss">
.release-date {
  animation: append-release 0.4s ease;
}
.release-date .moment::first-letter {
  text-transform: uppercase;
}
// Animation
@keyframes append-release {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
