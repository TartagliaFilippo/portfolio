<script>
import Carousel from "./ui/Carousel.vue";

export default {
  data() {
    return {
      title: "I Miei Progetti",
      projects: [
        {
          id: 1,
          name: "Spotify",
          images: [
            "spotify-1.png",
            "spotify-2.png",
            "spotify-3.png",
            "spotify-4.png",
          ],
          description:
            "Ho creato una riproduzione del layout della rinomata libreria musicale più celebre al mondo, curando attentamente ogni dettaglio dell'interfaccia. Ho sviluppato un template interno che si adatta in modo fluido e intuitivo su diversi dispositivi, garantendo un'esperienza utente ottimale sia su computer che su dispositivi mobili. La mia realizzazione si focalizza sull'estetica accattivante e sull'usabilità intuitiva, assicurando che gli utenti possano esplorare e godere della vasta gamma di contenuti musicali in modo semplice e coinvolgente.",
          technologies: ["HTML", "CSS"],
          link: "https://github.com/TartagliaFilippo/html-css-spotifyweb",
        },
        {
          id: 2,
          name: "Biglietto del treno",
          images: [
            "train-ticket-1.png",
            "train-ticket-2.png",
            "train-ticket-3.png",
            "train-ticket-4.png",
          ],
          description:
            "In questo primo esercizio pratico di JavaScript, ho creato un sistema di compilazione di form. L'obiettivo principale è consentire all'utente di calcolare il costo del proprio biglietto in base a parametri specifici. La logica implementata prevede una serie di input da parte dell'utente, inclusi dati come l'età per determinare il prezzo del biglietto.",
          technologies: ["HTML", "CSS", "JavaScript"],
          link: "https://github.com/TartagliaFilippo/js-biglietto-treno-form",
        },
        {
          id: 3,
          name: "Boolzapp",
          images: [
            "boolzapp-1.png",
            "boolzapp-2.png",
            "boolzapp-3.png",
            "boolzapp-4.png",
          ],
          description:
            "Nel mio ultimo progetto, ho ricreato con cura e attenzione l'interfaccia della celebre app di messaggistica WhatsApp. Una delle sfide principali è stata l'integrazione dei messaggi scritti nelle diverse chat all'interno della mia rappresentazione dati. Ho creato un sistema che gestisce in modo fluido e immediato l'aggiunta e la visualizzazione di messaggi inviati e ricevuti, consentendo agli utenti di vedere la conversazione prendere vita man mano che i messaggi vengono inseriti. Ho introdotto una funzionalità di ricerca che permette agli utenti di filtrare rapidamente i contatti in base ai loro nomi. Questa funzione ottimizza l'esperienza utente, permettendo di trovare facilmente e rapidamente il contatto desiderato all'interno di una lunga lista.",
          technologies: ["HTML", "CSS", "Vue 3"],
          link: "https://github.com/TartagliaFilippo/vue-boolzapp",
        },
        {
          id: 4,
          name: "Boolflix",
          images: ["boolflix-1.png", "boolflix-2.png", "boolflix-3.png"],
          description:
            "Ho replicato la rinomata applicazione Netflix, sfruttando chiamate API per ottenere una vasta gamma di film. L'implementazione si è concentrata sulla ricezione dinamica e organizzata di queste informazioni, classificando accuratamente i film in serie TV e film a sé stanti. Un aspetto cruciale è stato il mapping delle informazioni ricevute dall'API. Ho progettato un sistema che estrae e visualizza le informazioni pertinenti per gli utenti, come le descrizioni dettagliate, le valutazioni e le immagini di copertina dei film. Questo approccio mira a fornire agli utenti una panoramica completa e coinvolgente dei contenuti disponibili, facilitando la loro scelta in base ai propri interessi e preferenze. Per migliorare l'esperienza di navigazione, ho incluso una barra di ricerca intuitiva. Questo strumento consente agli utenti di cercare film specifici in modo rapido e efficiente, offrendo un modo immediato per accedere ai contenuti desiderati senza dover sfogliare un vasto catalogo.",
          technologies: ["HTML", "SCSS", "JavaScript", "Vue 3"],
          link: "https://github.com/TartagliaFilippo/vite-boolflix",
        },
        {
          id: 5,
          name: "Deliveboo",
          images: [
            "deliveboo-1.png",
            "deliveboo-2.png",
            "deliveboo-3.png",
            "deliveboo-4.png",
            "deliveboo-5.png",
            "deliveboo-6.png",
            "deliveboo-7.png",
            "deliveboo-8.png",
            "deliveboo-9.png",
            "deliveboo-10.png",
            "deliveboo-11.png",
          ],
          description:
            "Come culmine del mio corso con Boolean, ho sviluppato un'applicazione completa, suddivisa tra front end e back end, che offre un'esperienza coinvolgente sia agli utenti registrati che a quelli non registrati. L'applicazione è stata progettata per permettere agli utenti di registrarsi sulla piattaforma e creare i propri ristoranti con una vasta gamma di piatti. La componente back end è stata sviluppata per gestire l'interazione con un database MySQL, dove i dati degli utenti, dei ristoranti e dei piatti vengono memorizzati in modo sicuro e strutturato. Utilizzando API, questi dati vengono forniti al front end, consentendo agli utenti di non registrarsi di effettuare ordini in modo semplice e intuitivo. Uno degli aspetti salienti è stata l'implementazione di un sistema di pagamento tramite Braintree, che offre agli utenti una modalità sicura e affidabile per gestire le transazioni finanziarie. Per gli utenti registrati, ho integrato funzionalità aggiuntive, come la visualizzazione dell'andamento delle vendite tramite grafici realizzati con Chart.js.",
          technologies: ["HTML", "SCSS", "Laravel 9", "Vue 3", "JavaScript"],
          link: "https://github.com/TartagliaFilippo/my-project-deliveboo-back/settings",
        },
      ],
    };
  },

  components: {
    Carousel,
  },
};
</script>

