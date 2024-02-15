<script>
export default {
  data() {
    return {
      title: "Ciao sono Filippo!",
      paragraphs: [
        "Sono un esploratore del digitale alle prime armi che ha fatto il grande salto nel mondo del coding un anno fa. Il mio viaggio è decollato con il corso Boolean, un'esperienza di 700 ore che ha acceso la mia passione per la creazione di magie digitali attraverso il coding.",
        "Sono un amante del front end, dove trasformo linee di codice in esperienze visive coinvolgenti. Ammetto, le arti della grafica e del design sono ancora un mistero per me, ma la sfida di combinare il mio lato tecnico con la creatività visiva mi affascina e mi spinge a imparare sempre di più.",
        "In costante ricerca di nuove sfide e stimoli, il mio obiettivo è creare esperienze digitali che siano non solo funzionali, ma anche coinvolgenti e memorabili.",
        "Unisciti a me in questo viaggio di scoperta e creatività nel mondo dello sviluppo web!",
      ],
    };
  },
};
</script>

<template>
  <div class="svg-top">
    <svg
      id="visual"
      viewBox="0 0 1400 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <rect x="0" y="0" fill="var(--bg-primary)"></rect>
      <path
        d="M0 50L14.7 47C29.3 44 58.7 38 87.8 41.3C117 44.7 146 57.3 175.2 58C204.3 58.7 233.7 47.3 262.8 47.2C292 47 321 58 350.2 64.8C379.3 71.7 408.7 74.3 437.8 73C467 71.7 496 66.3 525.2 61.2C554.3 56 583.7 51 612.8 48.8C642 46.7 671 47.3 700.2 49C729.3 50.7 758.7 53.3 787.8 55.5C817 57.7 846 59.3 875.2 57.5C904.3 55.7 933.7 50.3 962.8 48.8C992 47.3 1021 49.7 1050.2 52.3C1079.3 55 1108.7 58 1137.8 62C1167 66 1196 71 1225.2 68.3C1254.3 65.7 1283.7 55.3 1312.8 49.8C1342 44.3 1371 43.7 1385.5 43.3L1400 43L1400 101L1385.5 101C1371 101 1342 101 1312.8 101C1283.7 101 1254.3 101 1225.2 101C1196 101 1167 101 1137.8 101C1108.7 101 1079.3 101 1050.2 101C1021 101 992 101 962.8 101C933.7 101 904.3 101 875.2 101C846 101 817 101 787.8 101C758.7 101 729.3 101 700.2 101C671 101 642 101 612.8 101C583.7 101 554.3 101 525.2 101C496 101 467 101 437.8 101C408.7 101 379.3 101 350.2 101C321 101 292 101 262.8 101C233.7 101 204.3 101 175.2 101C146 101 117 101 87.8 101C58.7 101 29.3 101 14.7 101L0 101Z"
        fill="var(--bg-primary-100)"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
  </div>
  <div class="wrapper" id="aboutMe">
    <div class="container">
      <h2 class="text-center">
        {{ title }}
        <span class="smile jump">&#128512;</span>
      </h2>
      <div class="content-subtitle">
        <p class="text-center">
          Il portfolio di <a href="https://www.jemimaabu.com/">Jemima Abu</a> è
          stata la mia fonte di ispirazione per questo progetto. Ammiro come
          fonde magistralmente il design e lo sviluppo per creare progetti che
          siano non solo funzionali, ma anche opere d'arte digitali.
        </p>
        <p class="text-center" v-for="content in paragraphs">{{ content }}</p>
      </div>
      <div class="button">
        <a href="https://github.com/TartagliaFilippo">
          <font-awesome-icon :icon="['fab', 'github']" /> GitHub
        </a>
      </div>
    </div>
  </div>
  <div class="svg-bottom">
    <svg
      id="visual"
      viewBox="0 0 1400 100"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <rect x="0" y="0" fill="var(--bg-black)"></rect>
      <path
        d="M0 61L21.2 54C42.3 47 84.7 33 127.2 28.8C169.7 24.7 212.3 30.3 254.8 37.8C297.3 45.3 339.7 54.7 382 58C424.3 61.3 466.7 58.7 509 58.8C551.3 59 593.7 62 636.2 54.8C678.7 47.7 721.3 30.3 763.8 22.2C806.3 14 848.7 15 891 23.8C933.3 32.7 975.7 49.3 1018 49.7C1060.3 50 1102.7 34 1145.2 30.8C1187.7 27.7 1230.3 37.3 1272.8 42.3C1315.3 47.3 1357.7 47.7 1378.8 47.8L1400 48L1400 0L1378.8 0C1357.7 0 1315.3 0 1272.8 0C1230.3 0 1187.7 0 1145.2 0C1102.7 0 1060.3 0 1018 0C975.7 0 933.3 0 891 0C848.7 0 806.3 0 763.8 0C721.3 0 678.7 0 636.2 0C593.7 0 551.3 0 509 0C466.7 0 424.3 0 382 0C339.7 0 297.3 0 254.8 0C212.3 0 169.7 0 127.2 0C84.7 0 42.3 0 21.2 0L0 0Z"
        fill="var(--bg-primary-100)"
        stroke-linecap="round"
        stroke-linejoin="miter"
      ></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.svg-top {
  background-color: var(--bg-primary);
}
.wrapper {
  background-color: var(--bg-primary-100);
  .container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: var(--bg-primary-500);
    }

    @keyframes jumpAnimation {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .content-subtitle {
      color: var(--cl-text);
      a {
        color: var(--cl-link-hover);
        text-decoration: none;

        &:hover {
          color: var(--cl-link);
          text-decoration: line-through;
        }
      }
    }
    .jump {
      display: inline-block;

      &:hover {
        animation: jumpAnimation 1s infinite;
        animation-timing-function: ease-in-out;
      }
    }

    .button {
      border: 1px solid var(--bg-primary-500);
      background-color: var(--bg-primary-300);
      padding: 3px 8px;
      border-radius: 5px;
      margin-bottom: 20px;
      box-shadow: 1px 1px var(--bg-black);

      &:hover {
        background-color: var(--bg-primary-100);
        color: var(--bg-primary);
        box-shadow: 0 0 var(--bg-primary);
        font-weight: bold;
        // border: 2px solid var(--bg-primary-500);

        a {
          color: var(--bg-primary-500);
        }
      }
      a {
        text-decoration: none;
        color: var(--bg-primary-100);
      }
    }
  }
}
.svg-bottom {
  width: 100%;
  height: 100%;
  background-color: var(--bg-black);
  overflow: hidden;
}
</style>
