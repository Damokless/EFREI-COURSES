function countSubstrings(str='', substrings) {
 
    sub=str.split(" ")
    var i = 0
    for(let j = 0; j < sub.length; j++) {
        
        if (sub[j] == substrings) {
            i++
        }else{
            sub = sub
        }

    }
return i
}

console.log(countSubstrings('Tony Tony Chopper!', 'Tony'))
console.log(countSubstrings('gomu gomu no bazooka', 'gatling'))