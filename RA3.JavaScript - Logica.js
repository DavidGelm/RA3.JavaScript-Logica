let cadena = "hola3pat2ta"
let suma = 0
for (let i = 0; i< cadena.length; i++){
    if (!isNaN(cadena[i]) && cadena[i] !== ''){
        suma += parseInt(cadena[i])
    }
}

console.log("La suma dels numeros del string es: " + suma)

