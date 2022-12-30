const fs = require('fs')
const { resourceUsage } = require('process')

fs.readdir (process.argv[2], (err, data) =>{
    if (err) { 
        console.log('error')
    }
    files = ''
    for (let i = 0; i < data.length; i++) {
        arg = '.' + process.argv[3]
        const element = data[i].slice(-3)
        if (element === arg) {
            files = data[i]
            console.log(files)
        }
    }
})