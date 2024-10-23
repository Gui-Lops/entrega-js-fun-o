//-----[ Crie uma função que receba dois números e retorne o maior deles. Utilize o operador ternário. ]-----//

let num1 = 8756
let num2 = 7650

console.log(num1 > num2 ? num1 : num2)

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

let text = "baleia!";
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
} else if (temperatura >= 15 || temperatura <= 30) {
    console.log("a temperatura está moderada");
} else if (temperatura > 30) {
    console.log("a temperatura está quente");
}

//-----[ Faça uma função que verifique se um número está na lista de números primos até 100. ]-----//

let nPrimo = 102;

if (nPrimo % nPrimo === 0 && nPrimo % 2 !== 0 && nPrimo % 3 !== 0 && nPrimo <= 100) {
    console.log(`${nPrimo} é um número primo e esta entre os numeros primos até 100`)
} else if (nPrimo % nPrimo === 0 && nPrimo % 2 === 0 || nPrimo % 3 === 0) {
    console.log(`${nPrimo} não é um número primo`)
} else if (nPrimo % nPrimo === 0 && nPrimo % 2 === 0 || nPrimo % 3 === 0 || nPrimo >= 100) {
    console.log(`${nPrimo} é um número primo que não esta entre os numeros primos até 100`)
}