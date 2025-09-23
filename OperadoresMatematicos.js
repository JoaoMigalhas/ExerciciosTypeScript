// Explicação sobre Operadores Matemáticos e Aritméticos
// Professor: Eduardo Popovici
/*
Operadores matemáticos e aritméticos são utilizados para realizar operações matemáticas em valores numéricos.

1. Operadores Aritméticos Básicos:
   - Soma (+): Adiciona dois valores.
   - Subtração (-): Subtrai um valor de outro.
   - Multiplicação (*): Multiplica dois valores.
   - Divisão (/): Divide um valor pelo outro.
   - Módulo (%): Retorna o resto da divisão.
   - Exponenciação (**): Eleva um número a uma potência.

2. Operadores de Incremento e Decremento:
   - Incremento (++): Aumenta o valor de uma variável em 1.
   - Decremento (--): Diminui o valor de uma variável em 1.

3. Operadores de Atribuição:
   - Atribuição Simples (=): Define um valor para a variável.
   - Atribuição com soma (+=): Adiciona um valor à variável e armazena o resultado.
   - Atribuição com subtração (-=): Subtrai um valor da variável e armazena o resultado.
   - Atribuição com multiplicação (*=): Multiplica a variável por um valor e armazena o resultado.
   - Atribuição com divisão (/=): Divide a variável por um valor e armazena o resultado.
   - Atribuição com módulo (%=): Calcula o resto da divisão da variável por um valor e armazena o resultado.

4. Precedência de Operadores:
   A precedência define a ordem em que as operações são executadas. Multiplicação e divisão possuem maior precedência que soma e subtração. Para modificar a ordem de execução, utilizamos parênteses.
*/
// Explicação sobre o Operador de Módulo (%)
/*
O operador de módulo (%) retorna o resto da divisão entre dois números. Ele é útil para verificar se um número é par ou ímpar, criar ciclos e controlar repetições.

Exemplos:
   - 10 % 3 retorna 1, pois 10 dividido por 3 dá 3 e sobra 1.
   - 8 % 2 retorna 0, pois 8 é divisível por 2 sem deixar resto.
   - 15 % 4 retorna 3, pois 15 dividido por 4 dá 3 e sobra 3.

Este operador é amplamente utilizado em programação para definir padrões de repetição, como em estruturas de loop e verificações condicionais.
*/
// Exemplo 1: Operadores Aritméticos Básicos
var a = 10;
var b = 5;
console.log("Soma:", a + b); // Adição
console.log("Subtração:", a - b); // Subtração
console.log("Multiplicação:", a * b); // Multiplicação
console.log("Divisão:", a / b); // Divisão
console.log("Módulo:", a % b); // Resto da divisão
console.log("Exponenciação:", Math.pow(a, b)); // Potenciação
// Exemplo 2: Operadores de Incremento e Decremento
var contador = 0;
contador++; // Incremento (equivalente a contador = contador + 1)
console.log("Incremento:", contador);
contador--; // Decremento (equivalente a contador = contador - 1)
console.log("Decremento:", contador);
// Exemplo 3: Operadores de Atribuição
var x = 20;
x += 10; // Equivalente a x = x + 10
console.log("Atribuição de Soma:", x);
x -= 5; // Equivalente a x = x - 5
console.log("Atribuição de Subtração:", x);
x *= 2; // Equivalente a x = x * 2
console.log("Atribuição de Multiplicação:", x);
x /= 4; // Equivalente a x = x / 4
console.log("Atribuição de Divisão:", x);
x %= 3; // Equivalente a x = x % 3
console.log("Atribuição de Módulo:", x);
// Exemplo 4: Precedência de Operadores
var resultado = 10 + 5 * 2;
console.log("Precedência Padrão:", resultado);
resultado = (10 + 5) * 2;
console.log("Uso de Parênteses:", resultado);
// Exemplo 5: Operadores Matemáticos em Funções
function calcularQuadrado(num) {
    return Math.pow(num, 2);
}
console.log("Quadrado de 4:", calcularQuadrado(4));
// Exemplo 6: Mais um exemplo de Operador de Módulo
function ehParOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log("O número 7 é:", ehParOuImpar(7));
console.log("O número 10 é:", ehParOuImpar(10));
// Exemplo 7: Mais um exemplo de Função Matemática
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Fatorial de 7:", calcularFatorial(7));
