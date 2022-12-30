function marsos(str = '') {
    let erreur = 0

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if ( code != 83 && code != 79) {
            erreur++
        }
    }
    return erreur
}

console.log(marsos('SOFSOSSISSOW'))