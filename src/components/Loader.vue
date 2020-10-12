<template>
  <div id="loader">
    <div id="loader-covers">
      <div id="cover-1" class="loader-cover"></div>
      <div id="cover-2" class="loader-cover"></div>
      <div id="cover-3" class="loader-cover"></div>
      <div id="cover-4" class="loader-cover"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
#loader {
  // Display
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  z-index: 1000;
}

#loader-covers {
  // Display
  width: 12rem;
  height: 12rem;
  position: relative;
  // Animation
  transform-style: preserve-3d;
  transform: rotateX(-24deg) perspective(50rem);

  .loader-cover {
    // Display
    position: absolute;
    width: 12rem;
    height: 12rem;
    border-radius: 0.4rem;
    // Animation
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  #cover-1 {
    background-color: var(--deezer-main-flat-3);
    animation-name: cover-1;
  }

  #cover-2 {
    background-color: var(--deezer-main-flat-2);
    animation-name: cover-2;
  }

  #cover-3 {
    background-color: var(--deezer-main-flat-1);
    animation-name: cover-3;
  }

  #cover-4 {
    background-color: black;
    animation-name: cover-4;
  }

  @media (prefers-color-scheme: dark) {
    #cover-4 {
      background-color: white;
    }
  }
}

@keyframes cover-1 {
  0% {
    opacity: 0.7;
    transform: translateY(0) translateZ(-7.2rem);
  }
  75% {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
  85% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(0);
  }
  90% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(-7.2rem);
  }
  100% {
    opacity: 0.7;
    transform: translateY(0) translateZ(-7.2rem);
  }
}

@keyframes cover-2 {
  0% {
    opacity: 0.8;
    transform: translateY(0) translateZ(-4.8rem);
  }
  50% {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
  60% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(0);
  }
  65% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(-7.2rem);
  }
  75% {
    opacity: 0.7;
    transform: translateY(0) translateZ(-7.2rem);
  }
  100% {
    transform: translateZ(-4.8rem);
    opacity: 0.8;
  }
}

@keyframes cover-3 {
  0% {
    opacity: 0.9;
    transform: translateY(0) translateZ(-2.4rem);
  }
  25% {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
  35% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(0);
  }
  40% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(-7.2rem);
  }
  50% {
    opacity: 0.7;
    transform: translateY(0) translateZ(-7.2rem);
  }
  100% {
    opacity: 0.9;
    transform: translateY(0) translateZ(-2.4rem);
  }
}

@keyframes cover-4 {
  0% {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
  10% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(0);
  }
  15% {
    opacity: 0;
    transform: translateY(-12rem) translateZ(-7.2rem);
  }
  25% {
    opacity: 0.7;
    transform: translateY(0) translateZ(-7.2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
}
</style>
