function decapitalize(str = '') {
    let sentence = ''
    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (i==0 && code >= 97 && code <= 122) {
            sentence += String.fromCharCode(code)

        } else if (i==0 && code >= 65 && code <= 97) {
            sentence += String.fromCharCode(code + 32)

        } else if (code >= 97 && code <= 122) {
            sentence += String.fromCharCode(code)

        }else if (code >= 65 && code <= 97) {
            sentence += String.fromCharCode(code + 32)

        }else if (code == 32) {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}

console.log(decapitalize('Woonan'))
console.log(decapitalize('El Drago'))

// j'ai pas réussis a split la string alors j'attends la correction pour voir comment faire ¯\_(ツ)_/¯
// edit : Ma version et bien aussi