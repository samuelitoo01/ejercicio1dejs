function Ejerciciouno(a, b, operation) {
  switch (operation) {
    case "suma":
      return console.log(a + b);

    case "resta":
      return console.log(a - b);

    case "multiplicacion":
      return console.log(a * b);

    case "division":
      return console.log(a / b);

    default:
      console.error(`La operacion ${operation} no es valida!!`);
  }
}

Ejerciciouno(3,4,"multiplicacion")