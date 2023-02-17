const os = require('./os')

function conversiobites(){
    return (os.ramTotal());
}

function conversionTotal(){
    return (os.ramTotal()* 0.000000000125);
}


function conversiodisponibleram(){
    return (os.disponibleRam());
}
function conversionDisponible(){
    return (os.disponibleRam()* 0.000000000125);
}


function conversioOperativo(){
    return (os.sistemaOperativo());
}



function conversiofrecuencia(){

    return (os.datosFrecuencia());
}

module.exports.conversiobites=conversiobites;
module.exports.conversionTotal=conversionTotal;

module.exports.conversiodisponibleram=conversiodisponibleram;
module.exports.conversionDisponible=conversionDisponible;

module.exports.conversioOperativo=conversioOperativo;

module.exports.conversiofrecuencia=conversiofrecuencia;

