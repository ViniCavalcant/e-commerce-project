// função que trata o clique do botão "Comprar"
function addToCart(product) {
    // código para adicionar o produto ao carrinho
    localStorage.setItem('product', JSON.stringify(product));
    cartNumbers(product);
    totalCost(product);
  }

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelector('.badge').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.badge').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.badge').textContent = 1;
    }

    console.log(productNumbers)
    setItens(products);
}

function setItens(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems  = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container")
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartItems && productContainer){

        if (cartCost == 0) {
            productContainer.innerHTML = `
                <div class="d-grid align-items-center justify-content-center pt-5">
                    <h1 class="card-title d-flex justify-content-center">O seu carrinho está vazio</h1>
                    <div class="d-flex justify-content-center not-found pt-3">
                        <img src="./assets/not-found/emptycart.png" alt="">
                    </div>
                    <div class="d-grid gap-2 pt-4">
                        <a href="./index.html" class="btn btn-primary" type="button">Ir as compras</a>
                    </div>
                </div>
            `;
        } else {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item =>{
                productContainer.innerHTML += `
                    <div class="col-12 pt-3 pt-lg-0">
                        <div class="cart-product product-container">
                            <div class="row pb-3">
                                <div class="col-2">
                                    <a href="product-page.html">
                                        <img class="image-container overflow-hidden" src="${item.image}" alt="...">                            
                                    </a>
                                </div>
                                <div class="col-10">
                                    <div class="row row-cols-md">
                                        <div class="col-5">
                                            <h3>${item.name}</h3>
                                            <div class="pt-2">
                                                <a href="#">
                                                    <div class="trash-click">
                                                        <i class="bi bi-trash3 large-icon"></i>
                                                        <h3 class="d-none">${item.name}</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <h3>Preço</h3>
                                            <h4>R$ ${item.price}</h4>
                                        </div>

                                        <div class="col-3">
                                            <h3 class="d-flex justify-content-center">Quantidade</h3>
                                            <h4 class="d-flex justify-content-center">${item.inCart}</h4>
                                        </div>

                                        <div class="col-2">
                                            <h3>Total</h3>
                                            <h4>R$ ${item.inCart * item.price}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            });

            productContainer.innerHTML += `
                <div class="col-4 pb-3">
                    <div class="card card-amount">
                        <div class="card-body cart-price">
                            <div class="d-flex justify-content-between align-items-center pb-3">
                                <h3 class="card-title text-light-emphasis">Total</h3>
                                <h3 class="card-title">R$ ${parseFloat(cartCost).toFixed(2)}</h3>
                            </div>
                            <div class="d-flex justify-content-between align-items-center pb-3">
                                <h3 class="card-title text-light-emphasis">Desconto</h3>
                                <h3 class="card-title">R$ 0,00</h3>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <h3 class="card-title text-light-emphasis">Entrega</h3>
                                <h3 class="card-title">R$ 0,00</h3>
                            </div>

                            <hr class="border-1">

                            <div class="d-flex justify-content-between align-items-center">
                                <h3 class="card-title text-light-emphasis">Valor total</h3>
                                <h2 class="card-title">R$ ${parseFloat(cartCost).toFixed(2)}</h2>
                            </div>
                            
                            <div class="d-grid gap-2 pt-3">
                                <button class="btn btn-primary" type="button">Finalizar compra</button>
                            </div>
                        </div> 
                    </div>
                </div>
            `
        } 
        deleteButtons();
    }
        
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.trash-click');
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    let cartCost = localStorage.getItem('totalCost');
    
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            if (Object.keys(cartItems).length === 0) {
                localStorage.setItem('totalCost', 0);
                cartCost = 0;
            }

            displayCart();
            onLoadCartNumbers();
        });
    }
}

onLoadCartNumbers();
displayCart();






















// Stepper (contador de produtos)
const myInput = document.getElementById("my-input");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        myInput.setAttribute("value", newValue);
    }
}