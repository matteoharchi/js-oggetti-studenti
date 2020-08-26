$(document).ready(function(){
    var studente = {
        "nome": "Matteo",
        "cognome": "Harchi",
        "eta": 28
    }
    for (var key in studente) {
        console.log(studente[key]);
    }
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
    var templateStudente = $(".customers-list li");
    for (var i = 0; i < partecipanti.length; i++){
        console.log(partecipanti[i].nome);
        templateStudente[i].append(partecipanti[i].nome + " " + partecipanti[i].cognome);
    };

    $("#confirm").click(inserimentoDati);


    function inserimentoDati(){

        var newName = $("#name").val();
        var newSurname = $("#surname").val();
        var newAge = parseInt($("#age").val());
        var nuovoUtente = {
            "nome" : newName,
            "cognome": newSurname,
            "età" : newAge,
        };
        partecipanti.push(nuovoUtente);
        var addStudent = templateStudente.clone();
        $(".list").append(addStudent);
        var nuovoUtenteName = nuovoUtente.nome +" " + nuovoUtente.cognome;
        addStudent.text(nuovoUtenteName);
    }

    console.log(partecipanti);


})
