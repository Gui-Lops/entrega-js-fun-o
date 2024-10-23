//---[ Contexto: Crie uma função chamada saudacao que receba um nome como parâmetro e retorne uma mensagem de saudação personalizada. ]---//

function saudacao() {
    console.log(`Saudações sr.johnny`)
}

saudacao();

//---[ Contexto: Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles. ]---//

function soma(a, b) {
    const soma = a + b;
    
    console.log(`A soma dos números ${a} mais ${b} é ` + soma);
}

soma(34, 56);

//---[ Contexto: Crie uma função chamada parOuImpar que receba um número como parâmetro e retorne "Par" se o número for par e "Ímpar" se for ímpar. ]---//

function parOuImpar(a) {
    if (a % 2 === 0) {
        console.log(`O número ${a} é par`)
    } else {
        console.log(`O número ${a} é impar`);        
    }
}

parOuImpar(2);

//---[ Contexto: Crie uma função chamada multiplica que receba dois números e retorne o produto deles. ]---//

function multiplica(a, b) {
    console.log(`A multiplicação de ${a} x ${b} é ${a * b}`)
}

multiplica(234, 987);

//---[ Contexto: Crie uma função chamada celsiusParaFahrenheit que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é F=C×1.8+32F = C \times 1.8 + 32F=C×1.8+32. ]---//

function celsiusParaFahrenheit(C) {
    console.log(`A conversão de ${C}°C pra fahrenheit é ` + (C * 1.8 + 32) + ` Fahrenheit`)
}

celsiusParaFahrenheit(40);

//---[ Contexto: Crie uma função chamada calculaMedia que receba três números e retorne a média deles. ]---//

function calculaMedia(a, b, c) {
    const media = [a, b, c]
    console.log((a + b + c) / media.length)
}

calculaMedia(10, 8, 9)

//---[ Contexto: Crie uma função chamada minutosParaSegundos que receba a quantidade de minutos e retorne o equivalente em segundos. ]---//

function minutosParaSegundos(a) {
    console.log(`A conversão de ${a} minutos pra segundos é ` + (a * 60) + ` SEGUNDOS`)
}

minutosParaSegundos(938264);

//---[ Contexto: Crie uma função chamada ehPositivo que receba um número e retorne true se for positivo e false se for negativo ou zero. ]---//

function ehPositivo(a) {
    if(a >= 0) {
        console.log(`O número ${a} é positivo`)
    } else {
        console.log(`O número ${a} é negativo`)
    }
}

ehPositivo(-5);

//---[ Contexto: Crie uma função chamada repetePalavra que receba uma palavra e um número como parâmetros, e retorne a palavra repetida esse número de vezes. ]---//

function repetePalavra(numero) {
    if (numero == undefined) {
        numero = 1;
    }
    console.log("Johnny ".repeat(numero))
}

repetePalavra(5);

//---[ Contexto: Crie uma função chamada calculaAreaRetangulo que receba a base e a altura de um retângulo e retorne sua área. ]---//

function calculaAreaRetangulo(base, altura) {
    if (base == undefined && altura == undefined) {
        base = 5
        altura = 5
    }
    console.log(`A área do retangulo de base ${base} e altura ${altura} é ${base * altura}`)
}

calculaAreaRetangulo(10, 45);

//---[ Contexto: Crie uma função chamada verificaPalindromo que receba uma string e retorne true se a palavra for um palíndromo (ou seja, lida da mesma forma de trás para frente) e false caso contrário. ]---//

function palindromo(str) {
    let re = /[\W_]/g;
    let semCaps = str.toLowerCase().replace(re, '');
    let reverseStr = semCaps.split('').reverse().join(''); 
    if (reverseStr === semCaps) {
        console.log(true)
    } else {
        console.log(false)
    }
}
palindromo("subi no ônibus");

//---[ Contexto: Crie uma função chamada fatorial que receba um número inteiro e retorne o fatorial desse número. O fatorial de um número nnn é o produto de todos os números inteiros positivos menores ou iguais a nnn. ]---//

function fatorial(num) {
    if (num < 0) {
        return -1;
    } else if  (num == 0) { 
        return 1;
    } else {
        return (num * fatorial(num - 1));
    }
}
console.log(fatorial(5));

//---[ Crie uma função chamada filtraPares que receba um array de números e retorne um novo array apenas com os números pares. ]---//

let array = [1, 2, 3, 4];

function filtraPares(item) {
    if(item % 2 === 0) {
        array = item
        console.log(array)
    }
}

array.forEach(filtraPares);


//---[ Contexto: Crie uma função chamada contaVogais que receba uma string e retorne o número de vogais presentes na string. ]---//

function contaVogais(string) {
  
    const vogais = 'aeiouAEIOU';
    let contador = 0;

 
    for (let char of string) {
        if (vogais.includes(char)) {
            contador++;}}
    return contador;
}

console.log(contaVogais("batata"));

//---[ Contexto: Crie uma função chamada ordenaStrings que receba um array de strings e retorne um novo array com as strings em ordem alfabética. ]---//

function flq(last) {
    return last.slice().sort(); 
}

const flu = ['cleriton', 'jefferson', 'gerson', 'ana'];
const plas = flq(flu);
console.log(plas);