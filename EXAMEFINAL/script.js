// Ex01
O JS é o padrão em linguagem "client side" para qualquer browser e serve para dar vida a páginas web, tornando-as dinâmicas e interativas.
Alguns exemplos de uso do JS incluem:
- Validação de formulários
- Criação de animações
- Manipulação de elementos HTML
- Banners
- Menus pop-up


// Ex02
O elemento input será criado no HTML porque é a linguagem que usamos para criar elementos visíveis, como caixas de texto (input) por exemplo.

O JavaScript é usado posteriormente, para interagir com esses elementos, como por exemplo responder a ações do utilizador através de cliques num botão ou submeter um formulário.


//Ex03
//3.1
Não

//3.2
Não, retorna a idade (31)

//3.3
Sim 

//3.4
15

//3.5
Não

//3.6
num1 = 1

//3.7
boolean


//Ex04
//4.1
let passwords = [1234, 'sara1986', 2023];
passwords.push('myNewPassword');
console.log(passwords);

//4.2
let passwords = [1234, 'sara1986', 2023, 'myNewPassword'];
if (passwords.includes('myNewPassword')) {
  alert('Password correta!');
} else {
  alert('Password incorreta.');
}

//4.3
let passwords = [1234, 'sara1986', 2023, 'myNewPassword'];
let safePasses = passwords.filter(pass => {
  return String(pass).length > 6;
});
console.log('Passwords seguras com mais de 6 caracteres: ' + safePasses);


//Ex05
//5.1
const studentGrades = [
  {
    studentName: 'Rita',
    grade: 16,
    nameAndGrade() {
      return `A ${this.studentName} tem nota ${this.grade}`;
    }
  },
  {
    studentName: 'Luís',
    grade: 20
  },
  {
    studentName: 'João',
    grade: 18
  },
  {
    studentName: 'André',
    grade: 15
  },
  {
    studentName: 'Luísa',
    grade: 19
  }
];

studentGrades.forEach(function(student) {
  console.log(`A nota de ${student.studentName} é ${student.grade}`);
});


//5.2
Os indices do array vão de 0 a 4, como tal não existe no array o studentGrades[5]. O retorno seria undefined.
A Rita encontra-se na posição [0] do array e em último está a Luísa na posição [4].

//5.3
Sim


//Ex06
//6.1
function changeTitle() {
const title = document.querySelector('h2');
title.innerText = 'Os meus ensinamentos para a vida.'
console.log(title.innerText);
}

//6.2
const addItens = document.querySelectorAll('li');
addItens.forEach(item => {
  item.textContent += ' com sucesso!';
});

//6.3
  const form = document.querySelector('form');
  const input = document.getElementById('myItem');
  const lista = document.getElementById('myList');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const texto = input.value.trim();
    if (texto !== '') {
      const novoItem = document.createElement('li');
      novoItem.textContent = texto + ' com sucesso!';
      lista.appendChild(novoItem);
      input.value = ''; 
    }
  });

7
Grave of the Fireflies


8
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    alert('Tens a certeza que queres entregar o teste?');
  }
});