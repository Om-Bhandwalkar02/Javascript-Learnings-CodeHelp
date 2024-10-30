function sayMyName(){
    console.log('Om Bhandwalkar');
}

console.log('Start');

// asynhronucs code
setTimeout(sayMyName, 3000);

console.log('End');



// The event loop in JavaScript continuously checks the call stack and callback queue,
// moving queued functions to the stack for execution when it's empty, enabling asynchronous, non-blocking behavior.


