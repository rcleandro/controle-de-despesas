const listarMovimentacoes = () => {
    return fetch('http://localhost:4000/movimentacoes')
    .then( resposta => { 
      return resposta.json()
    })
    .then( json => { 
      return json 
    })
}

const cadastrarMovimentacoes = (descricao, valor) =>  {
  const json = JSON.stringify({
    descricao: descricao,
    valor: valor
  })
  return fetch('http://localhost:4000/movimentacoes/movimentacao',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
  .then( resp => { 
    return resp.body
  })
} 

const deletaMovimentacao = id => {
  return fetch(`http://localhost:4000/movimentacoes/movimentacao/${id}`, {
    method: "DELETE",
})}


const detalhaMovimentacao = id => { 
  return fetch(`http://localhost:4000/movimentacoes/movimentacao/${id}`,{
    method: 'GET'
  }) 
  .then(resposta => {
    return resposta.json()
  })
}

const editaMovimentacao = (id, descricao, valor) => {
  const json = JSON.stringify({
    descricao: descricao,
    valor: valor
  })
  return fetch(`http://localhost:4000/movimentacoes/movimentacao/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
}