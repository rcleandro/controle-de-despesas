const removeMovimentacao = (id) => {
  if(confirm("Deseja deletar a movimentação ?")){
    debugger;
    deletaMovimentacao(id)
    window.location.reload()
  }
}

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeMovimentacao = (descricao, valor, id) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${descricao}</td>
    <td>${valor}</td>
    <button type="button" class="btn btn-danger" onclick="removeMovimentacao(${id})">Excluir</button>
    <a href="edita-movimentacao.html?id=${id}">
    <button type=""button class="btn btn-info">Editar</button>
    </a>   
`
  
    linha.innerHTML = conteudoLinha;
    return linha;
  };
  
  listarMovimentacoes().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeMovimentacao(indice.descricao, indice.valor, indice.id))
  })
 }

 )
  
  
 

