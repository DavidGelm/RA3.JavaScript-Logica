let suma = 0
let numero = 1
do{
    if(numero %3===0 && numero%5===0){
        suma+=numero
    }
    numero++
}while(numero<=1000)
console.log("La suma dels numeros multiples es: " + suma)