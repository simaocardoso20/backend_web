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
let shoppingList = []
let item = prompt('Qual é o item a adicionar? ou digite "fim" para encerrar)')
for(let i = 0; i<shoppingList.length; i++){
    console.log('item adicionado:' );   
}
shoppingList.push(item);
console.log(shoppingList)


let password = prompt('Qual é o código? ');
while (password !== 'fim'){

    console.log('código errado');
    password = prompt('Qual é o código? '); 
    }

   

}

   




//Parte 2

//let delete = prompt('Queres apagar o último item?');
//shoppingList.splice(shoppingList.indexOf(delete), 1);

//for(let i = 0; i<shoppingList.length; i++){
//    console.log('item adicionado:' +shoppingList[i]);   
//}





    





