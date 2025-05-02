/*let myLuckyNumber = 20;
let myName = 'Simão';

alert('O meu nome é: ' + myName);
alert('O meu número favorito é: ' + myLuckyNumber);

console.log('O meu nome é: ' + myName);
console.log('O meu número favorito é: ' + myLuckyNumber); 


const MESSAGE = " TASTE THE RAINBOW! ";
let whisper = MESSAGE.trim().toLowerCase();

console.log(whisper); 

let test = 'Software';
let test1 = test.indexOf('t');
console.log(test1);


const WORD = "skateboard";
let facialHair = WORD.slice(5).replace('o', 'e');
console.log(facialHair);


let fullName = 'Sara Monteiro';
fullName.slice(0, fullName.indexOf(' '));
console.log(fullName.slice(0, fullName.indexOf(' '))); 

// sintaxe tradicional
console.log("O meu nome é "+myName+"e o meu número preferido é "+myLuckyNumber"");

// sintaxe simplificada
console.log(`O meu nome é ${myName} e o meu apelido é ${myLuckyNumber}`); 

let millionDolarQuestion = prompt('Qual é o seu nome?'); // Estou a criar uma variável onde vou querer a resposta a esta questão.
console.log(millionDolarQuestion); // Estou a imprimir a resposta na consola. 


let firstName = prompt('Qual é o seu nome?'); 
let lastName = prompt('Qual é o seu último nome?'); 
console.log(firstName + ' ' + lastName); 

//alert('Olá ' + firstNameme + ' ' + lastName + '!');
//console.log('Olá ' + fisrtName + ' ' + lastName + '!');

alert(`Olá ${firstName} ${lastName}!`);
console.log(`Olá ${firstName} ${lastName}!`); */

let day = prompt('Qual é o dia da semana?');
    switch (day) {
        case 'segunda-feira':
            alert('Que pena, queria tanto que fosse sexta!');
            break;
        case 'terça-feira':
            alert('Que pena, queria tanto que fosse sexta!');
            break;
        case 'quarta-feira':
            alert('Que pena, queria tanto que fosse sexta!');
            break;
        case 'quinta-feira':
            alert('Que pena, queria tanto que fosse sexta!');
            break;
        case 'sexta-feira':
            alert('yay, sobrevivemos a mais uma semana!');
            break;
        case 'sábado':
            alert('Que pena, queria tanto que fosse sexta!');
            break;
        case 'domingo':
            alert('Que pena, queria tanto que fosse sexta!');
            break;
        default:
            alert('Isso não é um dia da semana!');
            break;

    }

        console.log('day');
        
        let password = prompt('Qual é a sua password?'); 
        if (password.length <=5 || password.length >=7) {
            alert('A password deve ter pelo menos 6 caracteres!');
            
        } else {
            alert('Password válida!');
        }
        console.log(password);


    


    

    
      

    console.log(day); 

}











