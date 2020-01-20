<template>
  <div class="album media">
    <div class="media-left">
      <a :href="album.link" class="image is-64x64" target="_blank">
        <img
          :src="cover"
          :alt="album.title"
          class="cover"
          loading="lazy"
          :width="this.coverSize + 'px'"
          :height="this.coverSize + 'px'"
        />
      </a>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="is-pulled-left">
          <h4 class="is-marginless">
            <a :href="album.link" target="_blank">{{ album.title }}</a>
          </h4>
          <a
            v-for="artist in album.artists"
            v-bind:key="artist.id"
            :href="artist.link"
            class="artist"
            target="_blank"
            >{{ artist.name }}</a
          >
        </div>
        <div class="tag is-pulled-right">{{ album.record_type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    album: Object
  },
  data() {
    return {
      coverSize: 64
    };
  },
  computed: {
    cover() {
      return this.album.cover !== ""
        ? this.album.cover
        : `https://api.deezer.com/album/${this.album.id}/image`;
    }
  }
};
</script>

<style lang="scss" scoped>
.media.album {
  align-items: center;
  animation: append-album 0.4s ease;
}
img.cover {
  border-radius: 4px;
}
// Ading comma beween artists names
.artist + .artist:before {
  content: ", ";
}
// Animation
@keyframes append-album {
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
