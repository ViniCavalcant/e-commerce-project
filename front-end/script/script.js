// const slider = 
//     [
//         {image: 'slider0.jpg', text: 'teste slider'},
//         {image: 'slider1.jpg', text: 'teste slider'},
//         {image: 'slider2.jpg', text: 'teste slider'},
//         {image: 'slider3.jpg', text: 'teste slider'},
//     ]

// for(i = 0; i < slider.length; i++){
//     let minhaImagem = { 
//         url: "assets/slider/" + slider[i].image,
//     };
    
//     let imagemParaExibir = minhaImagem;
//     document.getElementById("minha-imagem").src = imagemParaExibir.url;
// }

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