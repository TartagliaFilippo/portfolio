<script>
export default {
  data() {
    return {
      isSticky: false,
      lastScrollTop: 0,
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
        <span class="navbar-toggler-icon"></span>
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
              <li><a class="dropdown-item" href="#">first color</a></li>
              <li><a class="dropdown-item" href="#">second color</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
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
  background-color: $bg-primary-300;
}
.navbar-sticky {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: $bg-primary-300;
}
.navbar-brand {
  color: $bg-primary;

  &:hover {
    color: $flash-color;
    //box-shadow: inset 0px -5px 0px 0px $cl-main-title;
    text-shadow: -1px 1px $cl-main-title;
  }
}

.nav-link {
  color: $bg-primary;

  &:hover {
    box-shadow: inset 0px -5px 0px 0px $bg-primary;
  }
}
.nav-link.dropdown-toggle {
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(360deg);
  }
}
.dropdown-toggle::after {
  display: none;
}

.dropdown-menu[data-bs-popper] {
  left: -135px;
}
</style>
