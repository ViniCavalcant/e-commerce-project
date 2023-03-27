let storedProducts = JSON.parse(localStorage.getItem('products'));
let products = storedProducts;

let productCardItem = document.querySelector('.cards-product');
let sectionProduct = document.querySelector('.section-products');


for(let i = 0; i < products.length; i++){
    let productIndex = i;
    let productInfo = JSON.stringify(products[i]);
    productCardItem.innerHTML += `
        <div class="col display-product">
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

//filters
//search filter
const search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".display-product");
    const productName = document.getElementsByTagName("h4");

    for(let i = 0; i < productName.length; i++){
        let match = product[i].getElementsByTagName('h4')[0];

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

//select filter
const selectOption = document.querySelector('select');
const productsOption = document.querySelector('.products');

select.addEventListener('change', (event) =>{
    const selected = event.target.value;

    for(let i = 0; i < productsOption.children.length; i++) {
        const product = productsOption.children[i];

        if (selected === 'none'){
            product.style.display = 'block';
        } else {
            if (product.id !== selected) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        }
    }
})