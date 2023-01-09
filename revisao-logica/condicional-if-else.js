let idade = 16
let paispresentes = false
let comproubilhete = true
const podeviajar = (idade >= 18 || paispresentes) && comproubilhete
console.log(`pode viajar : ${podeviajar}`);

if(!comproubilhete){
  console.log("nao comprou o bilhete")
} else {
     if ( idade>= 18){
        console.log (" e maior de idade , pode viajar")

     } else {
        console.log( "opa !! e menor de idade")

     }
}


let n1 = 0
let n2 = 7
let media =( n1 + n2) / 2
console.log(`media: ${media}`);


if(n1 === 0 ||n2 === 0){
    console.log("reprovado")
} else if (media < 7){
    console.log("Reprovado , mas ha como recuperar")
} else {
    console.log ("aprovado")
}
console.log("saiu do bloco if")