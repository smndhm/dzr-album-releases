<template>
  <main id="dzr-album-releases" role="main">
    <router-view />
  </main>
</template>

<script>
/*global DZ*/
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "../node_modules/normalize.css/normalize.css";

:root {
  // Font
  --font-primary: "Open Sans", Arial, sans-serif;
  --font-size: 1.2rem;
  --font-color: #222;
  // Display
  --margin: 1.2rem;
  //
  --background-color: #fff;
  --cover-color: #eee;
  // border
  --border-radius: 0.4rem;
  // Deezer Brand
  --deezer-main-gradient-1: rgba(220, 76, 17, 1);
  --deezer-main-gradient-2: rgba(254, 171, 46, 1);
  --deezer-main-gradient-3: rgba(216, 27, 96, 1);
  --deezer-main-gradient-4: rgba(240, 98, 98, 1);
  --deezer-main-gradient-5: rgba(107, 66, 180, 1);
  --deezer-main-gradient-6: rgba(148, 58, 171, 1);
  --deezer-main-flat-1: rgba(254, 170, 45, 1);
  --deezer-main-flat-2: rgba(239, 84, 102, 1);
  --deezer-main-flat-3: rgba(150, 60, 170, 1);

  // Define variables for dark theme
  @media (prefers-color-scheme: dark) {
    // Font
    --font-color: #ddd;
    //
    --background-color: #222;
    --cover-color: #111;
  }
}

html {
  font-size: 0.625rem;
  font-size: calc(1rem * 0.625);
}

body {
  // Font
  font-family: var(--font-primary);
  font-size: var(--font-size);
  color: var(--font-color);
  // Display
  margin-left: var(--margin);
  margin-right: var(--margin);
  //
  background: var(--background-color);
}

button {
  // Font
  font-size: 1.6rem;
  color: var(--font-color);
  // Display
  padding: 0.8rem 2rem;
  border-radius: 0.4rem;
  border: 0.1rem solid;
  background: transparent;

  &:hover {
    cursor: pointer;
    background: var(--font-color);
    color: var(--background-color);
  }
}

a {
  // Font
  color: var(--font-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

// Deezer
#dz-root {
  visibility: hidden;
}

// Animation
@keyframes append-item {
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
