let botao = document.getElementById('calcular');
 
botao.onclick = function() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operacao = document.getElementById('operacao').value;
    let resultado;
 
 
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                alert('Não pode dividir por zero!');
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert('Operação inválida!');
            return;
    }
 
   document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
};
 