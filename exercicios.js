// Exercício 1 - Classificação de Temperatura
let temperatura = 25;

if (temperatura < 15) {
    console.log("Muito frio");
} else if (temperatura >= 15 && temperatura <= 20 ) {
    console.log("Frio");
} else if (temperatura >= 21 && temperatura <= 28) {
    console.log("Agradável");
} else if (temperatura > 28 ) {
    console.log("Muito quente");
}


// Exercício 2 - Nota e Conceito 
let nota = 10

if (nota >= 9) {
    console.log ("Conceito A");
} else if (nota >= 7) {
    console.log ("Conceito B");
} else if (nota >= 5) {
    console.log ("Conceito C");
}else {
    console.log ("Conceito D");
}


// Exercício 3 - Dia da Semana 
let dia = 7

if (dia == 1) {
    console.log ("Domingo"); 
} else if (dia == 2) {
    console.log ("Segunda-feira");
} else if (dia == 3) {
    console.log ("Terça-feira");
} else if (dia == 4) {
    console.log ("Quarta-feira");
} else if (dia == 5) {
    console.log ("Quinta-feira");
} else if (dia == 6) {
    console.log ("Sexta-feira");
}else if (dia == 7) {
    console.log ("Sábado");
} else {
    console.log ("Dia Inválido")
}


// Desafio - Calculadora de IMC 
let peso = 60;
let altura = 1.65;

let imc = peso / (altura * altura);

console.log("IMC:", imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obeso");
}
