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
                anni, cercando di valutare pro, contro ed eventuali rischi.
            </p>

            <p>
                Secondo lo <span>Stato Italiano</span>, «La Carta di identità
                elettronica permette al cittadino l’autenticazione con i
                <span>massimi livelli di sicurezza</span> nei servizi online
                degli enti che ne consentono l’utilizzo.». In sostanza
                costituisce un metodo per <span>autenticarsi</span> online
                presso gli enti che ne permettono il processo. Un metodo molto
                più sicuro della coppia email-password e dell'autenticazione a
                due fattori. Infatti vede impiego pressso servizi dello Stato
                Italiano che richiedono un alto livello di sicurezza.
            </p>

            <p>
                Ma come ben sappiamo, sono tutti bravi con le parole quando c'è
                in ballo la sicurezza degli utenti. Di conseguenza proviamo a
                dare un'occhiata:
            </p>

            <div class="pic">
                <img src="../assets/cie.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
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