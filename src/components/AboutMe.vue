<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "AboutMe",
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
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}
</style>
