<script>
export default {
  data() {
    return {
      currentIndex: 0,
      pathImage: "../../../public/images-screen/",
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
      <div class="button-slide" @click="prevSlide">Prev</div>
      <div class="thumb-nails">
        <div
          v-for="(image, index) in images"
          class="thumb"
          :class="{ active: index === currentIndex }"
        ></div>
      </div>
      <div class="button-slide" @click="nextSlide">Next</div>
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
      border: 1px solid $shade-100;
      background-color: $background-color;
      border-radius: 3px;
      padding: 2px 10px;
      color: $grey-text;
      cursor: pointer;

      &:hover {
        background-color: $shade-100;
        color: $shade-300;
      }
    }
    .thumb-nails {
      display: flex;
      flex-direction: row;
      gap: 20px;
      .thumb {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: $grey-text;

        &.active {
          background-color: $shade-300;
          box-shadow: 0px 0px 12px 3px $shade-100;
        }
      }
    }
  }
}
</style>
