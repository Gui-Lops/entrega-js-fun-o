//---[ JavaScript Funções ]---//

function pegarComanda() {
    console.log(`Olá boa noite!`);
    console.log(`Pegue aqui sua comanda!`);
    console.log(`Bom apetite!!`);
    console.log(`-----------------------------------------------`);
}

pegarComanda();

/*
let numeroDaVez = 1;
console.log(`O número da vez é o ${numeroDaVez}`);
console.log(`O número da vez (${numeroDaVez}) ao quadrado vale ${numeroDaVez ** 2}`);
*/

function calcularQuadrado(numeroDaVez) {
    console.log(`O número da vez é o ${numeroDaVez}`);
    console.log(`O número da vez (${numeroDaVez}) ao quadrado vale ${numeroDaVez ** 2}`);
}

calcularQuadrado(2);

function calcularRaizQuadrada(base) {
    base**(1/2);
    return base**(1/2);
}

let valorRaizQuadrada = calcularRaizQuadrada(4);

console.log(valorRaizQuadrada);

function resolverBhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2 * a)
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2 * a)

    console.log(`Os dois valores de X dos pontos da parabola no eixo X são ${x1} e ${x2}`);    
}

resolverBhaskara(2, 3, -2);