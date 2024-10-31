// function outer() {
//     let myName = 'Om';

//     function inner() {
//         console.log(myName);
//     }

//     inner();
// }


function outer() {
    let myName = 'Om';

    function inner() {
        console.log(myName);
    }

    return inner;
}

let innerFunc = outer(); // yaha outer() mein inner function ka reference return hua a 

innerFunc(); // inner function call


//the concept of binding the required data with the function is called Closure.....data ki copy nahi bani hai....sirt uska reference share hua a bas!!