function alteraarray(a){
    arr.push("adicionado")
}

let arr = ["a"]
console.log(arr)
alteraarray(arr)
console.log(arr)

function alteraprimitivo(p){ //mensagem
     p+= " adicionado"
     console.log(" dentro da funcao : " , p)
}
let msg = "mensagem"
console.log(msg)
alteraprimitivo(msg)
console.log(msg)