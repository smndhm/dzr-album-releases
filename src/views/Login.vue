<template>
  <div id="login" class="has-text-centered">
    <div class="hero">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="title">
            Deezer Album Releases
          </h1>
          <h2 class="subtitle">
            Get your favorite artists albums releases
          </h2>
        </div>
      </div>
    </div>
    <p class="subtitle is-6 is-spaced">
      Connect to your Deezer account to get your favorite artists albums
      releases
    </p>
    <button
      class="button is-link is-light is-large is-rounded"
      v-on:click="login"
    >
      Connect to Deezer
    </button>
  </div>
</template>

<script>
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[dz]" }]*/
/*global DZ*/
export default {
  name: "Login",
  methods: {
    login: () => {
      DZ.login(
        login => {
          console.log("dzConnect", login);
          if (login.authResponse.accessToken) {
            // getAlbumReleases();
          }
        },
        { perms: "basic_access" }
      );
    }
  }
};
</script>
