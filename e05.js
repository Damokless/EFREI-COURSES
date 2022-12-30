module.exports = function (args = '') {
    const fs = require('fs')

    file = args[2]
    sentence = args[3]

    fs.writeFile(file, sentence, (err) => {
        if (err) throw err;
        console.log('File ' + file + ' successfully created!');
      });

      fs.readFile("./" + file, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
}