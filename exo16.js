function countWords(str='', patternopt) {

    let count = 0

    for(let i = 0; i < str.length; i++) {

        const code = str.charCodeAt(i)
        if (code == 32 || code == 45 ) {
            count = str.split(/\W+/).length


        }else if (i>0 && code >= 65 && code <= 90){


            }
    }
return count
}

console.log(countWords('Tony Tony Ch0pper',))
console.log(countWords('TonyTonyCh0pper'))
console.log(countWords('Tony Tony - Ch0pper'))

// bon j'ai pas réussis à faire le deuxième ...