<script>
export default {
  data() {
    return {
      title: "Welcome",
    };
  },

  mounted() {
    const gradientElement = this.$el.querySelector(".absolute-gradient");

    const desiredHeight = window.innerHeight * 0.63;

    // Applica l'altezza desiderata all'elemento .absolute-gradient dopo un piccolo ritardo per consentire la transizione
    setTimeout(() => {
      gradientElement.style.height = `${desiredHeight}px`;
    }, 100); // Puoi modificare il ritardo se necessario per ottenere l'effetto desiderato
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="absolute-gradient"></div>
    <div class="container">
      <div class="header-text">
        <div class="main-content">
          <span class="author-name">Filippo Tartaglia</span>
          <h1 class="title">Full Stack Web Developer</h1>
          <h2 class="subtitle">
            <p>Architetto Digitale:</p>
            <p>Costruendo il Futuro, Linea di Codice per Linea di Successo</p>
          </h2>
        </div>
        <div class="scroll-button">
          <a href="#projects"
            ><font-awesome-icon icon="arrow-down" /> scorri
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.wrapper {
  height: 110vh;
  background: $background-color;
  overflow: hidden;
  position: relative;

  .absolute-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 45%;
    z-index: 0;
    background: $shade-100;
    transition: height 3s linear;
  }
  .container {
    height: 100%;
    .header-text {
      position: absolute;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
      .main-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .author-name {
          font-size: 1.5rem;
          color: $grey-text;
        }
        .title {
          color: $title-welcome;
        }
        .subtitle {
          color: $shade-500;
          animation: changeColor 4s linear;
        }
        @keyframes changeColor {
          0% {
            color: $grey-text; /* Colore di partenza */
          }
          100% {
            color: $shade-500; /* Colore finale */
          }
        }
      }
      .scroll-button {
        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
