var numero = 21
let resultat
if(numero % 3===0 && numero%7===0){
    resultat = "Es multiple de 3 i 7"
}
else if(numero % 7===0){
    resultat = "Es multiple de 7"
}
else if(numero%3===0){
    resultat = "Es multiple de 3"
}
else{
    resultat="No es multiple de 3 ni de 7"
}
switch(resultat){
    case "Es multiple de 3 i 7":
        console.log("Es multiple de 3 i 7: " + numero)
        break
    case "Es multiple de 3":
        console.log("Es multiple de 3: " + numero)
        break
    case "Es multiple de 7":
        console.log("Es múltiple de 7: " + numero)
        break
    case "No es multiple de 3 ni de 7":
        console.log("No es multiple de 3 ni de 7: " + numero)
        break
} 
