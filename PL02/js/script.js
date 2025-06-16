
// *-*-*-*-* Ex01 *-*-*-*-*

function newColorBtn() {
    this.style.backgroundColor = 'red';
}

const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');

button1.addEventListener('click', newColorBtn);
button2.addEventListener('click', newColorBtn);
button3.addEventListener('click', newColorBtn);



// *-*-*-*-* Ex02 *-*-*-*-*

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



// *-*-*-*-* Ex03 *-*-*-*-*

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



// *-*-*-*-* Ex04, 05 e 06 *-*-*-*-*

const botaoMensagem = document.getElementById("botaoMensagem");

const espacoMensagem = document.getElementById("espacoMensagem");
 
botaoMensagem.addEventListener("click", function () {
  // Criar o parágrafo com a mensagem motivacional
  const mensagem = document.createElement("p");
  mensagem.textContent = "É só mais um esforço e serei um ótimo programador!";
  mensagem.style.fontSize = "16px"; // tamanho inicial da fonte
  espacoMensagem.appendChild(mensagem); // adicionar o parágrafo
 
  // Criar botão para aumentar o texto
  const aumentarTexto = document.createElement("button");
  aumentarTexto.textContent = "Aumentar Texto";
 
  // Quando clicar no botão, aumenta o tamanho da fonte e centra o texto
  aumentarTexto.addEventListener("click", function () {
    const atual = parseFloat(mensagem.style.fontSize);
    mensagem.style.fontSize = (atual + 5) + "px";
    mensagem.style.textAlign = "center";
  });
 
  // Criar botão para reduzir o texto
  const reduzirTexto = document.createElement("button");
  reduzirTexto.textContent = "Reduzir Texto";
 
  // Quando clicar no botão, diminui o tamanho da fonte e alinha o texto à direita
  reduzirTexto.addEventListener("click", function () {
    const atual = parseFloat(mensagem.style.fontSize);
    if (atual > 5) {
      mensagem.style.fontSize = (atual - 5) + "px";
      mensagem.style.textAlign = "right";
    }
  });
 
  // Adicionar os botões ao mesmo local onde está o parágrafo
  espacoMensagem.appendChild(aumentarTexto);
  espacoMensagem.appendChild(reduzirTexto);
});



  // *-*-*-*-* Ex07 *-*-*-*-*

 // Selecionar o parágrafo e o botão
const texto = document.getElementById("textoExercicio");
const alternar = document.getElementById("alternarVisibilidade");
 
// Quando clicar no botão, verifica se o parágrafo está escondido ou visível
alternar.addEventListener("click", function () {
  if (texto.style.display === "none") {
    texto.style.display = "block"; // mostrar
  } else {
    texto.style.display = "none";  // esconder
  }
});



    // *-*-*-*-* Ex08 *-*-*-*-*

    // Iniciar a variável do contador a 0
    let valor = 0;

    // Seleciona o parágrafo onde será mostrado o número
    const visor = document.getElementById("contador");
 
    // Esta função atualiza o valor do contador (soma ou subtrai)
    function atualizar(valor) {
    valor = valor + valor;
    visor.textContent = valor;
  }
 
   // Esta função anula o contador (volta para zero)
   function anular() {
   valor = 0;
   visor.textContent = valor;
  }

  // Ligar os botões do contador aos eventos
    document.getElementById('aumentar').addEventListener('click', function () {
    atualizar(1);
    });
        document.getElementById('diminuir').addEventListener('click', function () {
    atualizar(-1);
    });
        document.getElementById('anular').addEventListener('click', function () {
    anular();
    });

    // Também funciona com as setas ↑ e ↓
document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowUp") {
    atualizar(1);
  } else if (evento.key === "ArrowDown") {
    atualizar(-1);
  }
});
 
// Se clicar no número, também coloca o contador à 0
visor.addEventListener("click", anular);




  // *-*-*-*-* Ex09 *-*-*-*-*

// Seleciona todos os itens da lista
const listaItens = document.querySelectorAll("#lista li");

// Seleciona o botão "Aprendido"
const botaoAprendido = document.getElementById("Aprendido");
 
// Quando clicar no botão, adiciona "- Aprendido" a cada item da lista
botaoAprendido.addEventListener("click", function () {
  for (let i = 0; i < listaItens.length; i++) {
    listaItens[i].textContent += " - Aprendido";
  }
});

  


  // *-*-*-*-* Ex10 *-*-*-*-*

const botaoAdicionar = document.getElementById("botaoAdicionar");
 

botaoAdicionar.addEventListener("click", function () {
  const novo = prompt("O que mais aprendeste?");
 
  if (novo) {
    const novoItem = document.createElement("li"); 
    novoItem.textContent = novo; 
    document.getElementById("lista").appendChild(novoItem); 
  }
});
