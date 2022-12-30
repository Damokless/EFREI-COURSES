function lowerCase(str = '') {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            sentence += String.fromCharCode(code + 32)
        } else {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}

console.log(lowerCase('Chopper'))
console.log(lowerCase('TONY TONY'))

/*La function récupère la phrase ( exemple Chopper), décortique chaque caractère pour connaitre son code ascii, en fonction de son code on peut déterminer
si c'est une majuscule ou pas. le code des majuscules va de 65 à 90 et les minuscules de 97 à 122, si on rajoute 32 au code tous les caractères
 deviennent des minuscules 
*/