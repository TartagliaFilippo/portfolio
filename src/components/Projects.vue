<script>
export default {
  data() {
    return {
      title: "I Miei Progetti",
      projects: [
        {
          id: 1,
          name: "Spotify",
          description:
            "Ho creato una riproduzione del layout della rinomata libreria musicale più celebre al mondo, curando attentamente ogni dettaglio dell'interfaccia. Ho sviluppato un template interno che si adatta in modo fluido e intuitivo su diversi dispositivi, garantendo un'esperienza utente ottimale sia su computer che su dispositivi mobili. La mia realizzazione si focalizza sull'estetica accattivante e sull'usabilità intuitiva, assicurando che gli utenti possano esplorare e godere della vasta gamma di contenuti musicali in modo semplice e coinvolgente.",
          technologies: ["HTML", "CSS"],
          link: "",
        },
        {
          id: 2,
          name: "Biglietto del treno",
          description:
            "In questo primo esercizio pratico di JavaScript, ho creato un sistema di compilazione di form. L'obiettivo principale è consentire all'utente di calcolare il costo del proprio biglietto in base a parametri specifici. La logica implementata prevede una serie di input da parte dell'utente, inclusi dati come l'età per determinare il prezzo del biglietto.",
          technologies: ["HTML", "CSS", "JavaScript"],
          link: "",
        },
        {
          id: 3,
          name: "Boolzapp",
          description:
            "Nel mio ultimo progetto, ho ricreato con cura e attenzione l'interfaccia della celebre app di messaggistica WhatsApp. Una delle sfide principali è stata l'integrazione dei messaggi scritti nelle diverse chat all'interno della mia rappresentazione dati. Ho creato un sistema che gestisce in modo fluido e immediato l'aggiunta e la visualizzazione di messaggi inviati e ricevuti, consentendo agli utenti di vedere la conversazione prendere vita man mano che i messaggi vengono inseriti. Ho introdotto una funzionalità di ricerca che permette agli utenti di filtrare rapidamente i contatti in base ai loro nomi. Questa funzione ottimizza l'esperienza utente, permettendo di trovare facilmente e rapidamente il contatto desiderato all'interno di una lunga lista.",
          technologies: ["HTML", "CSS", "Vue 3"],
          link: "",
        },
        {
          id: 4,
          name: "Boolflix",
          description:
            "Ho replicato la rinomata applicazione Netflix, sfruttando chiamate API per ottenere una vasta gamma di film. L'implementazione si è concentrata sulla ricezione dinamica e organizzata di queste informazioni, classificando accuratamente i film in serie TV e film a sé stanti. Un aspetto cruciale è stato il mapping delle informazioni ricevute dall'API. Ho progettato un sistema che estrae e visualizza le informazioni pertinenti per gli utenti, come le descrizioni dettagliate, le valutazioni e le immagini di copertina dei film. Questo approccio mira a fornire agli utenti una panoramica completa e coinvolgente dei contenuti disponibili, facilitando la loro scelta in base ai propri interessi e preferenze. Per migliorare l'esperienza di navigazione, ho incluso una barra di ricerca intuitiva. Questo strumento consente agli utenti di cercare film specifici in modo rapido e efficiente, offrendo un modo immediato per accedere ai contenuti desiderati senza dover sfogliare un vasto catalogo.",
          technologies: ["HTML", "SCSS", "JavaScript", "Vue 3"],
          link: "",
        },
        {
          id: 5,
          name: "Deliveboo",
          description:
            "Come culmine del mio corso con Boolean, ho sviluppato un'applicazione completa, suddivisa tra front end e back end, che offre un'esperienza coinvolgente sia agli utenti registrati che a quelli non registrati. L'applicazione è stata progettata per permettere agli utenti di registrarsi sulla piattaforma e creare i propri ristoranti con una vasta gamma di piatti. La componente back end è stata sviluppata per gestire l'interazione con un database MySQL, dove i dati degli utenti, dei ristoranti e dei piatti vengono memorizzati in modo sicuro e strutturato. Utilizzando API, questi dati vengono forniti al front end, consentendo agli utenti di non registrarsi di effettuare ordini in modo semplice e intuitivo. Uno degli aspetti salienti è stata l'implementazione di un sistema di pagamento tramite Braintree, che offre agli utenti una modalità sicura e affidabile per gestire le transazioni finanziarie. Per gli utenti registrati, ho integrato funzionalità aggiuntive, come la visualizzazione dell'andamento delle vendite tramite grafici realizzati con Chart.js.",
          technologies: ["HTML", "SCSS", "Laravel 9", "Vue 3", "JavaScript"],
          link: "",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>{{ title }} &#128205;</h1>
      <p class="subtitle">scrivo qualcosa riguardo ai miei progetti</p>
      <div v-for="project in projects" :key="project.id" class="card-project">
        <div class="image-section">
          <img src="" alt="" />
        </div>
        <div class="content-section">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="technology">
            <ul>
              <li v-for="tech in project.technologies">{{ tech }}</li>
            </ul>
          </div>
          <div class="button">
            <a href="">Codice</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.wrapper {
  background-color: $background-color;
  padding: 100px 0 50px;

  .card-project {
    display: flex;
    padding-bottom: 1rem;
    margin: 1rem;
    border-bottom: 1px dashed black;

    &:nth-child(odd) {
      flex-direction: row;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    .image-section {
      width: 40%;
    }
    .content-section {
      width: 60%;
      padding: 0 5px;

      .button {
        width: fit-content;
        border: 1px solid $shade-100;
        background-color: $background-color;
        padding: 3px 8px;
        border-radius: 5px;
        margin-bottom: 20px;

        &:hover {
          background-color: $shade-100;
          color: $grey-color;

          a {
            color: $shade-300;
          }
        }
        a {
          text-decoration: none;
          color: $grey-text;
        }
      }
    }
  }
}
</style>
