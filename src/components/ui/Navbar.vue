<script>
export default {
  data() {
    return {
      isSticky: false,
      lastScrollTop: 0,
      selectedTheme: "default",
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  },

  methods: {
    handleScroll() {
      let currentScroll = window.scrollY || window.pageYOffset;

      if (currentScroll > this.lastScrollTop) {
        // Scroll verso il basso
        this.isSticky = false; // Rendi la navbar non sticky
      } else {
        // Scroll verso l'alto
        this.isSticky = true; // Rendi la navbar sticky
      }

      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    },

    changeToDefault() {
      this.selectedTheme = "default";
      this.changeTheme();
    },

    changeToGreen() {
      this.selectedTheme = "green";
      this.changeTheme();
    },

    changeToCyber() {
      this.selectedTheme = "cyber";
      this.changeTheme();
    },

    changeTheme() {
      if (this.selectedTheme === "default") {
        document.documentElement.style.setProperty("--bg-primary", "#eeeae2");
        document.documentElement.style.setProperty(
          "--bg-primary-100",
          "#c7a991"
        );
        document.documentElement.style.setProperty(
          "--bg-primary-300",
          "#6f482a"
        );
        document.documentElement.style.setProperty(
          "--bg-primary-500",
          "#4a301c"
        );
        document.documentElement.style.setProperty("--bg-grey", "#707070");
        document.documentElement.style.setProperty("--bg-black", "#181818");
        document.documentElement.style.setProperty("--cl-link", "#8cb0d9");
        document.documentElement.style.setProperty(
          "--cl-link-hover",
          "#0c3ea1"
        );
        document.documentElement.style.setProperty(
          "--cl-main-title",
          "#d23902"
        );
        document.documentElement.style.setProperty("--cl-text", "#3b3535");
        document.documentElement.style.setProperty("--cl-title", "#bb5f02");
        document.documentElement.style.setProperty(
          "--cl-footer-text",
          "#dfdedefd"
        );
        document.documentElement.style.setProperty("--flash-color", "#ff9a00");
      } else if (this.selectedTheme === "green") {
        document.documentElement.style.setProperty("--bg-primary", "#f2f5f4");
        document.documentElement.style.setProperty(
          "--bg-primary-100",
          "#bae5b3"
        );
        document.documentElement.style.setProperty(
          "--bg-primary-300",
          "#024541"
        );
        document.documentElement.style.setProperty(
          "--bg-primary-500",
          "#012d32"
        );
        document.documentElement.style.setProperty("--bg-grey", "#707070");
        document.documentElement.style.setProperty("--bg-black", "#181818");
        document.documentElement.style.setProperty("--cl-link", "#8cb0d9");
        document.documentElement.style.setProperty(
          "--cl-link-hover",
          "#0c3ea1"
        );
        document.documentElement.style.setProperty(
          "--cl-main-title",
          "#d23902"
        );
        document.documentElement.style.setProperty("--cl-text", "#536250");
        document.documentElement.style.setProperty("--cl-title", "#e5b3b9");
        document.documentElement.style.setProperty(
          "--cl-footer-text",
          "#dfdedefd"
        );
        document.documentElement.style.setProperty("--flash-color", "#ff9a00");
      } else if (this.selectedTheme === "cyber") {
        document.documentElement.style.setProperty("--bg-primary", "#2f4d98");
        document.documentElement.style.setProperty(
          "--bg-primary-100",
          "#101b37"
        );
        document.documentElement.style.setProperty(
          "--bg-primary-300",
          "#4b4bfb"
        );
        document.documentElement.style.setProperty(
          "--bg-primary-500",
          "#01c7ef"
        );
        document.documentElement.style.setProperty("--bg-grey", "#707070");
        document.documentElement.style.setProperty("--bg-black", "#ae0ab9");
        document.documentElement.style.setProperty("--cl-link", "#8cb0d9");
        document.documentElement.style.setProperty(
          "--cl-link-hover",
          "#0c3ea1"
        );
        document.documentElement.style.setProperty(
          "--cl-main-title",
          "#017f98"
        );
        document.documentElement.style.setProperty("--cl-text", "#fff");
        document.documentElement.style.setProperty("--cl-title", "#bb5f02");
        document.documentElement.style.setProperty(
          "--cl-footer-text",
          "#017f98"
        );
        document.documentElement.style.setProperty("--flash-color", "#ff9a00");
      }
    },
  },
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="{ 'navbar-sticky': isSticky }"
    ref="navbar"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#welcome">Filippo Tartaglia</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon :icon="['fab', 'octopus-deploy']" />
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#projects"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#aboutMe">AboutMe</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <font-awesome-icon :icon="['fas', 'gear']" />
            </a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="changeToDefault">Default Theme</a></li>
              <li><a href="#" @click="changeToGreen">Green Theme</a></li>
              <li><a href="#" @click="changeToCyber">Cyber Theme</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/variables.scss" as *;
.navbar {
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-primary-300);
}
.navbar-sticky {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--bg-primary-300);
}
.navbar-brand {
  color: var(--bg-primary);

  &:hover {
    color: var(--flash-color);
    //box-shadow: inset 0px -5px 0px 0px $cl-main-title;
    text-shadow: -1px 1px var(--cl-main-title);
  }
}

.nav-link {
  color: var(--bg-primary);

  &:hover {
    box-shadow: inset 0px -5px 0px 0px var(--bg-primary);
  }
}
.navbar-toggler {
  color: var(--bg-primary);
  border: 1px solid var(--bg-primary);
}

.nav-link.dropdown-toggle {
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(360deg);
    box-shadow: inset 0px 0px 0px 0px var(--bg-primary);
  }
}
.dropdown-toggle::after {
  display: none;
}

.dropdown-menu[data-bs-popper] {
  left: -135px;
  background-color: var(--bg-primary-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
}
</style>
