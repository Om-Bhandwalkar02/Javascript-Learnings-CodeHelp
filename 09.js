// Object cloning && Garbage collector


let obj = {
    age:12,
    wt: 66,
    ht: 180,
}

console.log(obj);

obj.color = 'white' // objects are dynamic in nature because we can change/edit the properties on run time

console.log(obj);



// Object cloning




//  ==> spread operator  ...  method
let src = {
    age:12,
    fullName:'Om',
}

// let dest = {...src} // cloning object
// let dest = src // referencing the same src object ..... stack mein toh sirf reference hai.....actual object heap mein hai


// src.age = 2322 // here src object attribute has changed but not dest, because they are seperate/different objects!


// console.log('src: ',src)
// console.log('dest: ',dest)








//  ==> assign method 

// let dest = Object.assign({}, src)

// src.age = 9999;

// console.log('src: ',src)
// console.log('dest: ',dest)

// let src2 = {
//     value:3236723,
//     name: 'Om Bhandwalkar'
// }


// let dest2 = Object.assign({}, src, src2)

// console.log(dest2);






// iteration method

let dest = {}

// cloning object using iteration
for (let key in src){
    let newKey = key
    let newValue = src[key]

    // insert new key and valye in dest and create a clone

    dest[newKey] = newValue
}

src.age = 222;

console.log('src', src);
console.log('dest', dest);













// Garbage collector (GC)
// it is a tool/utility used for memory management
// its prime focus is to make the memory free which is no longer in use

// memory leak
// jo memory free honi chahiye thi ... woh abhi tk free nahi hui haiii



//There is no control over GC
// it is running in background simultaneously