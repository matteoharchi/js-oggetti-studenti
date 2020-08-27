$(document).ready(function(){
    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
// Stampare a schermo attraverso il for in tutte le proprietà.
    var studente = {
        "nome": "Matteo",
        "cognome": "Harchi",
        "eta": 28
    }
    for (var key in studente) {
        console.log(studente[key]);
    }
    // Creare un array di oggetti di studenti.
    //Ciclare su tutti gli studenti e stampare per
    //ognuno nome e cognome
    var partecipanti = [

        {
            "nome" : "Paolo",
            "cognome" : "Rossi",
            "eta": 50,
        },
        {
            "nome" : "Alessandro",
            "cognome" : "Castaldo",
            "eta": 46,
        },
    ];
    var listaStudenti = ".customers-list";
    var templateStudente = $(".customers-list ul li ");
    for (var i = 0; i < partecipanti.length; i++){
        console.log(partecipanti[i].nome);
        templateStudente[i].append(partecipanti[i].nome + " " + partecipanti[i].cognome);
    };

    //Dare la possibilità all’utente attraverso 3 prompt
    //di aggiungere un nuovo oggetto
    //studente inserendo nell’ordine: nome, cognome e età

    $("#newclient").click(inserimentoDati);


    function inserimentoDati(){

        var newName = prompt("Inserisci il tuo nome");
        var newSurname = prompt("Inserisci il tuo cognome");
        var newAge = parseInt(prompt("Inserisci la tua età"));
        var nuovoUtente = {
            "nome" : newName,
            "cognome": newSurname,
            "età" : newAge,
        };
        partecipanti.push(nuovoUtente);
        var newStudenteTemplate = $("li.template")
        var addStudent = newStudenteTemplate.clone();
        var nuovoUtenteName = nuovoUtente.nome +" " + nuovoUtente.cognome;
        $(".list").append(addStudent.text(nuovoUtenteName));
        $(".list li:last-child").removeClass("template");
    }
})
