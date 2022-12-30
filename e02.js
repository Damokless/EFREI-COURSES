module.exports = function (filename = '') {

    name = filename.slice(2, 3)
    file = name[0]
    extension = file.slice(-3)
    console.log(extension)
}