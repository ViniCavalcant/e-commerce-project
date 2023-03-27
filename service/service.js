document.addEventListener('DOMContentLoaded', function getItens(){
    let addsResponse = [];

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
                size: '',
                color: ''
            };
            formatedResponse.push(newItem);
        }

        localStorage.setItem('products', JSON.stringify(formatedResponse));
    };
    fetchProducts("https://fakestoreapi.com/products/");
    // fetchProducts("https://fakestoreapi.com/products/category/men's%20clothing");
})