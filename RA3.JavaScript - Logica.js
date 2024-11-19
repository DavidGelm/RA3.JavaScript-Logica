let num = 123456
let num_aString = num.toString()
let resultat = ''

if(num_aString.length % 2 ===0) {
    for(let i = 0; i < num_aString.length; i+=2){
        resultat += num_aString[i + 1] + num_aString[i]
    }
}
else{
    console.log("El numero no te una longitud parella")
}
console.log(resultat)