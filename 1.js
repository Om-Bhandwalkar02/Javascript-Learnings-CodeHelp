console.log('Hello World!')

a = 4
console.log(a++) //4
console.log(++a) //6

console.log(--a) //5
console.log(a--) //5


a += 1
console.log(a)
if (a&1){
    console.log('odd')
}
else{
    console.log('even')
}


let age = 19;
let status1 = (age > 18) ? 'I can vote!' : "I can't vote"
console.log(status1)


// Logical Operators

// AND &&
// OR ||
// NOT !

// falsy and truthy

// falsy --> undefined, null, 0, NaN, ''
// truthy --> anything which is not falsy

console.log(false || 7)

//Yaha pe hui short circuiting
// 7 tak gaya....true nikla short circuit hogaya
console.log(false || 7 || 12 || 14)


// Bitwise Operator
// &, |, ~, <<, >>, ^

console.log(~0)
console.log(5 << 1)
console.log(5 >> 1)


// Conditionals

age = 0
if (age > 18) {
    console.log('You can vote!')
} 
else if (age > 0  && age!=0 )  {
    console.log("You can't vote!")
}
else{
    console.log('Something went wrong...!')
}

let num = 2

switch(num){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
   break;
    case 4: console.log('D');
    break;
    default: console.log("I'm default");
}