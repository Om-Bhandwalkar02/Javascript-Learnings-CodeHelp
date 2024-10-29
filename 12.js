// function changeText(){
//     let fpara = document.getElementById('fpara')    
//     fpara.textContent = 'Om Bhandwalkar'
// }

// let fpara = document.getElementById('fpara')    
// fpara.addEventListener('click', changeText)

// // fpara.removeEventListener('click', changeText)

// let anchorElement = document.getElementById('fanchor')

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault()
//     anchorElement.textContent = 'click done bhaii'
// })



let paras = document.querySelectorAll('p')

// function alertPara(event) {
//     alert('You have clicked on para: ' + event.target.textContent)
// }

function alertPara(event) {
    if (event.target.nodeName == 'SPAN') {
        alert('You have clicked on para: ' + event.target.textContent)        
    }
}



// for (let i = 0; i < paras.length; i++) {
//     const para = paras[i];
//     para.addEventListener('click', alertPara)
// }

let mydiv = document.getElementById('wrapper')

//optimal solution
document.addEventListener('click', alertPara)
