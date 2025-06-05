let container = document.getElementById('container');

for (let i = 1; i <= 100; i++) {

// Cria o botão
let button = document.createElement('button');

// Escreve o texto dentro do botão
button.innerText = 'Botão ' + i;

//Adiciona o botão dentro da div "container"
container.appendChild(button);

button.style.backgroundColor = "blue";
}
