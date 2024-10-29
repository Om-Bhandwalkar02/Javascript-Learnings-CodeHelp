// code 1
// it takes 100 reflows and 100 repaints

const t1 = performance.now()

for(let i = 1; i<=100; i++){
    let para = document.createElement('p')
    para.textContent = 'This is para' + i
    
    document.body.appendChild(para)
}

const t2 = performance.now()

console.log('Total time taken by code 1: ' + (t2-t1));



// code 2
// it takes 1 reflows and 1 repaints

const t3 = performance.now()

let mydiv = document.createElement('p')

for(let i = 1; i<=100; i++){
    let para = document.createElement('p')
    para.textContent = 'This is para' + i
    
    mydiv.appendChild(para)
}

const t4 = performance.now()

console.log('Total time taken by code 2: ' + (t4-t3));


document.body.appendChild(mydiv)








// reflow = process of calculating position/dimension of element ---> computationaly intensive task
// repaint = process of displaying content/element pixed by pixel ---> Faster 


// code which has less reflow and repaint is the best code in terms of performance







// code 3
// Document fragment --->  Light weight document object ---> No reflow and repaint
//only takes one during appending to the document.body

const t5 = performance.now()

let fragment = document.createDocumentFragment();

for(let i = 1; i<=100; i++){
    let para = document.createElement('p')
    para.textContent = 'This is para' + i + 'abcdedewd'
    
    fragment.appendChild(para)
}


const t6 = performance.now()

//the below line takes the 1 reflow and 1 repaint
document.body.appendChild(fragment)

console.log('Total time taken by code 3: ' + (t6-t5));
