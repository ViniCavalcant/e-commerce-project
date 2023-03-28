
/*
    Este arquivo é reponsavel pela organização do código, separando o "Back-End" do "Front-End"

    Essa função é responsável por buscar os produtos na API e transformá-los em um array de objetos, desta forma, é possível consumir
    qualquer API ou chamada de um Back-End, sem precisar alterar nada no Front-End.
*/
document.addEventListener('DOMContentLoaded', function getItens(){
    let addsResponse = [];

    /*
        Essa função assíncrona faz a busca dos produtos na API através de uma URL e transforma os dados em um objeto JavaScript.
        Em seguida, a função concatena a resposta ao array 'addsResponse' e formata os dados antes de adicioná-los à variável 'formatedResponse'.

        - Desta forma, é possível consumir diversos dados, eles ficarão organizados e com um Id própio.
    */
    async function fetchProducts(url) {
        let data = await fetch(url);
        let response = await data.json();
        addsResponse = addsResponse.concat(response);
        let formatedResponse = [];

        for (let i = 0; i < addsResponse.length; i++) {
            let item = addsResponse[i];
            let newItem = {
                id: i + 1,
                name: item.title.trim(),
                tag: item.title.trim().toLowerCase().replace(/\s+/g, ''),
                image: item.image,
                price: item.price,
                inCart: 0,
                description: item.description,
                category: item.category.trim().toLowerCase().replace(/\s+/g, ''),
            }; 
            formatedResponse.push(newItem);
        }

        localStorage.setItem('products', JSON.stringify(formatedResponse));
    };

    // Busca todos os produtos da API e salva no localStorage
    fetchProducts("https://fakestoreapi.com/products/");

    /*
        Busca apenas os produtos das categorias de roupas masculinas e femininas da API e salva no localStorage.
        É necessário comentar o 'fetchProducts' acima e descomentar esses dois 'fetchProducts' abaixo para visualizar esses produtos.
    */
    // fetchProducts("https://fakestoreapi.com/products/category/men's%20clothing");
    // fetchProducts("https://fakestoreapi.com/products/category/women's%20clothing");
})