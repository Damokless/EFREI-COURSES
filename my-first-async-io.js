const fs = require('fs')
fs.readFile(process.argv[2], 'utf8', (err, data) =>{
    if (err) {
        console.log('error')
    }
    let results = data.match(RegExp(/[\n]/g)).length
    console.log(results)
})
