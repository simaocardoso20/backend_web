// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// // Seleciona todos os <span> dentro do <h1>
// let spans = document.querySelectorAll('h1 span');

// spans.forEach((span, index) => {
//     if (index < colors.length) {
//         span.style.color = colors[index];
//     }
// });


let spans = document.querySelectorAll('span');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let counter = 0;
for (let span of spans) {
    span.style.color = colors[counter];
    counter++;
}


// spans.forEach((span, index) => {
//     span.style.color = colors[index]
// })
