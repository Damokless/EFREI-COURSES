module.exports = function (args = '') {
    const fs = require('fs')

    file = args[2]

   /* fs.stat(file, (err, stats) => {
        if (err) throw err;

        if (stats.isDirectory()) {
            console.log("The argument [ " + file + " ] is a directory");
        } else {
            console.log("The argument [ " + file + " ] is not a  directory");
        }
    });
    */
    /*
   fs.stat(file, (err, stats) => {
    if (err) throw err;

    if (stats.isFile()) {
        console.log("The argument [ " + file + " ] is a file");
    } else {
        console.log("The argument [ " + file + " ] is not a  file");
    }
    });
    */
   fs.exists(file, (exists) => {
       if (exists === true) {
           console.log("The argument [ " + file + " ] is a windows things")
       } else {
           console.log("The argument [ " + file + " ] is another unix things")
       }
  });
}