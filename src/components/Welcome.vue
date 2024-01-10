<script>
export default {
  data() {
    return {
      title: "Welcome",
    };
  },

  created() {
    window.scrollTo(0, 0);
  },

  mounted() {
    const gradientElement = this.$el.querySelector(".absolute-gradient");

    const desiredHeight = window.innerHeight * 0.64;

    // Applica l'altezza desiderata all'elemento
    setTimeout(() => {
      gradientElement.style.height = `${desiredHeight}px`;
    }, 400);
  },
};
</script>

<template>
  <div class="wrapper" id="welcome">
    <div class="absolute-gradient"></div>
    <div class="container">
      <div class="header-text">
        <div class="main-content">
          <span class="author-name">Filippo Tartaglia</span>
          <h1 class="title">Full Stack Web Developer</h1>
          <h2 class="subtitle">
            <p>Creatore Web:</p>
            <p>Progettazione Intuitiva per Esperienze Coinvolgenti</p>
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
  background: var(--bg-primary);
  overflow: hidden;
  position: relative;

  .absolute-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0%;
    z-index: 0;
    background: var(--bg-primary-100);
    transition: height 2s linear;
  }
  .container {
    height: 100vh;
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
          color: var(--cl-text);
          transform-origin: left;
          transform: perspective(400px) rotateY(90deg);
          opacity: 0;
          animation: openBook 2s ease forwards;
        }
        @keyframes openBook {
          0% {
            opacity: 0;
            transform: perspective(400px) rotateY(90deg);
          }
          100% {
            opacity: 1;
            transform: perspective(400px) rotateY(0deg);
          }
        }
        .title {
          color: var(--cl-title);
          position: relative;
          left: 100%;
          animation: slideLeft 1.5s ease forwards;
        }
        @keyframes slideLeft {
          0% {
            left: 100%;
          }
          100% {
            left: 0;
          }
        }
        .subtitle {
          color: var(--bg-primary-500);
          animation: changeColor 2s linear;
        }
        @keyframes changeColor {
          0% {
            color: var(--bg-white);
          }
          100% {
            color: var(--bg-primary);
          }
        }
      }
      .scroll-button {
        a {
          text-decoration: none;
          position: relative;
          display: inline-block;
          color: var(--cl-link-hover);

          font-size: 1.5rem;
          transition: transform 0.3s ease-out;

          &:hover {
            animation: bounce 1.5s ease infinite;
            color: var(--cl-link);
          }
        }
      }
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-12px);
        }
        60% {
          transform: translateY(-8px);
        }
      }
    }
  }
}
</style>
