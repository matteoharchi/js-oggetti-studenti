var partecipanti = [

{
    "nome" : "Paolo",
    "cognome" : "Maldini",
    "eta": 50,
},
{
    "nome" : "Alessandro",
    "cognome" : "Nesta",
    "eta": 46,
},
];

for (var i = 0; i<partecipanti.length; i++){
    console.log(partecipanti[i].nome + " " + partecipanti[i].cognome);
};
for (var i = 0; i < (partecipanti.length - 1); i++) {
    $("#confirm").click(inserimentoDati);
}

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
}

console.log(partecipanti);
