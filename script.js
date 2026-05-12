document.addEventListener('DOMContentLoaded', async function () {
    const tabela = document.querySelector('#table-list tbody');
 
    const inputFiltro = document.querySelector('#search');
    const produtos = await carregarDados();
 
    produtos.forEach(produtoAtual => {
        tabela.innerHTML += `
            <tr>
                <td>${produtoAtual.title}</td>
                <td>${produtoAtual.description}</td>
                <td>${produtoAtual.price}</td>
                <td>${produtoAtual.category}</td>
                <td><img src="${produtoAtual.image}"/></td>
            </tr>
        `;
    });
    inputFiltro.addEventListener('keyup', function (event) {
 
        tabela.innerHTML = '';
 
        let textoFiltro = event.target.value.toLowerCase();
 
        const produtosFiltrados = produtos.filter(produto => produto.title.toLowerCase().includes(textoFiltro));
        produtosFiltrados.forEach(produtoAtual => {
            tabela.innerHTML += `
            <tr>
                <td>${produtoAtual.title}</td>
                <td>${produtoAtual.description}</td>
                <td>${produtoAtual.price}</td>
                <td>${produtoAtual.category}</td>
                <td><img src="${produtoAtual.image}"/></td>
            </tr>
        `});
 
 
    });
});
 
 
async function carregarDados() {
    const resposta = await fetch('https://fakestoreapi.com/products');
    return await await resposta.json();
}