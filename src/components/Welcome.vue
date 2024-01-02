<script>
export default {
  data() {
    return {
      title: "Welcome",
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="header-text">
        <span class="author-name">Filippo Tartaglia</span>
        <h1 class="title">Full Stack Web Developer</h1>
        <h2 class="subtitle">Qualcosa da implementare</h2>
        <div class="scroll-button">
          <a href="#projects"><font-awesome-icon icon="arrow-down" />scorri </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.wrapper {
  height: 110vh;
  background: linear-gradient(0deg, $shade-100 50%, $background-color 50%);
  .container {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .header-text {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
