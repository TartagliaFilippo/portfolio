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
          link: "mailto:pippotartaglia@gmail.com",
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
        <div class="links-container my-2">
          <div v-for="(link, index) in links" :key="index">
            <a :href="link.link" target="_blank">
              <font-awesome-icon :icon="['fab', link.icon]" />
            </a>
          </div>
        </div>
        <div class="support my-2">
          <p>© designed & built by Filippo Tartaglia</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;
.wrapper {
  background-color: var(--bg-black);
  color: var(--cl-footer-text);
  padding-top: 10px;

  .footer-body {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 450px) {
      flex-direction: row;
    }

    .links-container {
      display: flex;
      flex-direction: row;
      gap: 20px;

      a {
        color: var(--cl-link);

        &:hover {
          color: var(--cl-link-hover);
        }
      }
    }
  }
}
</style>
