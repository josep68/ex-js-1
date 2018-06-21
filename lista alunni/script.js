var alunni = ["Marco","Luca","Alberto"];
var nome_utente = prompt("Qual'è il tuo nome?");
alunni.push(nome_utente);
document.write("<ul>");
for (var i = 0; i < 4; i++) {
  document.write("<li>"+alunni[i]+"</li>");
}
document.write("</ul>");
