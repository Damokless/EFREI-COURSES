function IsAPangrams(str = '') {

    str = str.toLowerCase()
    str = str.replace(/\s/g, '')
    let myArray = str.split('')
    let uniqueChars = [...new Set(myArray)]

    if (uniqueChars.length == 26) {
        return true
    } else {
        return false
    }

}


console.log(IsAPangrams('The quick brown fox jumps over the lazy dog'))