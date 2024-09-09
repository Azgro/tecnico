function verificaLetraA(str) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      contador++;
    }
  }
  return contador > 0
    ? `A letra 'a' ocorre ${contador} vezes na string.`
    : `A letra 'a' não ocorre na string.`;
}

console.log(verificaLetraA("banana"));
