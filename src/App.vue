<script>
import Welcome from "./components/Welcome.vue";
import Navbar from "./components/ui/Navbar.vue";
import Projects from "./components/Projects.vue";
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/ui/Footer.vue";

export default {
  data() {
    return {};
  },

  components: {
    Welcome,
    Navbar,
    Projects,
    AboutMe,
    Footer,
  },

  created() {
    window.scroll(0, 0);
  },
};
</script>

<template>
  <Welcome></Welcome>
  <Navbar></Navbar>
  <Projects></Projects>
  <AboutMe></AboutMe>
  <Footer></Footer>
</template>

<style lang="scss"></style>
