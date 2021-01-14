<template>
    <div id="privacy">
        <div class="intro">
            <div id="title">
                <h1>Privacy Online</h1>
            </div>

            <p>La definizione di Privacy stando a Wikipedia è la seguente:</p>

            <div class="def">
                <div class="line"></div>
                <p>
                    Il termine inglese privacy, in italiano riservatezza o
                    privatezza, indica - nel lessico giuridico-legale - il
                    diritto alla riservatezza della vita privata di una persona.
                </p>
                <div class="line"></div>
            </div>

            <p>
                Un diritto che ultimamente le persone stanno ignorando
                eccessivamente, sostentendo di «non avere nulla da nascondere»
                (o addirittura come ho sentito dire: «ormai mi hanno già rubato
                tutta la privacy che avevo»). Un diritto importante per la
                salvezza dell'uomo nel mondo hi-tech.
            </p>

            <p>
                Per capire al meglio questo astrale concetto mi piace ricorrere
                alla frase:
                <span
                    >«Non esiste nessun cloud, è solo il computer di qualcun
                    altro»</span
                >.
            </p>

            <p>
                Nel quotidiano non si da mai peso a certi servizi, ci piace
                immaginare che i nostri preziosi dati siano salvati da qualche
                parte, nel mondo, in un posto <span>magicamente sicuro</span> a
                cui può accedere solo il proprietario. Questo esempio vale per
                una serie di servizi che vanno dalla nostra app di messaggistica
                preferita ai nostri conti in banca (pensandoci, cosa sono i
                soldi? Una semplice entry in un <span>database</span> hostato
                chi sa dove), il problema è che qualcuno ha in mano i nostri
                dati, nel suo computer (spesso data centres giganteschi), e può
                tranquillamente manipolarli in seguito alla nostra frettolosa
                accettazione dei <span>Termini e Condizioni d'uso</span>.
            </p>

            <p>
                Un'altra citazione recita:
                <span>«Quando un prodotto è gratis, siamo noi il prodotto»</span
                >. Pensandoci, tutti quelle piattaforme a cui accediamo
                tranquillamente ogni giorno, dal nostro fidato cellulare nella
                nostra tasca, nella nostra casa, sotto la nostra rete, nel
                nostro paese, sono <span>grandi container di dati</span>, bytes
                per l'esattezza, liberi di essere analizzati (e purtroppo spesso
                venduti) e manipolati, tutto invisibilmente ai nostri occhi.
                Questi container dovranno guadagnare in qualche modo giusto? Ma
                come fanno se non ci vendono qualcosa? <span>Metadati</span>,
                quella parte di dati che descrive i dati stessi, che indica dove
                siamo, che dispositivo stiamo usando, che siti abbiamo visitato
                e quando, a chi abbiamo scritto e chi abbiamo chiamato. Sì,
                anche se non possono ascoltare le nostre chiamate sanno chi
                chiamiamo e a che ora. Dati che se messi assieme e collegati
                nella maniera corretta possono tracciare un profilo estremamente
                dettagliato di noi stessi, <span>senza vederci in volto</span>.
            </p>

            <p>
                Dunque, se per restare al passo del progresso e della società
                sempre più digitale, come facciamo ad evitare di essere così
                esposti? La risposta è sorprendentemente semplice: basta
                scegliere bene i nostri alleati. Anziché fidarsi dei tech-giants
                e delle loro sporche politche sulla privacy, perfettamente stese
                per far sentire sicuri gli utenti, possiamo affidarci a servizi
                più piccoli e <span>trasparenti</span>, magari
                <span>non-profit</span>, con la sicurezza come loro più grande
                punto di forza. Servizi come
                <a
                    class="link"
                    href="https://signal.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Signal</a
                >
                al posto di WhatsApp, ormai in mano
                <a class="link" href="https://www.facebook.com/" target="_blank"
                    >ai rivenditori numeri uno di dati sensibili</a
                >. Certo, sono meno conosciuti dei giganti, ma perché seguire
                una moda e rimetterci in termini di Privacy?
            </p>

            <p>
                Per dare peso alla nostra riservatezza dobbiamo ricordarci
                costantemente che quello che facciamo circolare nell'Internet
                rimane nell'Internet, e ogni singola azione è monitorata e
                <a
                    class="link"
                    href="https://www.techopedia.com/definition/596/data-logging"
                    target="_blank"
                    rel="noopener noreferrer"
                    >loggata</a
                >
                (alcune volte per pochi istanti, altre volte per sempe). Ci sono
                enti che loggano unicamente i dati necessari per il
                funzionamento del servizio, altri che loggano ogni singolo byte
                che possono trovare, ed è compito del cliente saper riconoscere
                chi fa il ruolo del finto buono.
            </p>
            <p>
                Se tu, lettore, fossi il proprietario di un social network con
                un miliardo di utenti attivi al mese e un'azienda pubblicitaria
                ti offrisse 100 euro a utente per i metdati di quest'ultimo che
                sei in grado di raccogliere nella tua app, accetteresti
                l'offerta? Accetteresti anche se si trattasse di dati quali:
                posizione, ricerche sul tuo social, servizi collegati
                all'account del tuo social e dati della
                <span>fotocamera</span> per forza abilitata per fare le storie?
                Sarebbero <span>1e+11</span> euro in un colpo solo.
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
    color: var(--accent-main-blue);
    border-bottom: 1px solid var(--accent-main-blue);
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
    color: var(--accent-main-blue);
    padding-right: 0.5em;
}

#privacy {
    text-align: justify;
    font-size: 18px;
    line-height: 2em;
}
.intro {
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
    color: var(--accent-main-blue);

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
    color: var(--accent-main-blue);
    font-weight: bold;
}

.line {
    width: 100%;
    height: 2px;
    background-color: var(--accent-main-blue);
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>