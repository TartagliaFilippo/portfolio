<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "AboutMe Titolo",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h2 class="text-center">{{ title }}</h2>
      <div class="content-subtitle">
        <p class="text-center">varie cose</p>
        <p class="text-center">varie cose</p>
        <p class="text-center">varie cose</p>
        <p class="text-center">varie cose</p>
      </div>
      <div class="btn btn-primary">link git</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
}
</style>
