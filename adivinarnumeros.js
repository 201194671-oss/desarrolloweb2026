// Genera número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinanza;

do {
  adivinanza = parseInt(prompt("Adivina el número (1-100):"));
  intentos++;

  if (adivinanza < numeroSecreto) {
    alert("Muy bajo");
  } else if (adivinanza > numeroSecreto) {
    alert("Muy alto");
  } else {
    alert("¡Correcto! Lo lograste en " + intentos + " intentos.");
  }
} while (adivinanza !== numeroSecreto);
