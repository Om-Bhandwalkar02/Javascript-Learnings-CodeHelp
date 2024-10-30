// Promises
// promise is an object which is used to handle returning value/completion state of asynchronus piece of code effectively

// A promise is in one of these states:
// pending --> initial state which is neither fullfilled nor rejected 
// fullfilled --> it means that the operation was completed successfully
// rejected --> meaning that the operation failed


// let firstPromise = new Promise( (resolve, reject) => {
//     console.log('kudi kehndi pehle jaguar lelo fir jeenna marzi pyaar lelo');
//     resolve('jaguar laya....ye le pyaar')
//     reject(new Error('alto laya.....chal bhaag yaha se ab'));
// })


// function sayMyName(){
//     console.log('My Name is Om Bhandwalkar');
// }

// setTimeout(sayMyName, 3000);

// promise1 = new Promise((resolve, reject) => {
//     // let success = true;
//     let success = false;

//     if (success){
//         resolve('Promise fullfilled!');
//     }
//     else{
//         reject('Promise rejected!')
//     }
// })

// promise1.then((message) => {
//     console.log('first msg');
//     return 'yeh le second msg'
// }).then((messgae) => {
//     console.log('second msg: ' + messgae);
// }).catch((error) => {
//     console.error('reject kar diya tuze');
// }).finally((message) => {
//     console.log('mein toh final hu chalunga pakka!');
// })


// promise1.then((message) => {
//     console.log('then ka msg: '+ message);
// }).catch((err) => {
//     console.log('error aaya: '+ err);
// });


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'First');
})


let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Second');
})


let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'Third');
})


//all promise should be resolved/fullfilled to make these promise fullfilled 
Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
})
.catch((err) => {
    console.error('error: '+ err)
})