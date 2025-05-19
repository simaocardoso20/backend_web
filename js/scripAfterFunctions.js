function helloClass() {
    alert('Olá turma de Software Developer');
}

function helloPerson(){
    alert('Olá António');
}


//função com argumentos, fica abstrata e reutilizável
function hello(greetScope){
    alert('Olá' +greetScope)
}

function sum(x, y){
let total = x + y;
return total;
}

let total2 = sum(4,6);
console.log(total2);
