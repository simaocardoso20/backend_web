let myEggOrChickenImg = document.querySelector('img');
 
function eggOrChicken(){
    if(myEggOrChickenImg.src == 'https://devsprouthosting.com/images/chicken.jpg'){
        myEggOrChickenImg.src = 'https://devsprouthosting.com/images/egg.jpg';
    } else {
    //Muda o atributo src do atributo seleccionado
    myEggOrChickenImg.src = 'https://devsprouthosting.com/images/chicken.jpg';
    }
}


