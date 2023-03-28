// Obtém os dados do objeto JSON armazenado no armazenamento local do navegador sob a chave 'products'
let products = JSON.parse(localStorage.getItem('products'));
// Obtém o elemento do DOM com a classe '.cards-product'
let productCardItem = document.querySelector('.cards-product');
// Obtém o elemento do DOM com a classe '.section-products'
let sectionProduct = document.querySelector('.section-products');

for(let i = 0; i < products.length; i++){    
    // Transforma os dados do produto atual em uma string JSON e atribui à variável 'productInfo'
    let productInfo = JSON.stringify(products[i]);

    productCardItem.innerHTML += `
        <div class="col display-product">
            <a class="products" data-product="${productInfo}">
                <div class="card card-product">
                    <img src="${products[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title title-card-display" data-toggle="tooltip" title="${products[i].name}">${products[i].name}</h4>
                        <h5 class="card-text">Por <span class="card-price">R$ ${products[i].price}</span></h5>
                        <small class="d-none">${products[i].category}</small>
                    </div>
                </div>
            </a>
        </div>
    `;

}

// Obtém todos os links dos produtos
let productLinks = document.querySelectorAll('.products');

// Adiciona um ouvinte de evento para cada link de produto
productLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        let product = products[index];

        // Armazena os dados do produto atual na localStorage
        localStorage.setItem('currentProduct', JSON.stringify(product));
        window.location.href = 'product-page.html';
    });
});

// Função de filtro para pesquisa
const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".display-product");
    const productName = document.getElementsByTagName("h4");

    for(let i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName('h4')[0];

        // Verifica se há correspondência entre o valor da pesquisa e o nome do produto atual
        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

// Função de filtro para seleção de categoria
const categorySelect = document.querySelector('.category');

categorySelect.addEventListener('change', function() {
    const selectedCategory = categorySelect.value;
    const productCards = document.querySelectorAll('.display-product');

    for (let i = 0; i < productCards.length; i++) {
        const productCategory = productCards[i].querySelector('small');

        /* 
            Verifica se a categoria do produto atual corresponde à categoria selecionada ou se a categoria selecionada, 
            caso contraário, entra no "else", onde aplica o display-none ao produto
        */
        if (productCategory.textContent === selectedCategory || selectedCategory === 'none') {
            productCards[i].style.display = '';
        } else {
            productCards[i].style.display = 'none';
        }
    }
});