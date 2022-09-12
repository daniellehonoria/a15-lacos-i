/* Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

- ENTRADA
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

- SAÍDA
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"*/


const paises = ["Russia" , "Canada" , "China" , "EUA", "Brasil"]
for ( let i = 0; i <= paises.length; i++ ) {
console.log( `${i+1} - ${paises[i]}`)
} 