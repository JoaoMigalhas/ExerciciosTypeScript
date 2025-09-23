/**
 * Exercício 01 – Olá Mundo
 * Objetivo: imprimir uma mensagem no console.
 */
console.log("Olá, TypeScript!");
/**
 * Exercício 02 – Variáveis simples
 * Declare nome, idade e cidade e imprima uma frase.
 */
var nome = "Joao";
var idade = 20;
var cidade = "São Paulo";
console.log("Meu nome \u00E9 ".concat(nome, ", tenho ").concat(idade, " anos e moro em ").concat(cidade, "."));
/**
 * Exercício 03 – Par ou Ímpar
 * Dado um número, diga se é par ou ímpar.
 */
var numero = 785657; // altere para testar
if (numero % 2 === 0) {
    console.log("".concat(numero, " \u00E9 PAR."));
}
else {
    console.log("".concat(numero, " \u00E9 \u00CDMPAR."));
}
/**
 * Exercício 04 – Maioridade
 * Dada uma idade, diga se é maior (>=18) ou menor de idade.
 */
var idadePessoa = 16; // altere para testar
if (idadePessoa >= 18) {
    console.log("Maior de idade.");
}
else {
    console.log("Menor de idade.");
}
/**
 * Exercício 05 – Média de Notas
 * Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
 */
var n1 = 5.9;
var n2 = 6.7;
var n3 = 3.6;
var media = (n1 + n2 + n3) / 3;
console.log("M\u00E9dia: ".concat(media.toFixed(2)));
if (media >= 6) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
/**
 * Exercício 06 – Aprovado com faltas
 * Regra: aprovado se nota >= 7 E faltas <= 10.
 * Caso contrário, reprovado.
 */
var materia = "Matemática";
var nota = 10; // experimente alterar
var faltas = 0; // experimente alterar
if (nota >= 7 && faltas <= 10) {
    console.log("Aprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")"));
}
else {
    console.log("Reprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")"));
}
/**
 * Exercício 07 – Tabuada
 * Mostre a tabuada de 1 a 10 de um número.
 */
var base = 5; // altere para testar
for (var i = 1; i <= 10; i++) {
    console.log("".concat(base, " x ").concat(i, " = ").concat(base * i));
}
/**
 * Exercício 08 – Contagem Regressiva
 * Conte de 10 até 1 e ao final exiba "Lançar foguete!".
 */
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lançar foguete!");
/**
 * Exercício 09 – Função Soma
 * Crie uma função que recebe dois números e retorna a soma.
 */
function somar(a, b) {
    return a + b;
}
// Chamada da função (exemplo):
var resultadoSoma = somar(15, 67);
console.log("Soma: ".concat(resultadoSoma));
/**
 * Exercício 10 – Calculadora simples
 * Função que recebe dois números e uma operação (+, -, *, /).
 * Retorna o resultado. Trata divisão por zero.
 */
function calcular(a, b, op) {
    if (op === "+")
        return a + b;
    if (op === "-")
        return a - b;
    if (op === "*")
        return a * b;
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
console.log("10 + 5 = ".concat(calcular(10, 5, "+")));
console.log("10 - 5 = ".concat(calcular(10, 5, "-")));
console.log("10 * 5 = ".concat(calcular(10, 5, "*")));
console.log("10 / 5 = ".concat(calcular(10, 5, "/")));
/**
 * Exercício 11 – Juros Simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 * Taxa em decimal (5% = 0.05).
 */
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
// Exemplo:
var capital = 1650;
var taxa = 0.02;
var tempo = 12;
var vfSimples = jurosSimples(capital, taxa, tempo);
console.log("Juros simples -> VF: R$ ".concat(vfSimples.toFixed(2)));
/**
 * Exercício 12 – Juros Compostos
 * Valor Final = Capital * (1 + Taxa) ^ Tempo
 * Taxa em decimal (ex.: 5% = 0.05).
 */
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa, tempo);
}
// Exemplo:
var capitalC = 1000;
var taxaC = 0.05;
var tempoC = 12;
var vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log("Juros compostos -> VF: R$ ".concat(vfCompostos.toFixed(2)));
/**
 * Exercício 13 – Conversor de Temperatura
 * F = C * 1.8 + 32
 */
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
// Exemplo:
var c = 28;
var f = celsiusParaFahrenheit(c);
console.log("".concat(c, "\u00B0C equivalem a ").concat(f.toFixed(1), "\u00B0F"));
/**
 * Exercício 14 – Sistema de Notas
 * Retornar: A (>=90), B (>=80), C (>=70), D (>=60), F (<60)
 */
function conceito(nota) {
    if (nota >= 90)
        return "A";
    else if (nota >= 80)
        return "B";
    else if (nota >= 70)
        return "C";
    else if (nota >= 60)
        return "D";
    else
        return "F";
}
// Exemplos:
console.log("Nota 95 -> Conceito ".concat(conceito(95)));
console.log("Nota 82 -> Conceito ".concat(conceito(82)));
console.log("Nota 73 -> Conceito ".concat(conceito(73)));
console.log("Nota 61 -> Conceito ".concat(conceito(61)));
console.log("Nota 42 -> Conceito ".concat(conceito(42)));
