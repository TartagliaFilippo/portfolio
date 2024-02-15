<script>
export default {
  data() {
    return {
      currentIndex: 0,
      pathImage: "/portfolio/images-screen/",
    };
  },

  props: {
    images: Array,
  },

  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<template>
  <div class="carousel">
    <div class="slides">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="{ slide: true, active: index === currentIndex }"
      >
        <img :src="pathImage + image" alt="Slide" />
      </div>
    </div>
    <div class="buttons">
      <div class="button-slide" @click="prevSlide">
        <font-awesome-icon :icon="['fas', 'caret-left']" />
      </div>
      <div class="thumb-nails">
        <div
          v-for="(image, index) in images"
          class="thumb"
          :class="{ active: index === currentIndex }"
        ></div>
      </div>
      <div class="button-slide" @click="nextSlide">
        <font-awesome-icon :icon="['fas', 'caret-right']" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;
.carousel {
  position: relative;
  width: 100%;
  padding: 0.1rem 1rem;
  overflow: hidden;
  .slides {
    display: flex;
    transition: transform 0.3s ease;

    .slide {
      height: 100%;
      display: none;

      &.active {
        display: block;
        border-radius: 10px;
        overflow: hidden;
      }

      img {
        max-width: 100%;
        height: auto;
        background-size: contain;
      }
    }
  }
  .buttons {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .button-slide {
      border: 1px solid var(--bg-primary-500);
      background-color: var(--bg-primary-300);
      border-radius: 3px;
      padding: 2px 10px;
      color: var(--bg-primary);
      cursor: pointer;

      &:hover {
        background-color: var(--bg-primary);
        color: var(--bg-primary-300);
        font-weight: bold;
        // border: 2px solid var(--bg-primary-500);
      }
    }
    .thumb-nails {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .thumb {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: var(--bg-grey);

        &.active {
          background-color: var(--bg-primary-500);
        }
      }
    }
  }
}
</style>
