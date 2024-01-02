<script>
export default {
  data() {
    return {
      title: "Footer",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/TartagliaFilippo",
          icon: "github",
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/filippo-tartaglia-4b8382284/",
          icon: "linkedin",
        },
        {
          name: "Gmail",
          link: "pippotartaglia@gmail.com",
          icon: "google",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h4>I miei link di contatto:</h4>
      <div class="footer-body">
        <div class="links-container">
          <div v-for="(link, index) in links" :key="index">
            <a :href="link.link" target="_blank">
              <font-awesome-icon :icon="['fab', link.icon]" />
            </a>
          </div>
        </div>
        <div class="support">
          <p>© designed & built by Filippo Tartaglia</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;
.wrapper {
  background-color: $footer-color;
  color: $footer-text;
  padding-top: 10px;

  .footer-body {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .links-container {
      display: flex;
      flex-direction: row;
      gap: 20px;

      a {
        color: $secondary-color;

        &:hover {
          color: $links-color;
        }
      }
    }
  }
}
</style>
