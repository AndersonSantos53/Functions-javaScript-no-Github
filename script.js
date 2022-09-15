const prompt = require ('prompt-sync')();
const imcPaciente = require ('./icm');

const pesoS = prompt('Escreva seu peso: ');
const peso = Number (pesoS)

const alturaS = prompt('escreva sua altura: ');
const altura = Number(alturaS)



console.log(`Seu imc é: ${imcPaciente} `);
