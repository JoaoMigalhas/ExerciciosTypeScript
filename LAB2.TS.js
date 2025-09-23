"use strict";
//Exericios lab2 em type tio edu
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var v1 = { placa: 'ABC1D23', tipo: 'carro', ano: 2020, fabricante: 'Chevrolet', cor: 'preto' };
console.log('1) Veículo:', v1); //mostrar a interface criado para o veiculo
// 2) Lista + filtros + mapeamentos
var frota = [
    v1,
    { placa: 'XYZ9K88', tipo: 'moto', ano: 2018, fabricante: 'Honda', cor: 'vermelho' },
    { placa: 'JKL2M34', tipo: 'caminhao', ano: 2022, fabricante: 'Volvo', cor: 'branco' },
];
var soCarros = frota.filter(function (v) { return v.tipo === 'carro'; });
var anos = frota.map(function (v) { return v.ano; });
console.log('2) Filtros/Map:', { soCarros: soCarros, anos: anos });
// 3) Enum + helpers
var CorPadrao;
(function (CorPadrao) {
    CorPadrao["Preto"] = "preto";
    CorPadrao["Branco"] = "branco";
    CorPadrao["Vermelho"] = "vermelho";
})(CorPadrao || (CorPadrao = {}));
function pintar(v, cor) {
    return __assign(__assign({}, v), { cor: cor });
}
console.log('3) Pintando veículo:', pintar(v1, CorPadrao.Branco));
// 4) Função utilitária: normalizar placa
function normalizarPlaca(p) {
    return p.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}
console.log('4) Placa normalizada:', normalizarPlaca('abc-1d23')); //verificar se é normalizada
// 5) Map por tipo (agrupamento)
var porTipo = new Map();
for (var _i = 0, frota_1 = frota; _i < frota_1.length; _i++) {
    var v = frota_1[_i];
    var arr = (_a = porTipo.get(v.tipo)) !== null && _a !== void 0 ? _a : [];
    arr.push(v);
    porTipo.set(v.tipo, arr);
}
console.log('5) Agrupados por tipo:', Array.from(porTipo.entries()));
