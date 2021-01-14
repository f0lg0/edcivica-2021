<template>
    <div id="idd">
        <div class="intro">
            <div id="title">
                <h1>Identità digitale</h1>
            </div>

            <p>
                La definizione di Identità Digitale stando a Wikipedia è la
                seguente:
            </p>

            <!-- Move this to component -->
            <div class="def">
                <div class="line"></div>
                <p>
                    L'identità digitale è l'insieme delle
                    <span>risorse digitali</span> associate in maniera
                    <span>univoca</span> ad una persona fisica che la
                    identifica, rappresentandone la volontà, durante le sue
                    attività digitali. L'identità digitale, di norma, viene
                    presentata per <span>accedere</span> ad un sistema
                    informatico o ad un sistema informativo o per la
                    sottoscrizione di documenti digitali.
                </p>
                <div class="line"></div>
            </div>

            <p>
                In altre parole è la maniera in cui una persona si
                <span>autentica</span> online per un determinato servizio, che
                sia un semplice account Google o un account bancario. Ciò
                comprende le generalità dell'utente e una serie di informazioni
                aggiuntive, quali email, password, PINs o dati
                <span>biometrici</span>. Tali dati permettono agli enti online
                di assicurarsi che l'dentità dell'utente che sta facendo uso del
                servizio sia effettivamente verificata.
            </p>

            <p>
                Il più noto esempio di autenticazione è la coppia
                <span>email-password</span>
                associata a una persona.
            </p>
            <p>
                Tale metodo è spesso sconsigliato in servizi sensibili, come il
                portale di una banca, in favore dell'
                <span>autenticazione a due fattori</span> caratterizzata dalla
                presenza di un terzo fattore, spesso un PIN temporaneo,
                accompagnato dalle solite credenziali dell'utente.
            </p>
        </div>

        <div class="cie">
            <h2>Carta d'Identità Elettronica</h2>

            <p>
                Per questa sezione ho deciso di analizzare la sicurezza della
                Carta d'Identità Elettronica introdotta in Italia negli ultimi
                anni, cercando di valutare eventuali rischi.
            </p>

            <p>
                Secondo lo <span>Stato Italiano</span>, «La Carta di identità
                elettronica permette al cittadino l’autenticazione con i
                <span>massimi livelli di sicurezza</span> nei servizi online
                degli enti che ne consentono l’utilizzo.». In sostanza
                costituisce un metodo per <span>autenticarsi</span> online
                presso gli enti che ne permettono il processo. Un metodo molto
                più sicuro della coppia email-password e dell'autenticazione a
                due fattori. Infatti vede impiego presso servizi dello Stato
                Italiano che richiedono un alto livello di sicurezza.
            </p>

            <p>
                Ma come ben sappiamo, sono tutti bravi con le parole quando c'è
                in ballo la sicurezza degli utenti. Di conseguenza proviamo a
                dare un'occhiata (avviso che questa sezione entrerà in dettagli
                tecnici, con termini tecnici):
            </p>

            <div class="pic">
                <img src="../assets/cie.jpg" />
            </div>

            <p>
                La CIE memorizza i seguenti dati all'interno del
                <span>microchip</span>:
            </p>
            <ul>
                <li>Comune emettitore</li>
                <li>Nome, cognome, luogo e data di nascita</li>
                <li>Sesso, statura, cittadinanza</li>
                <li>Immagine della firma del titolare</li>
                <li>Validità per l’espatrio</li>
                <li>Fotografi</li>
                <li>
                    Immagini di 2 impronte digitali (un dito della mano destra e
                    un dito della mano sinistra)
                </li>
                <li>
                    Nome e cognome del padre e della madre (nel caso di un
                    minore)
                </li>

                <li>
                    Codice fiscale nei formati alfanumerico e codice a barre
                </li>
                <li>Estremi dell’atto di nascita</li>
                <li>
                    Indirizzo di residenza Comune di iscrizione AIRE (per i
                    cittadini residenti all’estero).
                </li>
            </ul>

            <p>
                Un'ipotetica miniera d'oro di dati sensibili per un potenziale
                hacker; ma non è tutto rosa e fiori neanche per i cattivi in
                quanto i dati sono protetti da vari
                <span
                    >layer di
                    <a
                        target="_blank"
                        class="link"
                        href="https://it.wikipedia.org/wiki/Crittografia"
                        >encryption</a
                    >.</span
                >
            </p>

            <p>
                Anche se la possibilità di clonare la carta è estremamente
                remota (<a
                    target="_blank"
                    class="link"
                    href="https://forum.italia.it/t/clone-cie/18720"
                    >alcuni sviluppatori affermano che sia impossibile</a
                >) i dati nel chip, oltre a viaggiare notevolmente tra enti
                (teoricamente in maniera sicura) in seguito alla creazione della
                tessera, possono essere estratti da software e hardware
                appositi, spesso in mano alle autorità e ai servizi che
                adoperano la CIE, ma anche da semplici applicazioni per
                cellulare che sfruttano la connessione
                <a
                    target="_blank"
                    class="link"
                    href="https://it.wikipedia.org/wiki/Near_Field_Communication"
                    >NFC</a
                >.
            </p>

            <p>
                La domanda da porsi ora è:
                <span>come vengono salvati questi dati?</span>
            </p>

            <p>
                Seguendo il
                <a
                    target="_blank"
                    class="link"
                    href="https://www.cartaidentita.interno.gov.it/wp-content/uploads/2016/07/cie_3.0_-_specifiche_chip.pdf"
                    >manuale ufficiale</a
                >
                fornito dal Governo, il primo passaggio che salta all'occhio di
                una persona po' sgamata in termini di cybersecurity è
                sicuramente la seguente frase:
            </p>

            <div class="def">
                <div class="line"></div>
                <p>
                    5.2) Algoritmi per il protocollo BAC <br /><span
                        >L’unico algoritmo</span
                    >
                    per la derivazione delle chiavi di Secure Messaging è
                    l’algoritmo di cifratura simmetrica
                    <span>3DES a 112 bit con funzionedi hashing SHA-1</span>
                    secondo quanto riportato nel documento [9].
                </p>
                <div class="line"></div>
            </div>

            <p>
                Trascurando un attimo il protocollo Basic Access Control, gli
                algoritmi di cifratura sono entrambi <span>datati</span>,
                specialmente
                <a
                    class="link"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/SHA-1"
                    >SHA-1</a
                >
                ormai obsoleto dal lontano 2005. Come recita di nuovo Wikipedia:
            </p>

            <div class="def">
                <div class="line"></div>
                <p>
                    Since 2005, SHA-1 has not been considered secure against
                    well-funded opponents.
                </p>
                <div class="line"></div>
            </div>

            <p>
                Il <span>Triple DES a 112 bit</span> viene invece considerato
                obsoleto ma allo stesso tempo relativamente sicuro in quanto i
                tempi di cracking sarebbero astronomici. Ciò non toglie che il
                progresso ci ha fornito migliori algoritmi.
            </p>

            <p>
                Questi protocolli vengono menzionati più volte nelle descrizioni
                di tutti i layer di sicurezza, accompagnati da alternative
                moderne considerate estremamente sicure:
            </p>

            <div class="def">
                <div class="line"></div>
                <p>
                    Algoritmi di cifratura simmetrica<br />1) Algoritmo di
                    cifratura simmetrica AES a 192 o 256 bit con funzione di
                    hash SHA-256;<br />2) Algoritmo di cifratura simmetrica 3DES
                    a 112 bit con funzione di hash SHA-1
                </p>
                <div class="line"></div>
            </div>

            <p>
                Il documento tecnico ci pone quindi due scelte, una sicura e una
                meno sicura, senza specificare però
                <span
                    >come vengono scelti i protocolli al momento della creazione
                    della carta</span
                >. Una CIE configurata con i milgiori protocolli è ovviamente
                più sicura delle altre... Resta quindi il dubbio su chi riceverà
                la carta livello 100 e chi la livello 1 (magari il nostro
                presidente Conte avrà diritto al massimo della sicurezza mentre
                noi comuni mortali unicamente alla configurazione base).
            </p>

            <h2>Conclusione</h2>

            <p>
                La CIE risulta essere tecnicamente sicura, un ottimo
                miglioramento rispetto a vecchi sitemi di autenticazione. Ciò
                non toglie l'esposizione a nuovi rischi introdotti dal digitale;
                come si è già visto come in Estonia, considerata il paese più
                tecnologico d'Europa, dove la carta d'identità elettronica è
                stata
                <a
                    target="_blank"
                    href="https://www.cybersecitalia.it/hacker-lestonia-blocca-le-carte-didentita-elettroniche/3939/"
                    class="link"
                    >hackerata</a
                >.
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
    text-decoration: none;
    color: var(--accent-main-yellow);
    border-bottom: 1px solid var(--accent-main-yellow);
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
    color: var(--accent-main-yellow);
    padding-right: 0.5em;
}

#idd {
    text-align: justify;
    font-size: 18px;
    line-height: 2em;
}
.intro,
.cie {
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
    color: var(--accent-main-yellow);

    width: 100%;
    height: 170px;
    margin: auto;

    margin-top: 100px;
}

.def {
    width: 70%;
    margin: auto;
    text-align: justify;

    margin-top: 20px;
}

span {
    color: var(--accent-main-yellow);
    font-weight: bold;
}

.line {
    width: 100%;
    height: 2px;
    background-color: var(--accent-main-yellow);
    margin-bottom: 30px;
    margin-top: 30px;
}

.cie h2 {
    font-size: 35px;
    text-align: left;
    font-weight: 900;
    color: var(--accent-main-yellow);

    width: 100%;
    height: 100px;
    margin: auto;

    margin-top: 100px;
}

.pic {
    width: 40%;
    height: 40%;
    margin: auto;
    margin-top: 30px;
}

.pic img {
    width: 100%;
    height: 100%;
}
</style>