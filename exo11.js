function last(str='', len=1) {

    word = str.substr(-len)

    return word
}

console.log(last('chopper'))
console.log(last('chopper', 2))
console.log(last('tony', 5))