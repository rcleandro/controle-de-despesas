const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputDescricao = document.querySelector('[data-descricao]')
const inputValor = document.querySelector('[data-valor]')

detalhaMovimentacao(id).then( dados => {
    inputDescricao.value = dados[0].descricao 
    inputValor.value = dados[0].valor
})

const formEdicao = document.querySelector('[data-form]')

const alerta = (classe, mensagem) => { 
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>
`
  
    linha.innerHTML = conteudoLinha;
    return linha;
} 
formEdicao.addEventListener('submit', event => { 
    event.preventDefault()
    
    if(inputDescricao.value.length !== 0){
        alert("Descrição inválida")
        return 
    }

    editaMovimentacao(id, inputDescricao.value, inputValor.value)
    .then( resposta => { 
        if( resposta.status === 200){
            formEdicao.appendChild(alerta(
                "alert alert-success",
                "MOVIMENTAÇÃO EDITADA COM SUCESSO !"
            ))
        } else { 
            formEdicao.appendChild(alerta(
                "alert alert-warning",
                "A MOVIMENTAÇÃO NÃO PODE SER EDITADA !"
            ))
        }
    })
})
