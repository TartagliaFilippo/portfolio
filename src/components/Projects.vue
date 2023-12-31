<script>
export default {
  data() {
    return {
      title: "I Miei Progetti",
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>{{ title }}</h1>
      <p class="subtitle">scrivo qualcosa riguardo ai miei progetti</p>
      <div class="card-project">
        <div class="left-section">
          <img src="" alt="" />
        </div>
        <div class="right-section">
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

  .card-project {
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
    border-bottom: 1px dashed black;
    .left-section {
      width: 40%;
    }
    .right-section {
      width: 60%;
    }
  }
}
</style>
