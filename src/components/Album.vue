<template>
  <article class="album" :style="cssVars">
    <a :href="appLink(album.link)" class="album-cover" target="_blank">
      <img
        :src="cover"
        :alt="album.title"
        class="cover"
        loading="lazy"
        :width="`${coverSize}px`"
        :height="`${coverSize}px`"
      />
      <span class="album-type badge">{{ album.record_type }}</span>
    </a>
    <h4 class="album-title">
      <a :href="appLink(album.link)" target="_blank">{{ album.title }}</a>
    </h4>
    <div class="album-artists">
      <a
        v-for="artist in album.artists"
        :key="artist.id"
        :href="appLink(artist.link)"
        class="artist"
        target="_blank"
        >{{ artist.name }}</a
      >
    </div>
  </article>
</template>

<script>
export default {
  name: "Album",
  props: {
    album: Object
  },
  data() {
    return {
      coverSize: 120
    };
  },
  methods: {
    appLink(link) {
      return `${link}?app_id=${this.getAppId}`;
    }
  },
  computed: {
    cover() {
      return this.album.cover !== ""
        ? this.album.cover
        : `https://api.deezer.com/album/${this.album.id}/image`;
    },
    cssVars() {
      return {
        "--cover-size": `${this.coverSize}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.album {
  // Display
  flex-basis: var(--cover-size);
  flex-shrink: 0;
  flex-grow: 0;
  padding-left: var(--margin);
  padding-right: var(--margin);
  // Animation
  animation: append-item 0.4s ease;
  //Scroll snap
  scroll-snap-align: start;

  .album-cover {
    position: relative;
    display: flex;

    .cover {
      border-radius: var(--border-radius);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      background: var(--cover-color);
    }

    .album-type {
      position: absolute;
      bottom: 0.4rem;
      right: 0.4rem;
    }
  }

  .badge {
    padding: 0.4rem;
    background: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
    border-radius: var(--border-radius);
  }

  .album-title {
    // Display
    margin: 0.4rem 0;
  }

  // Ading comma beween artists names
  .artist + .artist:before {
    content: ", ";
  }
}
</style>
