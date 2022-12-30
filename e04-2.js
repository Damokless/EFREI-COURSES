function average(myArray = []) {

    let moyenne = 0
    let element = 0
    somme = 0

    for (let i = 0; i < myArray.length; i++) {

        somme += myArray[i]

        moyenne = somme/i
    }

return moyenne
}

console.log(average([1,2,3,4,5]))