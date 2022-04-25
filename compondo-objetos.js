const cliente={
    nome:"andre",
    idade:36,
    cpf:"12454213250",
    email:"andre@email.com",
    fones:["55465789","55678790"],
    }


    cliente.dependentes = {
        nome:"joao",
        parentesco:"filho",
        dataNascimento:"20/03/2011"
    }

    console.log(cliente)

    cliente.dependentes.nome = "joao Silva"

    console.log(cliente.dependentes)
