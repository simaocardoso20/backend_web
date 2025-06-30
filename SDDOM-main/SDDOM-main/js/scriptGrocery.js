let MyformG = document.getElementById('myShoppingList');


myFormG.addEventListener('submit', function (e) {
  e.preventDefault(); // 1. Previne o comportamento padrão

const formData = new FormData(this); // 2. Cria objeto FormData

const newLo = document.createElement('li');
const myUl = document.querySelector('ul');
li.innerText = formData.get('produto') + ' - ' + formData.get('quantidade');

myUl.appendChild(newLo); // 3. Adiciona o novo item à lista


// 4. Reseta o formulário
form.reset();
  });