let diasemana = 3
if (diasemana === 0){
    console.log("hoje e domingo")
} else if (diasemana === 1){
    console.log ("hoje e segunda")
} else if (diasemana === 2){
    console.log ("hoje e terça")
} else if (diasemana === 3){
    console.log ("hoje e quarta")
} else if (diasemana === 4){
    console.log ("hoje e quinta")
} else if (diasemana === 5){
    console.log ("hoje e sexta")
} else if (diasemana === 6 ){ 
    console.log("hoje e sabado")
} else {
    console.log("hoje e --")
}
let dia = ""
switch( diasemana) {
    case 0:
         dia = "domingo"
        break
    case 1:
        dia = "segunda"
        break
    case 2:
        dia = "terça"
        break
    case 3:
        dia = "quarta"
        break               
    case 4:
        dia = "quinta"
        break
    case 5:
        dia = "sexta"
        break
    case 6:
        dia = "sabado"
        break
        default:
            dia = " -- "
}
console.log(`hoje e ${dia}`)
