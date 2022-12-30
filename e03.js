module.exports = function (filename = '') {
    const fs = require('fs')

    name = filename.slice(2, 3)
    file = name[0]

    fs.readFile("./" + file, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
      
}


//exo 3 et 4 sont les même donc le résultat et le même vu qu'il y'a pas de taches a faire avant a lecture du fichier ..