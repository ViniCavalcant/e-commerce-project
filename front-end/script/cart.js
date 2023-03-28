// Função que trata o clique do botão "Comprar".
function addToCart(product) {
    // Código para adicionar o produto ao carrinho.
    localStorage.setItem('product', JSON.stringify(product));
    cartNumbers(product);
    totalCost(product);
}


// Chamada quando a página é carregada para atualizar os números do carrinho.
function onLoadCartNumbers(){
    // Pega o número de produtos no carrinho do armazenamento local e exibe.
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) {
        document.querySelector('.badge').textContent = productNumbers;
    }
}

// Atualiza o número de produtos no carrinho.
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

    setItens(products);
}

/*
    Pega os itens atuais do carrinho do armazenamento local adiciona o novo produto e armazena os itens 
    atualizados do carrinho no armazenamento local.
*/ 
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

/*
    Ele recupera o custo total atual do armazenamento local, 
    adiciona o preço do novo produto e armazena o custo total atualizado no armazenamento local.
*/
function totalCost(product){
    // Pega o custo total atual do armazenamento local.
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

/*
    recupera os itens do carrinho e o custo total do armazenamento local e gera o código HTML 
    para exibir os itens do carrinho e o custo total.
*/
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

/*
    a função remove esse produto do carrinho e atualiza o número de produtos no carrinho e o custo total 
    no armazenamento local do navegador.
*/
function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.trash-click');
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    let cartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        //  Evento "click" que remove o produto do carrinho e atualiza as informações no armazenamento local.
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            // Remove o produto da lista de itens no carrinho e atualiza as informações de carrinho no armazenamento local.
            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            if (Object.keys(cartItems).length === 0) {
                localStorage.setItem('totalCost', 0);
                cartCost = 0;
            }

            /*
                Atualiza o número total de produtos no carrinho e o custo total do carrinho 
                com base na quantidade e no preço do produto removido.
            */ 
            displayCart();
            onLoadCartNumbers();
        });
    }
}

/*
    "onLoadCartNumbers()" é chamada para atualizar o número de itens no carrinho do ícone de carrinho na barra de navegação. 
    "displayCart()" é chamada para atualizar a exibição do carrinho de compras na página, 
    exibindo a lista atualizada de itens no carrinho e o custo total.
*/ 
onLoadCartNumbers();
displayCart();