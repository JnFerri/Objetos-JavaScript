const cliente={
    nome:"andre",
    idade:36,
    cpf:"12454213250",
    email:"andre@email.com"
    }

    const chaves= ["nome", "idade" , "cpf", "email"]

    console.log(cliente[chaves[0]])


    //forEach e um metodo que percore todo array, necessario um callback, neste caso a variavel info. ele percore o array chaves e exibe a informacao do array
    chaves.forEach(info => console.log(cliente[info]))