myArray = process.argv.slice(2)
let results = 0
for (let i = 0; i < myArray.length; i++) {
        results = results + Number(myArray[i])
}
console.log(results)