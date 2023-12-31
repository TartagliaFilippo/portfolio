<script>
import Welcome from "./components/Welcome.vue";
import Navbar from "./components/ui/Navbar.vue";
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
    Navbar,
    Projects,
    AboutMe,
    Footer,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <Welcome></Welcome>
  <Navbar></Navbar>
  <Projects></Projects>
  <AboutMe></AboutMe>
  <Footer></Footer>
</template>

<style lang="scss"></style>
