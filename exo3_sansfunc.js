function length(str = ''){

    const arraystr =[]
    for (let i = 0; i < str.length; i++) {
       const newstr = str.split('')
        arraystr.push(newstr[i])

        number = arraystr.length

    }
    return number
}
console.log(length("ch0pper"))

// la fonction crée un tableau pour mettre par la suite la phrase ou le mot lettre par lettre pour les compter ensuite.