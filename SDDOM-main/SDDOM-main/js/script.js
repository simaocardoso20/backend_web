// const mySpan = document.getElementById('History');
// console.log(mySpan.innertext)
// mySpan.innertext = 'História'

// const mydivs = document.getElementsByTagName('div');
// console.log(mydivs);

// const myDivsQ = document.querySelectorAll('.div');
// console.log(myDivsQ);



// let myLis = document.querySelectorAll('.tpclevel-1');
// console.log(myLis);
// for(let li of myLis){

//     li.style.backgroundColor = 'yellow';

// }

// let myLis = document.querySelectorAll('.tpclevel-1');

// for (let li of myLis) {
//    // adiciona nova classe
//    li.classList.add('classListTest');

//    // remove a antiga
//    li.classList.remove('tpclevel-1');

//    // verifica se a nova classe foi adicionada
//    console.log(li.classList.contains('classListTest'));
// }

function createP(){
    const newP = document.createElement('p');
    newP.textContent = 'Este é um novo parágrafo adicionado dinamicamente.';
    document.body.appendChild(newP);
}