const numeros = [3,1,9]
let contador
for(let i = 0;i < numeros.length;i++){
    for(let j = 0;j < numeros.length-i-1; j++){
        if(numeros[j] < numeros[j+1]){
            contador = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = contador
        }
    }
}
console.log("Llista ordenada major a menor: " + numeros)