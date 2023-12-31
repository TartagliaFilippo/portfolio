<script>
export default {
  data() {
    return {
      title: "I Miei Progetti",
      projects: [1, 2, 3],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="subtitle">scrivo qualcosa riguardo ai miei progetti</p>
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="card-project"
      >
        <div class="image-section">
          <img src="" alt="" />
        </div>
        <div class="content-section">
          <h3>Progetto</h3>
          <p>descrizione progetto</p>
          <div class="technology">
            <span>tech</span>
          </div>
          <div class="btn btn-primary">bottone codice</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  margin: 100px 0 50px 0;

  .card-project {
    display: flex;
    padding-bottom: 1rem;
    border-bottom: 1px dashed black;

    &:nth-child(odd) {
      flex-direction: row;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    .image-section {
      width: 40%;
      border: 1px solid green;
    }
    .content-section {
      width: 60%;
      border: 1px solid red;
    }
  }
}
</style>
