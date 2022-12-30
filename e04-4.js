function max(myArray = []) {

    let sort = myArray.sort().reverse()

 return sort[0]
}

console.log(max([6,5,7,1,2,3,4,5]))