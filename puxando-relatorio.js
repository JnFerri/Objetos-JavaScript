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
  

  
  
  let dependentesRelatorio = `${cliente["dependentes"]}`
  
  
  let relatorio = ''

  for(let info in cliente){
      if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
          continue
      }else{
      relatorio += `${info} : ${cliente[info]},  
        ` 
      }
  }

  let relatorioFinal = `${relatorio} 
  ${dependentesRelatorio}`
  

  console.log(relatorioFinal)
  