const funciones= require('./modulo/funciones');

var ramTotal= funciones.conversionTotal();
var disponibleRam=funciones.conversionDisponible();
var bites = funciones.conversiobites();
var disponibleR = funciones.conversiodisponibleram();
var  sisteOperativo= funciones.conversioOperativo();
var freciencia  = funciones.conversiofrecuencia();


console.table(['Ram Total En bytes: ' + bites]);
console.table(['Ram Total En GB: ' + ramTotal]);

console.table(['Ram Disponible En bytes: ' + disponibleR]);
console.table(['Ram Disponible en GB: ' + disponibleRam]);

console.table(['Sistema Operativo ' + sisteOperativo]);

console.table(freciencia.map((registro)=> registro.times));
console.table(freciencia.map((velocidad)=>velocidad.speed));


