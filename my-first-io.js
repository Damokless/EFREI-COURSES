const fs = require('fs')
const variable = fs.readFileSync(process.argv[2], 'utf8')
let results = variable.match(RegExp(/[\n]/g)).length
console.log(results)