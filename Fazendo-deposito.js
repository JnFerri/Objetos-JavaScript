const cliente = {
  nome: 'andre',
  idade: 36,
  cpf: '12454213250',
  email: 'andre@email.com',
  fones: [ '55465789', '55678790' ],
  dependentes: [
    { nome: 'joao',
     parentesco: 'filho',
      dataNascimento: '20/03/2011' },
    {
      nome: 'laura',
      parentesco: 'filha',
      dataNascimento: '14/05/2017'
    }
  ],

  saldo: 100,
  depositar:function(valor){
      this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)