// Evento para o botão "Hello"
document.getElementById('hello').addEventListener('mouseover', function() {
    alert('olá');
});

// Evento para o botão "Goodbye"
document.getElementById('goodbye').addEventListener('mousedown', function() {
    alert('Adeus');
});


// function gerarCorAleatoria() {
//     const letras = '0123456789ABCDEF';
//     let cor = '#';
//     for (let i = 0; i < 6; i++) {
//         cor += letras[Math.floor(Math.random() * 16)];
//     }
//     return cor;
// }

// // Evento para o botão "random"
// document.getElementById('change-color').addEventListener('click', function() {
//     const corAleatoria = gerarCorAleatoria();
//     document.body.style.backgroundColor = corAleatoria;
//     document.getElementById('new-color').textContent = `Cor atual: ${corAleatoria}`;
// });


// Função para gerar cor hexadecimal aleatória
let changeColorBtn = document.getElementById('change-color');
let newColor = document.getElementById('new-color');
let myBackground = document.querySelector('body');  // Ou '#container', depende do que queres mudar
 
function getRandomInt(max = 256) {
    return Math.floor(Math.random() * max);
}
 
function generateColor(){
    return 'rgb(' + getRandomInt() + ',' + getRandomInt() + ',' + getRandomInt() + ')';
}
 
function changeColorF(){
    const cor = generateColor();
    myBackground.style.backgroundColor = cor;   // muda o fundo da página (ou container)
    newColor.textContent = `Cor atual: ${cor}`;  // mostra o código da cor no elemento HTML
}
 
// Associar só ao botão de mudar cor
changeColorBtn.addEventListener('click', changeColorF);