<template>
  <div class="wrapper" id="projects">
    <div class="container">
      <h1>{{ title }} &#128205;</h1>
      <p class="subtitle">
        Benvenuti nel mio portfolio! Qui troverete una varietà di progetti che
        coprono diverse tecnologie e framework, che ho utilizzato dall'inizio
        del mio percorso
      </p>
      <div v-for="project in projects" :key="project.id" class="card-project">
        <div class="image-section">
          <Carousel :images="project.images" />
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
            <a :href="project.link">Codice</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables.scss" as *;
.wrapper {
  background-color: var(--bg-primary);
  padding: 100px 0 50px;
  color: var(--cl-text);

  h1 {
    color: var(--cl-title);
  }

  .card-project {
    display: flex;
    align-items: stretch;
    padding-bottom: 1rem;
    margin: 1rem;
    border-bottom: 1px dashed var(--bg-grey);

    &:nth-child(odd) {
      flex-direction: row;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    .image-section {
      width: 40%;
      display: flex;
      align-items: center;
    }
    .content-section {
      width: 60%;
      padding: 0 5px;

      h3 {
        color: var(--cl-title);
      }

      p {
        color: var(--cl-text);
      }

      ul {
        list-style-type: none;
        padding-left: 0;
        font-weight: bold;
        li {
          &::before {
            content: "- ";
          }
        }
      }

      .button {
        width: fit-content;
        border: 1px solid var(--bg-primary-500);
        background-color: var(--bg-primary-300);
        padding: 3px 8px;
        border-radius: 5px;
        margin-bottom: 20px;
        box-shadow: 1px 1px var(--bg-black);

        &:hover {
          background-color: var(--bg-primary);
          box-shadow: 0 0 var(--bg-black);
          border: 2px solid var(--bg-primary-500);
          font-weight: bold;

          a {
            color: var(--bg-primary-300);
          }
        }
        a {
          text-decoration: none;
          color: var(--bg-primary);
        }
      }
    }
  }
}
</style>
