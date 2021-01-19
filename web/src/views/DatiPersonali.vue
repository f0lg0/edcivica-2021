<template>
    <div id="dati">
        <div class="intro">
            <div id="title">
                <h1>
                    Riservatezza <br />
                    dei dati personali
                </h1>
            </div>

            <p>
                Una diretta conseguenza della Privacy è la
                <span>tutela della riservatezza dei dati personali</span> da
                parte degli enti digitali e non. Le regole e i procedimenti con
                cui vengono tutelati i dati possono variare da continente a
                continente. Infatti, ci possono essere variazioni tra le leggi
                Europee e quelle Statunitensi.
            </p>

            <p>
                Stando a ciò che afferma il <span>GPDP</span> (Garante per la
                Protezione dei Dati Personali):
            </p>

            <div class="def">
                <div class="line"></div>
                <p>
                    Il diritto alla protezione dei dati personali è un diritto
                    fondamentale dell'individuo ai sensi della Carta dei diritti
                    fondamentali dell'Unione europea (art. 8). Oggi è tutelato,
                    in particolare, dal Regolamento (UE) 2016/679 del Parlamento
                    europeo e del Consiglio, del 27 aprile 2016, relativo alla
                    protezione delle persone fisiche con riguardo al trattamento
                    dei dati personali, nonché alla libera circolazione di tali
                    dati e che abroga la direttiva 95/46/CE [...]
                </p>
                <div class="line"></div>
            </div>

            <p>
                Il GPDP aggiunge anche un layer protettivo per il trattamento
                dei dati indipendentemente dal luogo in cui avviene:
            </p>

            <div class="def">
                <div class="line"></div>
                <p>
                    In particolare, il Regolamento (UE) 2016/679 disciplina il
                    trattamento dei dati personali indipendentemente dal fatto
                    che questo sia effettuato o meno nell'Unione europea, sia
                    quando svolto da titolari o responsabili stabiliti in Ue o
                    in un luogo soggetto al diritto di uno Stato membro dell’Ue
                    in virtù del diritto internazionale pubblico (per esempio
                    l’ambasciata o la rappresentanza consolare di uno Stato
                    membro), sia quando il titolare o il responsabile non è
                    stabilito nell’Unione europea ma le attività di trattamento
                    riguardano:
                </p>
                <ul>
                    <li>
                        l'offerta di beni o la prestazione di servizi ai
                        suddetti interessati nell'Unione europea,
                        indipendentemente dall'obbligatorietà di un pagamento
                        dell'interessato;
                    </li>

                    <p></p>

                    <li>
                        il monitoraggio del loro comportamento nella misura in
                        cui tale comportamento ha luogo all'interno dell'Unione
                        europea.
                    </li>
                </ul>
                <div class="line"></div>
            </div>

            <p>
                Tali concetti si sono ampliati anche al mondo digitale, in
                seguito alla ovvia necessità di tutelare l'incredibile flow di
                dati che avviene in Internet ogni giorno. Sono state introdotte
                infatti <span>politiche in materia di privacy</span> dalla
                <span>Commisione europea</span> riguardanti soprattutto i siti
                con dominio <span>europa.eu</span>:
            </p>

            <div class="def">
                <div class="line"></div>
                <p>
                    Anche se è possibile navigare in quasi tutti questi siti
                    senza dover dare i propri dati personali, in alcuni casi
                    questi servono per poter usufruire dei servizi elettronici
                    richiesti.
                </p>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#dati {
    text-align: justify;
    font-size: 18px;
    line-height: 2em;
    width: 80%;
    margin: auto;
}

@media only screen and (max-width: 1300px) {
    #dati {
        width: 100%;
    }
}

.link {
    text-decoration: none;
    color: var(--accent-main-magenta);
    border-bottom: 1px solid var(--accent-main-magenta);
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
    color: var(--accent-main-magenta);
    padding-right: 0.5em;
}

.intro {
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 65%;
    margin: auto;
}
#title {
    font-size: 30px;
    text-align: left;
    font-weight: 900;
    color: var(--accent-main-magenta);

    width: 100%;
    height: 170px;
    margin: auto;

    margin-top: 100px;
    margin-bottom: 70px;
    line-height: 80px;
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

    .cie {
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
    color: var(--accent-main-magenta);
    font-weight: bold;
}

.line {
    width: 100%;
    height: 2px;
    background-color: var(--accent-main-magenta);
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>