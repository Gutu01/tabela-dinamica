document.addEventListener('DOMContentLoaded', carregarDados());


function carregarDados(){
    const tabela = document.querySelector('#table-list tbody');

    fetch('https://fakestoreapi.com/products')
    .then(result => result.json())
    .then(json => json.forEach((produtoAtual) => {
        console.log(produtoAtual);
        tabela.innerHTML += `
        <tr>   
            <td>${produtoAtual.title}</td> 
            <td>${produtoAtual.description}</td>
            <td>${produtoAtual.price}</td>
            <td>${produtoAtual.category}</td>
            <td><img src="${produtoAtual.image}"/></td>
        </tr>
        `;
    }));
}