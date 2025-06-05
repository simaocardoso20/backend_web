
// function changeHighlight() {

// let myLis = document.querySelectorAll('li');


//     for (let element of myLis) {
//         if(element.classList.contains('Highlight')) {
//             // Se a classe já existe, remove-a
//             element.classList.remove('Highlight');
//         }
//         element.style.backgroundColor = 'yellow';
    
// }
// }



function changeHighlight() {
  const myLis = document.querySelectorAll('li');
 
  myLis.forEach(li => {
    if (li.classList.contains('highlight')) {
      li.classList.remove('highlight');
    } else {
      li.classList.add('highlight');
    }
  });
}
