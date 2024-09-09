function verificaFibonacci(n) {
  let anterior = 0;
  let atual = 1;
  let proximo;

  if (n == 0 || n == 1) {
    return `O número ${n} pertence a sequência de Fibonacci.`;
  }

  for (let i = 2; i <= n; i++) {
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  if (atual == n) {
    return `O número ${n} pertence a sequência de Fibonacci.`;
  } else {
    return `O número ${n} não pertence a sequência de Fibonacci.`;
  }
}

console.log(verificaFibonacci(21));
