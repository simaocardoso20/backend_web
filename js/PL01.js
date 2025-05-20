
// Ex01
function multiply(num1,num2) {
    let total = num1 * num2;
    return 'O resultado da multiplicação é: ' + total;
}



// Ex02
function isShortsWeather(temperature) {
    if (temperature > 25) {
        return 'Verdadeiro';
    } else {
        return 'Falso';
    }
}




// Ex03
function lastElement(array) {
      if (array.length === 0) {
        return null;
      } else {
  return "O último elemento do array é: " + array[array.length - 1];

}
}



// Ex04
function sumArray(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return 'A soma de todos os números é: ' + sum; 
}




// Ex05
function returnDay(dayNum) {
    if(dayNum < 1 || dayNum > 7) {
        return 'Null';
    }
    const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    return 'O dia da semana é: ' +days[dayNum - 1];
}