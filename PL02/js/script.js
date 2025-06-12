
//Ex01

function newColorBtn() {
    this.style.backgroundColor = 'red';
}

const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');

button1.addEventListener('click', newColorBtn);
button2.addEventListener('click', newColorBtn);
button3.addEventListener('click', newColorBtn);


//Ex02

const christmasGifts = [
     {
        name: 'Perfume', 
        price: 40
    },
    {
        name: 'Vinho', 
        price: 10
    }, 
    {
        name:'Creme', 
        price: 10
    }
];

const gift = christmasGifts.filter(function (prendasbaratas){

    return prendasbaratas.price < 20;
});

console.log(gift);


//Ex03

const users = [
    {
        nome: 'Rafaela',
        idade: 22,
        curso: 'JS Avançado'
    },
    {
        nome: 'Bruno',
        idade: 30,
        curso: 'UI/UX Design'
    },
    {
        nome: 'Carla',
        idade: 25,
        curso: 'AWS'
    }
]

const frases = users.map(function (user) {
return `${user.nome} tem ${user.idade} anos e está inscrita no curso de ${user.curso}`;
});
console.log(frases);


//Ex04

document.getElementById('paragrafo').addEventListener('click', function (adicionarParagrafo) {
document.getElementById('mensagem').innerText = 'É só mais um esforço para tirar o curso de Software Developer e serei um grande programador.';
});


//Ex05

  const btnMais = document.createElement('buttonMais');
  btnMais.innerText = 'Aumentar Texto';
  btnMais.onclick = function () {
    let tamanho = parseInt(p.style.fontSize);
    p.style.fontSize = (tamanho + 2) + 'px';
  };
  mensagem.appendChild(btnMais);

  
  const btnMenos = document.createElement('buttonMenos');
  btnMenos.innerText = 'Diminuir Texto';
  btnMenos.style.marginLeft = '10px';
  btnMenos.onclick = function () {
    let tamanho = parseInt(p.style.fontSize);
    p.style.fontSize = (tamanho - 2) + 'px';
  };
  mensagem.appendChild(btnMenos);

  // Desativa o botão principal para não repetir
  document.getElementById('paragrafo').disabled = true;


  //Ex06







  //Ex07

 function mostrarEsconder() {
      const paragrafo = document.getElementById('solucao');

      if (paragrafo.style.display === 'none') {
        paragrafo.style.display = 'block'; // mostra
      } else {
        paragrafo.style.display = 'none'; // esconde
      }
    }


    //Ex08

    let valor = 0;

    function alterarContador(acionar) {
      if (acionar === 'aumentar') {
        valor += 1;
      } else if (acionar === 'diminuir') {
        valor -= 1;
      } else if (acionar === 'anular') {
        valor = 0;
      }

      atualizarVisor();
    }

    function atualizarVisor() {
      document.getElementById('contador').innerText = valor;
    }

    // Ligar os botões do contador aos eventos
    document.getElementById('aumentar').addEventListener('click', function () {
    alterarContador('aumentar');
    });
        document.getElementById('diminuir').addEventListener('click', function () {
    alterarContador('diminuir');
    });
        document.getElementById('anular').addEventListener('click', function () {
    alterarContador('anular');
    });


//Ex09

    document.getElementById('botaoAprendido').addEventListener('click', function() {
      const itens = document.querySelectorAll('#lista li');

      itens.forEach(function(li) {
        
        if (!li.innerText.includes('– aprendido')) {
          li.innerText += ' – aprendido';
        }
      });
    });
