module.exports = function (args = '') {
    const fs = require('fs')

    file = args[2]

    fs.unlink(file, (err) => {
        if (err) throw err;
        console.log('file ' + file + ' successfully removed!');
      });
}