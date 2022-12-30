function kebabCase(str='') {
    let sentence = ''
    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (code == 32) {
            sentence += String.fromCharCode(code + 13)
        } else if (i!=0 && code >= 65 && code <= 90) {
            add = String.fromCharCode(45)
            sentence += add
            sentence += String.fromCharCode(code + 32)

        }else {
            sentence += String.fromCharCode(code)
        }
    }

    return sentence
}

console.log(kebabCase('Love one code'))
console.log(kebabCase('LoveOneCode'))
console.log(kebabCase('-Love-one-code-'))