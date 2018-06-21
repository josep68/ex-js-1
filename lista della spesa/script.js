var spesa = [];

for (var i = 0; i < 3; i++) {
  spesa.push(prompt("Cosa vuoi aggiungere alla tua spesa ?"));
}
document.write("La tua lista della spesa è: " + spesa.join(", "));
