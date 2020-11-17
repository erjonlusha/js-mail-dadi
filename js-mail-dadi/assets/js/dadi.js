//  Gioco dei dadi
//  Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//  Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Math.ceil(Math.random() * 6)

var btnElement = document.getElementById('click_me');
btnElement.onclick = function() {
  var g1=Math.ceil(Math.random() * 6);
  var gCPU=Math.ceil(Math.random() * 6);
  document.getElementById("messaggio").innerHTML = g1 + " Player One" + " CPU" + gCPU;
  if (g1 < gCPU){
    var winCpu = winCpu + 1;
    document.getElementById("winner").innerHTML="Il vincitore e CPU";
  } else if (g1 > gCPU) {
    var winCpu = winG1 + 1;
    document.getElementById("winner").innerHTML="Il vincitore e PLAYER 1";
  }
};