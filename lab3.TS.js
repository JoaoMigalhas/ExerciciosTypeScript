"use strict";
//Exericios lab3 em type tio edu
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Leituras simples + média
var leiturasC = [26, 23.5, 21, 30, 26.5];
var mediaTemp = Number((leiturasC.reduce(function (a, b) { return a + b; }, 0) / leiturasC.length).toFixed(2));
console.log('1) Média (°C):', mediaTemp); //calcular media
function cToF(c) { return Number((c * 9 / 5 + 32).toFixed(2)); }
var l1 = { timestamp: new Date().toISOString(), tempC: 25.3 };
console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC)); //converte grau celsius
// 3) Enum de alerta + função de status
var Alerta;
(function (Alerta) {
    Alerta["Ok"] = "OK";
    Alerta["Aten\u00E7\u00E3o"] = "ATENCAO";
    Alerta["Cr\u00EDtico"] = "CRITICO";
})(Alerta || (Alerta = {}));
function classificar(tC) {
    if (tC >= 28)
        return Alerta.Crítico;
    if (tC >= 25)
        return Alerta.Atenção;
    return Alerta.Ok;
}
console.log('3) Status:', leiturasC.map(function (t) { return ({ t: t, status: classificar(t) }); }));
// 4) Moving Average (média móvel simples) com janela N
function mediaMovel(valores, janela) {
    var out = [];
    for (var i = 0; i < valores.length; i++) {
        var ini = Math.max(0, i - janela + 1);
        var slice = valores.slice(ini, i + 1);
        out.push(Number((slice.reduce(function (a, b) { return a + b; }, 0) / slice.length).toFixed(2)));
    }
    return out;
}
console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3));
function formatTemp(valor, unidade) {
    if (unidade === 'C')
        return "".concat(valor.toFixed(1), " \u00B0C");
    return "".concat(valor.toFixed(1), " \u00B0F");
}
console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F')); //defiir o formato
