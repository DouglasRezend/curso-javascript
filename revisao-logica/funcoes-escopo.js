let n = "global"

function mostrarN(){
  let n1 = " n1 local"
 

 if(true){
    var n2 = " n2 dentro de if com var"
 }
 console.log(n2)
 console.log("valor de n1: " + n1)
 console.log("valor de n2: " + n2)
}
mostrarN()

console.log("valor de n no escopo global: " + n)

function fnext(){

    let n = "n local na funcao fnext"

    function fnint() {
        let n = "n local na funcao fnint"
        console.log(n)
    }
    fnint()
    console.log(n)
}
fnext()