const cliente = {
 nome: 'andre',
  idade: 36,
  cpf: '12454213250',
  email: 'andre@email.com',
  fones: [ '55465789', '55678790' ],
  dependentes: [{ 
    nome: 'joao', 
    parentesco: 'filho',
    dataNascimento: '20/03/2011' 
    }]
}

cliente.dependentes.push({
    nome:"laura",
    parentesco:"filha",
    dataNascimento:"14/05/2017"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento==="14/05/2017")

console.log(filhaMaisNova[0].nome)
