<script>
import Welcome from "./components/Welcome.vue";
import Projects from "./components/Projects.vue";
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/ui/Footer.vue";

export default {
  data() {
    return {
      title: "Il gestionale",
    };
  },

  components: {
    Welcome,
    Projects,
    AboutMe,
    Footer,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <Welcome></Welcome>
  <Projects></Projects>
  <AboutMe></AboutMe>
  <Footer></Footer>
</template>

<style lang="scss"></style>
