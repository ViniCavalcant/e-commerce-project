const slider = 
    [
        {image: 'slider0.jpg', text: 'teste slider'},
        {image: 'slider1.jpg', text: 'teste slider'},
        {image: 'slider2.jpg', text: 'teste slider'},
        {image: 'slider3.jpg', text: 'teste slider'},
    ]

for(i = 0; i < slider.length; i++){
    let minhaImagem = { 
        url: "assets/slider/" + slider[i].image,
    };
    
    let imagemParaExibir = minhaImagem;
    document.getElementById("minha-imagem").src = imagemParaExibir.url;
}


