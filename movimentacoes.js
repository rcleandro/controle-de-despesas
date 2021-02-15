const informacoesMovimentacao = [
  {
    descricao: "Faculdade",
    valor: 100
  },
  {
    descricao: "AP",
    valor: 200
  },
];

const exibeMovimentacao = (descricao, valor) => {
  const linha = document.createElement("tr");
  const conteudoLinha = `
  <td>${descricao}</td>
  <td>${valor}</td>
  `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

informacoesMovimentacoes.forEach(indice => {
  corpoTabela.appendChild(exibeMovimentacao(indice.descricao, indice.valor))
})


