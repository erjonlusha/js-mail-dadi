// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var email = prompt("Inserisci la tua email");
var dbEmail = ["Andrea@hotmail.it", "Antonio@hotmail.it", "Alfredo@hotmail.it", "erion.lusha@hotmail.it"];
for (var i = 0; i < dbEmail.length; i++) {
  if (email == dbEmail[i]){
    document.getElementById("messaggio").innerHTML = "puoi entrare";
    break
  } else {
    document.getElementById("messaggio").innerHTML = "Non sei in lista";
  }
 }


