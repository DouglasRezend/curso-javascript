let idade = 22
let paispresentes = false
let comproubilhete = true
const podeviajar = (idade >= 18 || paispresentes) && comproubilhete
console.log(`pode viajar : ${podeviajar}`);

/*let msgmaioridade = ""
if(idade >= 18){
    msgmaioridade = " é maior de 18 anos "
} else {
    msgmaioridade = " é menor de 18 anos"
} */
let msgmaioridade = (idade >= 18) ?  "e maior de idade": "e menor de 18 anos"



if(!comproubilhete){
  console.log("nao comprou o bilhete")
} else {
     console.log (msgmaioridade)
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