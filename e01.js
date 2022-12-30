function bubble(myArray = []) {
    
    let finish
    let temp

    do {
        finish = false;
        for (let i = 0; i < myArray.length; i++) {
            
            if (myArray[i] > myArray[i+1]) {
                temp = myArray[i]
                myArray[i] = myArray[i+1]
                myArray[i+1] = temp

                finish = true
            }
        }
    } while (finish);
return myArray
}

console.log(bubble([6,1,5,2,9]))