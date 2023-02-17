const os = require('os');

function ramTotal(){
   return os.totalmem();
}
function disponibleRam(){
    return os.freemem();
}
function sistemaOperativo(){
    return os.type();
}

function datosFrecuencia(){
    return os.cpus();   
}

module.exports.ramTotal=ramTotal;
module.exports.disponibleRam=disponibleRam;
module.exports.sistemaOperativo=sistemaOperativo;
module.exports.datosFrecuencia=datosFrecuencia;