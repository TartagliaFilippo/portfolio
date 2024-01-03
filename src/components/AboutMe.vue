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
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="wave"
      style="transform: rotate(0deg); transition: 0.3s"
      viewBox="0 -3 1440 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="0" y2="0">
          <stop stop-color="#c7a991" offset="0%" />
          <stop stop-color="#c7a991" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,20L26.7,31.7C53.3,43,107,67,160,78.3C213.3,90,267,90,320,86.7C373.3,83,427,77,480,65C533.3,53,587,37,640,25C693.3,13,747,7,800,16.7C853.3,27,907,53,960,56.7C1013.3,60,1067,40,1120,30C1173.3,20,1227,20,1280,30C1333.3,40,1387,60,1440,56.7C1493.3,53,1547,27,1600,13.3C1653.3,0,1707,0,1760,3.3C1813.3,7,1867,13,1920,23.3C1973.3,33,2027,47,2080,55C2133.3,63,2187,67,2240,66.7C2293.3,67,2347,63,2400,53.3C2453.3,43,2507,27,2560,16.7C2613.3,7,2667,3,2720,11.7C2773.3,20,2827,40,2880,40C2933.3,40,2987,20,3040,16.7C3093.3,13,3147,27,3200,35C3253.3,43,3307,47,3360,45C3413.3,43,3467,37,3520,36.7C3573.3,37,3627,43,3680,43.3C3733.3,43,3787,37,3813,33.3L3840,30L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
      />
    </svg>
  </div>
  <div class="wrapper" id="aboutMe">
    <div class="container">
      <h2 class="text-center">
        {{ title }}
        &#128512;
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
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="wave"
      style="transform: rotate(0deg); transition: 0.3s"
      viewBox="0 -1 1440 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="0" y2="0">
          <stop stop-color="#c7a991" offset="0%" />
          <stop stop-color="#c7a991" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,20L26.7,31.7C53.3,43,107,67,160,78.3C213.3,90,267,90,320,86.7C373.3,83,427,77,480,65C533.3,53,587,37,640,25C693.3,13,747,7,800,16.7C853.3,27,907,53,960,56.7C1013.3,60,1067,40,1120,30C1173.3,20,1227,20,1280,30C1333.3,40,1387,60,1440,56.7C1493.3,53,1547,27,1600,13.3C1653.3,0,1707,0,1760,3.3C1813.3,7,1867,13,1920,23.3C1973.3,33,2027,47,2080,55C2133.3,63,2187,67,2240,66.7C2293.3,67,2347,63,2400,53.3C2453.3,43,2507,27,2560,16.7C2613.3,7,2667,3,2720,11.7C2773.3,20,2827,40,2880,40C2933.3,40,2987,20,3040,16.7C3093.3,13,3147,27,3200,35C3253.3,43,3307,47,3360,45C3413.3,43,3467,37,3520,36.7C3573.3,37,3627,43,3680,43.3C3733.3,43,3787,37,3813,33.3L3840,30L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.svg-top {
  background-color: #eeeae2;
}
.wrapper {
  background-color: $shade-100;
  .container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .button {
      border: 1px solid $shade-500;
      background-color: $shade-100;
      padding: 3px 8px;
      border-radius: 5px;
      margin-bottom: 20px;
      box-shadow: 1px 1px black;

      &:hover {
        background-color: $shade-300;
        color: $shade-100;
        box-shadow: 0 0 black;

        a {
          color: $shade-100;
        }
      }
      a {
        text-decoration: none;
        color: $grey-text;
      }
    }
  }
}
.svg-bottom {
  rotate: 180deg;
  background-color: $footer-color;
}
</style>
