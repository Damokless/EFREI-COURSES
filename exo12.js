function substr(str='', start, len=str.endOfString) {
    words = str.substr(start, len)
    return words
}

console.log(substr('tony tony chopper', 10))
console.log(substr('ch0pper', 2,2))