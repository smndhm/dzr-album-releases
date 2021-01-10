<template>
  <article class="release-date" :class="{ today: releasedSince(date) === 0 }">
    <h3>
      <time class="date" :datetime="date">{{ moment(date) }}</time>
    </h3>
    <div class="albums">
      <album v-for="album in albums" :key="album.id" :album="album" />
    </div>
  </article>
</template>

<script>
import Album from "@/components/Album.vue";

export default {
  name: "ReleaseDate",
  props: {
    albums: Array,
    date: String
  },
  data() {
    return {
      locale: window.navigator.userLanguage || window.navigator.language,
      releasedAround: 7,
      observer: null
    };
  },
  methods: {
    releasedSince(date) {
      return Math.round(
        (new Date(date) - new Date().setHours(0, 0, 0, 0)) /
          (1000 * 60 * 60 * 24)
      );
    },
    moment(date) {
      const releasedSince = this.releasedSince(date);
      return releasedSince >= this.releasedAround ||
        releasedSince <= -this.releasedAround
        ? new Intl.DateTimeFormat(this.locale, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }).format(Date.parse(date))
        : new Intl.RelativeTimeFormat(this.locale, { numeric: "auto" }).format(
            releasedSince,
            "day"
          );
    }
  },
  mounted() {
    // create observer
    this.observer = new IntersectionObserver(([{ target, isIntersecting }]) => {
      if (isIntersecting) {
        this.$emit("intersect", target.querySelector("time").dateTime);
        this.observer.disconnect();
      }
    });
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
  components: {
    Album
  }
};
</script>

<style lang="scss" scoped>
.release-date {
  // Animation
  animation: append-item 0.4s ease;
  // Scroll snap
  scroll-snap-align: start;

  h3 {
    font-size: 1.6rem;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .albums {
    // Display
    display: flex;
    align-items: flex-start;
    margin-left: calc(-1 * var(--margin));
    margin-right: calc(-1 * var(--margin));

    // Removing scrollbar
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    //Scroll snap
    scroll-snap-type: x;
  }
}
</style>
