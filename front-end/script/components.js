/*
    Responsavél pela criação dos componentes header e footer para as páginas HTML
*/
let header = document.querySelector('.header-component');
let footer = document.querySelector('.footer-component');

header.innerHTML += `
    <div class="row container-xxl container-xl">
        <div class="col-8">
            <ul class="nav justify-content-start align-items-center">
                <div class="d-flex">
                    <li class="nav-item logo">
                        <a class="navbar-brand d-flex align-items-center" href="index.html">
                            <img src="./assets/logo/itsPay.png" alt="Logo" width="48" height="48"
                                class="d-inline-block align-text-top">
                            itsPay
                        </a>
                    </li>
                </div>
            </ul>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
            <ul class="nav">
                <li class="nav-item d-flex justify-content-center align-items-center">
                    <a class="nav-link main-links" href="cart-page.html">
                        <i class="bi bi-cart-fill large-icon"></i>
                        <span class="badge bg-primary rounded-pill">0</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
`;

footer.innerHTML +=`
    <div class="row">
        <div class="col-12 col-md">
            <div class="d-flex">
                <li class="nav-item logo">
                    <a class="navbar-brand d-flex align-items-center" href="index.html">
                        <img src="./assets/logo/itsPay.png" alt="Logo" width="48" height="48"
                            class="d-inline-block align-text-top">
                        itsPay
                    </a>
                    <h4 class="py-3 w-75">Encontre tudo o que procura em um só lugar.</h4>
                </li>
            </div>
        </div>
        <div class="col-6 col-md">
            <h5>Sobre</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Time</a></li>
                <li><a class="text-muted" href="#">Local</a></li>
                <li><a class="text-muted" href="#">Privacidade</a></li>
                <li><a class="text-muted" href="#">Termos</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Minha Conta</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Minha Conta</a></li>
                <li><a class="text-muted" href="#">Acompanhar Pedido</a></li>
                <li><a class="text-muted" href="#">Meus Dados</a></li>
                <li><a class="text-muted" href="#">Meus Endereços</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Ajuda</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Fale conosco</a></li>
                <li><a class="text-muted" href="#">Trocas e Devoluções</a></li>
                <li><a class="text-muted" href="#">Política de Frete Grátis</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5>Sobre</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">LinkedIn</a></li>
                <li><a class="text-muted" href="#">Twitter</a></li>
                <li><a class="text-muted" href="#">Facebook</a></li>
                <li><a class="text-muted" href="#">Youtube</a></li>
            </ul>
        </div>
    </div>
`;