<template>
    <div id="web-reputation">
        <div class="intro">
            <div id="title">
                <h1>Web Reputation</h1>
            </div>

            <p>Stando a ciò che afferma Wikipedia:</p>

            <div class="def">
                <div class="line"></div>
                <p>
                    La Web Reputation, o reputazione sul web, è un'attività di
                    raccolta e monitoraggio di tutto quanto viene
                    detto/pubblicato online ovvero sul Web riguardo a un
                    determinato prodotto, servizio, progetto o evento.
                </p>
                <div class="line"></div>
            </div>

            <p>
                Come anticipato da me negli articoli precedenti, le attività che
                svolgiamo online sono pesantemente monitorizzate ed è
                estremamente difficile, se non impossibile, eliminare le tracce
                che abbiamo lasciato.
            </p>

            <p>
                Ciò che possiamo regolamentare e gestire sono le informazioni
                che decidiamo di condividere, che contribuiranno poi alla nostra
                Web Reputation. Il singolo è responsabile di ciò che pubblica
                online, proprio com'è responsabile delle sue azioni nella vita
                reale. La reputazione online è analoga a quella della vita fuori
                dallo schermo, le uniche differenze sono le sensazioni e i
                sentimenti che proviamo: dietro a una tastiera ci sentiamo più
                sicuri, quasi anonimi in quanto "non ci mettiamo la faccia", ma
                il pericolo è lo stesso di quello nella vita reale, se non più
                accentuato.
            </p>

            <p>
                Dunque, saper regolare la nostra reputazione online è un fattore
                decisivo e ciò vale anche per aziende e personaggi pubblici:
            </p>

            <div class="def">
                <div class="line"></div>
                <p>
                    Avere una buona reputazione online è importante, anche se a
                    diverso titolo, sia per le persone fisiche, sia per le
                    aziende poiché per entrambe la reputazione digitale incide
                    inevitabilmente sulla propria attività. Lo stretto e
                    indissolubile rapporto che si è ormai venuto a creare tra
                    online e offline comporta che gli effetti dei propri
                    comportamenti non siano limitati solo all’ambito nel quale
                    vengono realizzati, ma si estendano anche oltre i confini
                    dello stesso. Se la web reputation di una persona è formata
                    dall’insieme delle azioni che la stessa compie online,
                    bisogna includere in queste anche quelle tracce
                    apparentemente trascurabili che si lasciano, per esempio,
                    nei vari social network che si utilizzano, come i commenti e
                    i like ai contenuti altrui.
                </p>
                <div class="line"></div>
            </div>

            <p>
                In sostanza, l'immagine che si costruisce un'azienda online
                influisce pesantemente sul marketing e sull'aspetto finanziario.
                Un cattivo esempio online da parte di un'ente genera danni alla
                sua immagine, influendo negativamente sui guadagni.
            </p>
        </div>
        <div class="stats">
            <p>
                Di seguito riporto un
                <a
                    class="link"
                    href="https://www.statista.com/statistics/998017/activities-increasing-e-commerce-companies-reputation-in-italy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >grafico</a
                >
                riguardante i fattori principali che possono influire sulla
                quotazione in borsa di un'azienda e-commerce in Italia.
            </p>

            <p>
                <i
                    >Se stai visualizzando il sito da mobile le scritte
                    potrebbero essere tagliate, fai click su una belle barre per
                    leggere il testo</i
                >
            </p>

            <div class="chart">
                <ReputationChart />
            </div>
        </div>
    </div>
</template>

<script>
import ReputationChart from "../components/ReputationChart.vue";

export default {
    components: {
        ReputationChart,
    },
};
</script>

<style scoped>
.link {
    text-decoration: none;
    color: var(--accent-main-green);
    border-bottom: 1px solid var(--accent-main-green);
    padding-bottom: 3px;
}

ul li {
    /* Text color */
    color: var(--main-font-color);
    list-style-type: none;
}

ul li:before {
    /* Unicode bullet symbol */
    content: "\25B8 ";
    /* Bullet color */
    color: var(--accent-main-green);
    padding-right: 0.5em;
}

#web-reputation {
    text-align: justify;
    font-size: 18px;
    line-height: 2em;
    width: 80%;
    /* since im poor and i dont have a wide ass monitor ima lock this at my width so it looks good and i dont have problems */
    max-width: 1526px;

    margin: auto;
}

@media only screen and (max-width: 1300px) {
    #web-reputation {
        width: 100%;
    }
}

.intro,
.stats {
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 65%;
    margin: auto;
}
#title {
    font-size: 35px;
    text-align: left;
    font-weight: 900;
    color: var(--accent-main-green);

    width: 100%;
    height: 170px;
    margin: auto;

    margin-top: 100px;
}

@media only screen and (max-width: 1420px) {
    #title h1 {
        font-size: 55px;
    }
}

@media only screen and (max-width: 900px) {
    #title {
        text-align: center;
        height: 100px;
        margin-top: 50px;
    }
    #title h1 {
        font-weight: 900;
        font-size: 35px;
    }
    .intro {
        width: 90%;
    }
    .stats {
        width: 90%;
    }
}

.def {
    width: 70%;
    margin: auto;
    text-align: justify;

    margin-top: 20px;
}

@media only screen and (max-width: 750px) {
    .def {
        width: 90%;
    }
}

span {
    color: var(--accent-main-green);
    font-weight: bold;
}

.line {
    width: 100%;
    height: 2px;
    background-color: var(--accent-main-green);
    margin-bottom: 30px;
    margin-top: 30px;
}

.chart {
    margin-top: 50px;
}
</style>