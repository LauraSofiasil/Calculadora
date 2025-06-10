function inserirNoInput(data){
    /*Busca o id = caixa 
      Diz que o valor dele será o que estamos recebendo (no caso é o data)
      += -> para adicionar um valor sem apagar o outro*/
    document.querySelector('#caixa').value += data
}

function limparTudo(){
    /*Essa função irá limpar os valores */
    document.querySelector('#caixa').value = ''
}

function apagar(){
    const caixaInput = document.querySelector('#caixa')
    
    /*slice(0, -1) -> Apaga o ultimo elemento adicionado*/
    caixaInput.value = caixaInput.value.slice(0, -1)
}

function resultado(){
    const caixaInput = document.querySelector('#caixa')

    /*eval -> já identifica as operações e calcula*/
    try {
        caixaInput.value = eval(caixaInput.value)
    } catch {
        caixaInput.value = 'Erro'
    }
}