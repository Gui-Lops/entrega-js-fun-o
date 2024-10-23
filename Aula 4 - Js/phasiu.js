//-----[ Crie uma função que receba um número e retorne se ele é par ou ímpar usando o operador %. ]-----//

let n = 3496;

if (n % 2 === 0) {
    true
} else {
    false
}

//-----[ Faça uma função que verifique se uma pessoa é maior de idade (18 anos) com base no ano de nascimento fornecido. ]-----//

let anoNascimento = 1946;

let anoAtual = 2024;

if (anoAtual - anoNascimento > 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você não é maior de idade")
}

//-----[ Desenvolva uma função que receba duas notas e, se a média for maior ou igual a 7, retorne "Aprovado", senão, retorne "Reprovado". ]-----//

let notas = [7, 10];

if ((notas[0] + notas[1]) / notas.length >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//-----[ Escreva uma função que receba a idade de uma pessoa e retorne se ela pode votar (idade ≥ 16). ]-----//

let idade = 17;

if (idade > 16) {
    console.log("você pode votar");
} else {
    console.log("você não pode votar");
}

let num1 = 1;
let num2 = 2;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//-----[ Escreva uma função que, com base na quantidade de horas trabalhadas, calcule se a pessoa fez hora extra (mais de 40 horas). ]-----//

let horas = [10, 8, 12, 7, 9]
let calculo = (horas[0] + horas[1] + horas[2] + horas[3] + horas[4] - 40)

if ( calculo === 0) {
    console.log("O funcionario não fez horas extras")
} else {
    console.log(`O funcionario tem ${calculo} horas extras`)
}

//-----[ Crie um código que receba um número e verifique se ele está dentro do intervalo entre 10 e 50. ]-----//

let betwen = 69;

if (betwen < 10 || betwen > 50) {
    console.log(`O número ${betwen} está entre 10 e 50`)
} else {
    console.log(`O número ${betwen} não está entre 10 e 50`);
}

//-----[ Desenvolva um script que determine se uma letra é uma vogal ou consoante. ]-----//

let letra = "b";

if ('aeiouAEIOU'.includes(letra)) {
    console.log(`A letra ${letra} é uma vogal`);
} else {
    console.log(`A letra ${letra} é uma consoante`);
}

//-----[ Faça uma função que receba o nome de um mês e verifique se é um mês de férias (dezembro, janeiro ou julho). ]-----//

let mes = "janeiro"
let mesDeFerias = "janeiro,  julho, dezembro"

if (mesDeFerias.includes(mes)) {
    console.log(`O mês ${mes} é de ferias`);
} else {
    console.log(`O mês ${mes} não é um mes de ferias`);
}

//-----[ Crie uma função que receba a nota de um aluno e retorne "A", "B", "C", "D" ou "F", baseado em critérios de faixa de notas. ]-----//

let nota = 10;

if (nota >= 9) {
    console.log("Sua nota foi A");
} else if (nota = 8 && nota < 9 ) {
    console.log("Sua nota foi B");
} else if (nota = 7 && nota < 8 ) {
    console.log("Sua nota foi C");
} else if (nota = 6 && nota < 7 ) {
    console.log("Sua nota foi D");
} else if (nota < 6) {
    console.log("Sua nota foi F");
}

//-----[ Crie uma função que receba três números e retorne o maior deles. Utilize condicionais if-else. ]-----//

let nmr1 = 10;
let nmr2 = 20;
let nmr3 = 30;

if (nmr1 > nmr2 && nmr1 > nmr3) {
    console.log(`O número ${nmr1} é o maior`); 
} else if (nmr2 > nmr3 && nmr2 > nmr1) {
    console.log(`O número ${nmr2} é o maior`); 
} else if (nmr3 > nmr1 && nmr3 > nmr2) {
    console.log(`O número ${nmr3} é o maior`);
}

//-----[ Escreva uma função que receba uma string e retorne se o primeiro caractere é uma letra maiúscula ou minúscula. ]-----//

let text = "Hello World!";
let charat = (text.charAt(0));
if (charat >= "A" && charat <= "Z") {
    console.log(`A primeira letra (${charat}) da palavra é maiuscula `);
} else {
    console.log(`A primeira letra (${charat}) da palavra não é maiuscula`)
}

//-----[ Crie um código que, com base na temperatura fornecida, retorne se está frio (< 15ºC), moderado (entre 15ºC e 30ºC), ou quente (> 30ºC). ]-----//

let temperatura = 22

if (temperatura < 15) {
    console.log("a temperatura está fria")
} else if (temperatura <= 15 || temperatura >= 30) {
    console.log("a temperatura está moderada");
} else if (temperatura > 30) {
    console.log("a temperatura está quente");
}

//-----[ Desenvolva uma função que receba o ano e retorne se é bissexto ou não. ]-----//

let ano = 2020

if (ano % 4 === 0) {
    console.log("Esse ano é bissexto");
} else {
    console.log("Esse ano não é bissexto");
}

//-----[ Escreva uma função que receba dois números e verifique se ambos são divisíveis por 5. ]-----//

let n1 = 5;
let n2 = 15;

if (n1 % 5 === 0 && n2 % 5 === 0) {
    console.log(true)
} else {
    console.log(false)
}

//-----[ Crie um código que simule um semáforo: ao receber a cor (verde, amarelo, vermelho), retorne uma ação (parar, esperar, seguir). ]-----//

let numeroAleatorio = Math.round(Math.random() * -(1 - 3));

if (numeroAleatorio === 0) {
    console.log("O semaforo está vermelho, parar!")
} else if (numeroAleatorio === 1) {
    console.log("O semaforo está amarelo, espere!")
} else if (numeroAleatorio === 2) {
    console.log("O semforo está verde, passe!")
}

//-----[ Faça uma função que verifique se um número está na lista de números primos até 100. ]-----//

let nPrimo = 9;

if (nPrimo % nPrimo === 0 && nPrimo % 2 !== 0 && nPrimo % 3 !== 0 && nPrimo <= 100) {
    console.log(`${nPrimo} é um número primo e esta entre os numeros primos até 100`)
} else if (nPrimo % nPrimo === 0 && nPrimo % 2 === 0 || nPrimo % 3 === 0) {
    console.log(`${nPrimo} não é um número primo que esta entre os numeros primos até 100`)
}

//-----[ Crie uma função que determine se um número é perfeito (a soma de seus divisores é igual a ele). ]-----//

let perfeito = 6;
let soma2 = 0;

for (let i = 1; i <= perfeito /2; i++) {
    if(perfeito % i === 0) {
        soma2 += i;
    }
}

for(;soma2 === perfeito;) {
    console.log(`${perfeito} é um número perfeito`)
    break;
}

for (;soma2 !== perfeito;) {
    console.log(`${perfeito} não é um número perfeito`)
    break;
}

//-----[ Desenvolva uma função que receba um número e retorne se ele é um quadrado perfeito. ]-----//



//-----[ Escreva uma função que receba uma palavra e verifique se é um palíndromo. ]-----//



//-----[ Crie um objeto chamado carro com as propriedades marca, modelo e ano. Faça uma função que retorne uma string com essas informações. ]-----//

console.log(Math.max(1, 3, 2));

//-----[ Faça uma função que receba um array e verifique se um determinado valor está presente nele. Use o método includes(). ]-----//

let ver = "alguma coisa";

if ('aeiou'.includes(ver)) {
    console.log(true)
} else {
    console.log(false)
}

