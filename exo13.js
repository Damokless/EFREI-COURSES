function slice(str= '', start, endopt=str.length) {
    words = str.slice(start, endopt)
    return words
}

console.log(slice('ch0pper', 1))
console.log(slice('ch0pper', -4))
console.log(slice('ch0pper', 1,4))