/**
 * Exercício 01 – Olá Mundo
 * Objetivo: imprimir uma mensagem no console.
 */

console.log("Olá, TypeScript!");


/**
 * Exercício 02 – Variáveis simples
 * Declare nome, idade e cidade e imprima uma frase.
 */

let nome: string = "Joao";
let idade: number = 20;
let cidade: string = "São Paulo";

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);


/**
 * Exercício 03 – Par ou Ímpar
 * Dado um número, diga se é par ou ímpar.
 */

let numero: number = 785657; // altere para testar

if (numero % 2 === 0) {
  console.log(`${numero} é PAR.`);
} else {
  console.log(`${numero} é ÍMPAR.`);
}


/**
 * Exercício 04 – Maioridade
 * Dada uma idade, diga se é maior (>=18) ou menor de idade.
 */

let idadePessoa: number = 16; // altere para testar

if (idadePessoa >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}


/**
 * Exercício 05 – Média de Notas
 * Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
 */

let n1: number = 5.9;
let n2: number = 6.7;
let n3: number = 3.6;

let media: number = (n1 + n2 + n3) / 3;

console.log(`Média: ${media.toFixed(2)}`);

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}


/**
 * Exercício 06 – Aprovado com faltas
 * Regra: aprovado se nota >= 7 E faltas <= 10.
 * Caso contrário, reprovado.
 */

let materia: string = "Matemática";
let nota: number = 10;      // experimente alterar
let faltas: number = 0;   // experimente alterar

if (nota >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
} else {
  console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}


/**
 * Exercício 07 – Tabuada
 * Mostre a tabuada de 1 a 10 de um número.
 */

let base: number = 5; // altere para testar

for (let i = 1; i <= 10; i++) {
  console.log(`${base} x ${i} = ${base * i}`);
}


/**
 * Exercício 08 – Contagem Regressiva
 * Conte de 10 até 1 e ao final exiba "Lançar foguete!".
 */

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Lançar foguete!");


/**
 * Exercício 09 – Função Soma
 * Crie uma função que recebe dois números e retorna a soma.
 */

function somar(a: number, b: number): number {
  return a + b;
}

// Chamada da função (exemplo):
let resultadoSoma = somar(15, 67);
console.log(`Soma: ${resultadoSoma}`);


/**
 * Exercício 10 – Calculadora simples
 * Função que recebe dois números e uma operação (+, -, *, /).
 * Retorna o resultado. Trata divisão por zero.
 */

function calcular(a: number, b: number, op: string): number {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }

  console.log("Operação inválida. Use +, -, * ou /.");
  return NaN;
}

// Exemplos:
console.log(`10 + 5 = ${calcular(10, 5, "+")}`);
console.log(`10 - 5 = ${calcular(10, 5, "-")}`);
console.log(`10 * 5 = ${calcular(10, 5, "*")}`);
console.log(`10 / 5 = ${calcular(10, 5, "/")}`);

/**
 * Exercício 11 – Juros Simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 * Taxa em decimal (5% = 0.05).
 */

function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}

// Exemplo:
let capital = 1650;
let taxa = 0.02;
let tempo = 12;

let vfSimples = jurosSimples(capital, taxa, tempo);
console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`);


/**
 * Exercício 12 – Juros Compostos
 * Valor Final = Capital * (1 + Taxa) ^ Tempo
 * Taxa em decimal (ex.: 5% = 0.05).
 */

function jurosCompostos(capital: number, taxa: number, tempo: number): number {
  return capital * Math.pow(1 + taxa, tempo);
}

// Exemplo:
let capitalC = 1000;
let taxaC = 0.05;
let tempoC = 12;

let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);


/**
 * Exercício 13 – Conversor de Temperatura
 * F = C * 1.8 + 32
 */

function celsiusParaFahrenheit(celsius: number): number {
  return celsius * 1.8 + 32;
}

// Exemplo:
let c = 28;
let f = celsiusParaFahrenheit(c);
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);


/**
 * Exercício 14 – Sistema de Notas
 * Retornar: A (>=90), B (>=80), C (>=70), D (>=60), F (<60)
 */

function conceito(nota: number): string {
  if (nota >= 90) return "A";
  else if (nota >= 80) return "B";
  else if (nota >= 70) return "C";
  else if (nota >= 60) return "D";
  else return "F";
}

// Exemplos:
console.log(`Nota 95 -> Conceito ${conceito(95)}`);
console.log(`Nota 82 -> Conceito ${conceito(82)}`);
console.log(`Nota 73 -> Conceito ${conceito(73)}`);
console.log(`Nota 61 -> Conceito ${conceito(61)}`);
console.log(`Nota 42 -> Conceito ${conceito(42)}`);