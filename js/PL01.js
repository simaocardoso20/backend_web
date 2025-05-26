// Ex01
function multiply(num1,num2) {
    let total = num1 * num2;
    console.log('O resultado da multiplicação é: ' + total);
    return total;
}




// Ex02
function isShortsWeather(temperature) {
    if (temperature > 25) {
        console.log('Hoje vai estar calor, um gelado vai-te saber bem!');
        return true;
        
    } else {
        console.log('Hoje a temperatura vai baixar, agasalha-te!');
        return false;   
    }
}




// Ex03
function lastElement(array) {
      if (array.length === 0) {
        console.log('A lista está vazia.');
        return null;
      } else {
        console.log('O último elemento da lista é: ' + array[array.length - 1]);
  return array[array.length - 1];
      }
}




// Ex04
function sumArray(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log('A soma de todos os números é: ' + sum);
    return sum; 
}




// Ex05
function returnDay(dayNum) {
    if(dayNum < 1 || dayNum > 7) {
        console.log('Número inválido. Escolhe um número de 1 à 7.');
        return 'Null';
    }

    const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
    
      switch (dayNum) {
        case 4:
            console.log('Hoje é quinta-feira, aguenta que já falta pouco para o fim de semana.');
            break;
        case 5:
            console.log('Hoje é sexta-feira, o dia mais esperado da semana!');
            break;
        case 6:
            console.log('Yupi! Chegou sábado!');
            break;
        case 7:
            console.log('Bom domingo!');
            break;
        default:
            console.log('Hoje é ' + days[dayNum - 1] + '. Tem uma boa semana!');
    }

    return days[dayNum - 1];
}