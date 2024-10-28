 // DOM: Changing Style 

 let paraElement = document.getElementById('spara');
 console.log(paraElement);

 console.log( paraElement.style);

 paraElement.style.backgroundColor = 'blue'; 


 let secondElement  = document.getElementById('sdiv');
console.log(secondElement);


console.log(secondElement.style.cssText);

secondElement.style.cssText = 'color: white; background-color: black;'


let fpara = document.getElementById('fpara');

console.log(fpara);


fpara.setAttribute('style', 'margin: 5rem');

// fpara.className = 'Bulbul';


// console.log(fpara.className);


console.log(fpara.classList);

fpara.classList.add('secondClass');


fpara.classList.remove('firstClass');

fpara.classList.toggle('firstClass');        


console.log(fpara.classList.contains('firstClass'));
