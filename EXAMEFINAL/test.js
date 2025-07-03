


// function helloStudent(name, age) {
//     console.log('olá ' + name);
//     return age;
// }

// let hello = helloStudent('Rita', 31);
// let age = helloStudent('Rita', 31);


// let num1 = 1;
// let num2 = 15;
// let jsDone = true;


// //Ex04
// //4.1
// let passwords = [1234, 'sara1986', 2023];
// passwords.push('myNewPassword');
// console.log(passwords);

// //4.2
// if (passwords.includes('myNewPassword')) {
//   alert('Password correta!');
// } else {
//   alert('Password incorreta.');
// }

// //4.3
// let safePasses = passwords.filter(pass => {
//   return String(pass).length > 6;
// });
// console.log('Passwords seguras com mais de 6 caracteres: ' + safePasses);


// //Ex05
// //5.1
// const studentGrades = [
//   {
//     studentName: 'Rita',
//     grade: 16,
//     nameAndGrade() {
//       return `A ${this.studentName} tem nota ${this.grade}`;
//     }
//   },
//   {
//     studentName: 'Luís',
//     grade: 20
//   },
//   {
//     studentName: 'João',
//     grade: 18
//   },
//   {
//     studentName: 'André',
//     grade: 15
//   },
//   {
//     studentName: 'Luísa',
//     grade: 19
//   }
// ];

// studentGrades.forEach(function(student) {
//   console.log(`A nota de ${student.studentName} é ${student.grade}`);
// });


// //5.2
// Os indices do array vão de 0 a 4, como tal não existe no array o studentGrades[5]. O retorno seria undefined.
// A Rita encontra-se na posição [0] do array e em último está a Luísa na posição [4].

// //5.3
// Sim.


//Ex06
//6.1
// function changeTitle() {
// const title = document.querySelector('h2');
// title.innerText = 'Os meus ensinamentos para a vida.'
// console.log(title.innerText);
// }

//6.2
function addItemToList() {
    const addlist = document.getElementById('mylist');
    const input = document.getElementById('myItem');
    const newItemText = input.value;
    
    
    const newItem = document.createElement('li');
    
   
    newItem.innerText = newItemText;
    
    
    list.appendChild(newItem);
    

    input.value = '';
    
   
    console.log('Item adicionado:', newItemText);
}
