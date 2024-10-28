
// Referene Type
// --> Arrays
// --> Objects
// --> Functions

// Primitive Types
// --> Number
// --> String
// etc etc

let obj = {
    name: 'Om',
    age: 19,
    weight: 55,
    height: "5'9",
    greet: () => {
        console.log('Hi')
    }
}

console.log(obj)
obj.greet()
console.log(typeof(obj))

second_obj = obj
console.log(second_obj)

second_obj.greet()


//yaha pe second_obj aur obj ek hi ko reference karre hai
// stack mein toh sirf reference hai...heap mein toh actual object hai

// Arrays
// collection of Elements/Items


// creation of array
let arr = [1, 2, 3, 4, 5]

// array constructor
let brr = new Array('om', 1, false)

console.log(arr)
console.log(brr)

console.log(typeof(arr))
console.log(typeof(brr))


console.log(typeof(brr[0]))
console.log(brr[0])


// Builtin methods/functions/utilities

//adds/removes last element
brr.push('danish bhai agar zinda hotee toh.....')
console.log(brr)
brr.pop()
console.log(brr)


//adds/removes first element
brr.shift();
console.log(brr)
brr.unshift('Om Bhandwalkar')
console.log(brr)

brr.push(20)
brr.push(40)
brr.push(60)



//shallow copy
console.log(brr.slice(2,4))

// deep copy
brr.splice(1, 2, 'Rushi Bhau')  // 1st index se chalo 2 values remove karo aur Rushi Bhau add karo....ok...done!
console.log(brr)



//map
let nums = [10, 20, 30]

let ans = nums.map((num) => {
    return num * num
})

console.log(ans)


nums.map((number) => {
    console.log(number*number)
})

console.log(nums.map(number => number * number))    
console.log('-----------------------------------------')
nums.map((number, index) => {
    console.log(number)
    console.log(index)
})

console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('-----------------------------------------')

// Filter
 let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

 let evenArray = numberss.filter((number) => {

    return number%2==0
    // if (number%2===0) {
    //     return true;
    // }

    // else return false;
 })

 console.log(evenArray)


console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('-----------------------------------------')

// Reduce

let mynums = [10, 20, 30, 40]
let myans = mynums.reduce((accumulator, current) => {
    console.log('accumulator : ', accumulator)
    console.log('current : ', current)

    return accumulator + current;
})

console.log(myans)

console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('-----------------------------------------')


// Sort

let randvalues = [9, 1, 7, 4, 2, 8]
console.log(randvalues)
randvalues.sort()
console.log(randvalues)


//IndexOf
console.log(randvalues.indexOf(9))

// while
// do while
// for 
// for of
// for in
// for each


let xxx = [10, 20, 30, 40, 50]

function getSum(givemearray){
    // let len = givemearray.length
    let sum = 0

    givemearray.forEach(element => {
        sum = sum + element
    });
    // for (let index = 0; index < len; index++) {
    //     sum = sum + givemearray[index]
    // }

    return sum
}

let totalSum = getSum(xxx)
console.log(totalSum);