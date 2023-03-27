
let currentProduct = JSON.parse(localStorage.getItem('currentProduct'));
let productCardItemSelected = document.querySelector('.card-product-selected');

productCardItemSelected.innerHTML += `
    <div class="col slider-content">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${currentProduct.image}" class="d-block w-100 slider-height overflow-hidden" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${currentProduct.image}" class="d-block w-100 slider-height overflow-hidden" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${currentProduct.image}" class="d-block w-100 slider-height overflow-hidden" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div class="col pt-3">
        <h2>${currentProduct.name}</h2>
        <h1 class="card-text pt-1">Por <span class="card-price">R$ ${currentProduct.price}</span></h1>
        <h3 class="card-text pt-3">${currentProduct.description}</h3>

        <div class="pt-4">
            <h3>Quantidade</h3>
            <div class="stepper-input">
                <button id="decrement" class="decrement" onclick="stepper(this)">-</button>
                <input type="number" class="stepper-number" min="0" max="100" step="1" value="1" id="my-input" readonly>
                <button id="increment" class="increment" onclick="stepper(this)">+</button>
            </div>
        </div>

        <div class="d-grid gap-2 pt-5">
            <button class="btn btn-primary w-50 add-cart" type="button">Comprar</button>
        </div>
    </div> 
`;

// adicionar ouvinte de evento de clique para o botão "Comprar"
let addToCartBtn = document.querySelector('.add-cart');
addToCartBtn.addEventListener('click', () => {
  // chamar a função que trata o clique do botão e passar o objeto currentProduct como parâmetro
  addToCart(currentProduct);
});
