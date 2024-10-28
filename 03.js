// Function
// block of code which performs a specific task

function sayMyName(){
    console.log('Om Bhandwalkar')
}

sayMyName()


function printCounting(){

    for(let i = 0; i <= 10; i++){
        console.log(i)
    }
}

printCounting()


function printNum(num){{
    console.log("Printing Number: ", num)
}}

printNum(5)


function getAverage(num1, num2){

    let avg = (num1 + num2) / 2
    console.log(avg)
}

getAverage(10, 50)


function getSum(a, b, c){

    let sum = a + b + c
    return sum

}

// function declaration
ans = getSum(1,2,3)
console.log(ans)


// function expression
const add = function (a, b){
    return a + b
}
console.log(add(2,2))

// Arrow Function
const getExp = (x,y) => {
    let ans = x ** y
    return ans;
}

console.log(getExp(3, 2))