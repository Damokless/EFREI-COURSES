function capitalize(str = '', restToLoweropt=false) {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (i == 0 && code >= 97 && code <= 122) {
            sentence += String.fromCharCode(code - 32)
        } else if(restToLoweropt == false) {
            sentence += String.fromCharCode(code)
        }
        else{
                if (i>=1 && code >= 65 && code <= 90) {
                    sentence += String.fromCharCode(code + 32)
                } else {
                    sentence += String.fromCharCode(code)
                }
            
        }
    }

    return sentence
}

console.log(capitalize('one Code'))
console.log(capitalize('One CODE', true))

// je ne serais l'expliquer mais ça marche du coup .. sinon j'ai pris un peu de code de l'exercice 1 et 2