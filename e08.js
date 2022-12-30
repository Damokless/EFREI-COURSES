module.exports = function (args = '') {
    const fs = require('fs')

    file = args[2]
    
      fs.access(file, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if (err) {
          console.log("I don't have access to the file " + file )
        } else {
          console.log("I can read or write the file " + file)
        }
      })
}