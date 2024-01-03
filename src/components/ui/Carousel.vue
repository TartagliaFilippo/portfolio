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
    <div
      class="slides"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img :src="pathImage + image" alt="Slide" />
      </div>
    </div>
    <button @click="prevSlide">Prev</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.slides {
  display: flex;
  transition: transform 0.3s ease;
}
.slide {
  height: 100%;
}
img {
  max-width: 100%;
  height: auto;
  background-size: cover;
}
</style>
