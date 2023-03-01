var addToDoButton = document.getElementById('addToDo');         // Je creer une variable lié au button, avec le content de "addToDo"
var toDoContainer = document.getElementById('toDoContainer');   // Je creer une variable lié au container avec le content de "toDoContainer"
var inputField = document.getElementById('inputField');         

addToDoButton.onclick = function(){                             // C'est une fonction "execution" qui se declanche quand on click 
    if(inputField.value != ""){                                 // Je controle que quand on click inputField ne soit pas vide 
        var paragraph = document.createElement('p')             // Si inputField n'ai pas vide, je creer une var avec comme value un 'p'
    }
    paragraph.innerText = inputField.value;                     // Je valorise le paragraphe avec la valeur de inputField.value

    paragraph.classList.add('paragraphe_style');                //Je creer une classList "baliseCss" pour la styliser 

    toDoContainer.appendChild(paragraph);                       // J'insere le paragraphe dans l'element toDoContainer

    inputField.value = "";                                      // Je vide l'input quand le paragraphe est ajoute 

    paragraph.addEventListener('click',function(){              //C'est une function qui, quand on click on ajoute un effect de style dans le css
        paragraph.classList.add('paragraph_click');
    })

    paragraph.addEventListener('dblclick',function(){           // Function eventListener, quand on double  click, on remove l'enfant de toDoContainer
       toDoContainer.removeChild(paragraph); 
    })
}