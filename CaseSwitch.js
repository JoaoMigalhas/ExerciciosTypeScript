// Exemplo de código do professor Eduardo Popovici
// Aula de lógica de programação com type 
// Declaração de uma variável chamada "mes" do tipo number e atribuição do valor 4.
var mes = 6;
// Estrutura switch para verificar o valor da variável "mes" e exibir o nome correspondente do mês.
// Verificação de igualdade
switch (mes) {
    case 1: // "case" verifica se a variável "mes" tem o valor especificado e executa o bloco correspondente.
        console.log("Janeiro"); // "console.log" exibe a mensagem no console do navegador ou terminal.
        break; // Interrompe a execução para evitar a execução de outros casos - se não colocar o break ele segue executando todos os itens, ou seja, exibe tudo direto.
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho"); //ira imprimir Junho pelo valor ser 6
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default: // "default" é executado quando nenhum dos "case" anteriores corresponde ao valor da variável.
        console.log("Mês inválido"); // Se "mes" não estiver entre 1 e 12, exibe "Mês inválido".
}
