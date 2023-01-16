const nomes= ["daniel" , "maria" , ""]
const pessoa = {nome: "daniel" , idade: 10 , email: ""}
const pessoa1 = {}

const pessoas = [ {
    nome: "daniel",
    idade: 40
} , {
    nome: "maria",
    idade: 28
} , {
    nome: "helena",
    idade: 45
} , {
    nome: "joao",
    idade: 18
}]
for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}
