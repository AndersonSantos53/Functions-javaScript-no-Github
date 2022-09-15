function imcPaciente (peso,altura) {
    
    const imc = Math.pow(altura,2) / peso;
    return imc;
}

module.exports = imcPaciente;

