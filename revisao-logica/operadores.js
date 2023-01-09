/*
+ mais 
- menos
* multiplicar
/ dividir
% resto divisao porcentagem
** potencia 
*/

let n1 = 10;
let n2 = 5;

//operadores aritmeticos
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log( n1 % n2);
console.log(2 ** 3);

// operadores de atribuiçao

let n3 = 25;
//n3 = n3 + 15;
n3 += 2
console.log (n3);

//incremento e decremento

let i = 0;
 
console.log(i--);
i++
i++
i++
console.log(i);

//comparaçao
/*
igualdade de valor ==
igualdade de valor e tipo ===
< , > , <= , >=
!= valores diferentes
!== valores e tiposs diferentes
*/

console.log(n1 , n2 , n3 );
console.log( n1 != "10");
console.log( n1 !== "10");

//operadores logicos
/*
para uma pessoa viajar para o exterior
-precisa ser maior de 18 anos
ou
acompanhado com os pais 
e
ter comprado bilhete
*/

let idade = 21
let paispresentes = false
let comproubilhete = false
const podeviajar = (idade >= 18 || paispresentes) && comproubilhete
console.log(`pode viajar : ${podeviajar}`);


n1 = 6 
n2 = 8 
let media =( n1 + n2) / 2
console.log(`media: ${media}`);
console.log((3 * 2 ) ** 2 )