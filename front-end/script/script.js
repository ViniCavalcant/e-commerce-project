let storedProducts = JSON.parse(localStorage.getItem('products'));
let products = storedProducts;

let productCardItem = document.querySelector('.cards-product');

for(let i = 0; i < products.length; i++){
    let productIndex = i;
    let productInfo = JSON.stringify(products[i]);
    productCardItem.innerHTML += `
        <div class="col">
            <a class="products" data-product="${productInfo}">
                <div class="card card-product">
                    <img src="${products[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title title-card-display" data-toggle="tooltip" title="${products[i].name}">${products[i].name}</h4>
                        <h5 class="card-text">Por <span class="card-price">R$ ${products[i].price}</span></h5>
                    </div>
                </div>
            </a>
        </div>
    `;
}

let productLinks = document.querySelectorAll('.products');
productLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        let product = products[index];
        localStorage.setItem('currentProduct', JSON.stringify(product));
        window.location.href = 'product-page.html';
    });
});