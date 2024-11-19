function patro(n){
    for(let i = 1;i <= n;i++){
        let linia = ''
        if(i%2===0){
            continue
        }
        for(let j = 1;j<=i;j++){
            linia += " *"
        }
        console.log(linia)
    }
}
patro(5)