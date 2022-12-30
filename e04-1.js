function occurances(myArray = [], parameter = 1) {
    
    let count = 0

    for(let j = 0; j < myArray.length; j++) {
        
        if (myArray[j] == parameter) {
            count++
        }else{
            myArray = myArray
        }

    }

    return count
}


console.log(occurances([1,2,3,4,1,5,1,6,7,1,8,9], 1))