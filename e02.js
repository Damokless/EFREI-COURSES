function sotbyinsert(myArray) {

    for (let i = 1; i < myArray.length; i++) {

          let j = i - 1
          let temp = myArray[i]

            while (j >= 0 && myArray[j] > temp) {
                myArray[j + 1] = myArray[j]
                j--
            }
          myArray[j+1] = temp
        }
    return myArray
    }
console.log(sotbyinsert([6,5,3,1,8,7,2,4]))