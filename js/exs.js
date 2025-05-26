//ex 17


//ex pp 35
// let myFirstVar = prompt('Qual é o teu primeiro nome?');
// let surname = prompt('Qual é o teu primeiro apelido?');

// alert(`Olá ${myFirstVar} ${surname}`);
// console.log(`Olá ${myFirstVar} ${surname}`);

//ex pp 39
// let userWeekDay = prompt('que dia da semana é?');

// if(userWeekDay.toLowerCase().trim() == 'sexta'){
//     console.log('yay, sobrevivemos a mais uma semana');
// }else{
//     console.log('força nisso');
// }

// let userPass = prompt('Qual é a sua pass?');

// if(userPass.length < 6){
//     console.log('a pass tem que ter pelo menos 6 caracteres');
// }else{
//     console.log('pass ok');
// }

//pp 43
// let planets = ['Mercúrio', 'Vénus', 'Terra', 'Mart', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];
// let oldPlanets = planets;
// planets[3] = 'Marte';
// planets.pop();
// planets.unshift('novoPlaneta');
// console.log(planets)

//pp 55
//for(let i =0; i<6; i++){
//    console.log(i+ ' Da ba dee da ba daa');
//}

//for(let i = 25 ; i>=5 ; i-=5){
//    console.log(i);
//}

//pp58
//const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];
//for(let i=0; i<people.length; i++){
//    console.log(people[i].toLocaleUpperCase());
//}

//for(let name of people){
//    console.log(name) 
//}

//pp62
//let shoppingList = []
//let item = prompt('Qual é o item a adicionar? ou digite "fim" para encerrar)')
//for(let i = 0; i<shoppingList.length; i++){
//    console.log('item adicionado:' );   
//}
//shoppingList.push(item);
//console.log(shoppingList)


//let password = prompt('Qual é o código? ');
//while (password !== 'fim'){

 //   console.log('código errado');
 //   password = prompt('Qual é o código? '); 
 //   }



//Parte 2

//let delete = prompt('Queres apagar o último item?');
//shoppingList.splice(shoppingList.indexOf(delete), 1);

//for(let i = 0; i<shoppingList.length; i++){
//    console.log('item adicionado:' +shoppingList[i]);   
//}


//pp 


// const airplaneSeats = [
// ['Ruth', 'Anthony', 'Stevie'],
// ['Amelia', 'Pedro', 'Maya'],
// ['Xavier', 'Ananya', 'Luis'],
// ['Luke', 'null', 'Deniz'],
// ['Rin', 'Sakura', 'Francisco']
// ];

// airplaneSeats[3][1] = 'Simao';
// console.log(airplaneSeats[3][1]);


// let product = {
//     productName: 'Bomba de Calor',
//     inStock: true,
//     price: 1.99,
//     moeda: '€',
//     color: ['vermelho', 'azul', 'verde']
// }

//     product.price = 2.55;
//     console.log('O produto custa ' +product.price + product.moeda+ ' e a cor é ' +product.color[2]);

// pp86

// function firstNames() {
// const fullNames = [   
//   { first: 'Albus', last: 'Dumbledore' },
//   { first: 'Harry', last: 'Potter' },
//   { first: 'Hermione', last: 'Granger' },
//   { first: 'Ron', last: 'Weasley' },
//   { first: 'Rubeus', last: 'Hagrid' },
//   { first: 'Minerva', last: 'McGonagall' },
//   { first: 'Severus', last: 'Snape' }
// ];

// const firstNames = fullNames.map(function (name) {
//   return name.first;
// });
 
// console.log(firstNames);

// }


// Com o mesmo array inicial, apresentar na consola o nome completo

  
 

// fullNames.forEach(function (name) {
//   console.log(name.first + ' ' + name.last);
//   }
// );

// o name é um item e dentro de cada item no array há objetos.
// forEach é para procurar no array os elementos um a um.


// pp88
 
//Forma tradicional
// function greet(name){
//   console.log ('Hey ' + name);
// }
 
// let myName = prompt('Qual é o teu nome?')
// greet(myName);
 
 
//Forma com Argumentos
// function greet(name){
//   return 'Hey' + name
// }
 
 
//pode-se chamar no botao com o onclik
 
//Com Arrow Functions

// const greet = (name) => {
//   return 'Hey ' + name;
// }

const greet = name => 'Hey ' + name; // Arrow function com um único argumento não precisa de parênteses
 
// const isEven (é a função) = num (é o argumento) => num % 2 === 0 (é o código que executa a função);










    





