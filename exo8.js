function swapCase(str='') {
    let sentence = ''

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code >= 65 && code <= 90) {
            sentence += String.fromCharCode(code + 32)
        } else if (code >= 97 && code <= 122) {
            sentence += String.fromCharCode(code - 32)
        }else{
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}



console.log(swapCase('One Code'))
console.log(swapCase('1337 Fruits'))

// on doit juste transformer les minuscules en majuscules et les majuscules en minuscule