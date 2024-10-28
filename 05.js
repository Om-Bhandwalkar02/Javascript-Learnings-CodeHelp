sayMyName('Om')

function sayMyName(Name){
    console.log(Name)
}



console.log(hello)

var hello = function(Name){
    console.log(Name)
}


// variable/function hoisting will only work on variable created by var keyword/simple functions not the funciton expression or arrow function


let greet = function(){
    console.log('Greetings for the day')
}

greet()


function greetMe(greet, fullName){
    console.log('Hello, ', fullName)
    greet()
}

greetMe(greet, 'Om Bhandwalkar')


function solve(number){
    return function(number){
        return number*number
    }
}

let ans = solve(5)
console.log(ans) // [Function (anonymous)]


//now ans became the funciton
finalAns = ans(10)
console.log(finalAns)


const arr = [
    function(num1, num2){
        return num1 + num2
    },
    function(num1, num2){
        return num1 - num2
    },
    function(num1, num2){
        return num1 * num2
    },
    function(num1, num2){
        return num1 / num2
    }
]


let first = arr[0];
ans = first(2,3)
console.log(ans);

// In javascript the functions are called 'First class citizens' 




let obj = {
    age: 19,
    wt: 36,
    ht: 180,

    greet: () => {
        console.log('Namaste Dunia!');
    }
}

console.log(obj)

obj.greet()