// Loop

//For Loop

//counting 0 to 5
for(let i=0; i<=5; i++){
    console.log(i);
}

console.log('----------------------------------------------')
console.log('----------------------------------------------')

// reverse counting 5 to 0

for (let i = 5; i>=0; i--){
    console.log(i);
}


console.log('----------------------------------------------')
console.log('----------------------------------------------')


for(let i = 1; i<=10; i++){
    console.log(i)
    if (i===4){
        break
    }
}

console.log('----------------------------------------------')
console.log('----------------------------------------------')


for(let i = 1; i<=10; i++){
    console.log(i)
    if (i===4){
    continue
    }
}
// break --> 'aree ruk jaa bhai...'
// continue --> 'ye waala skip kar re ... fatafat  aage chal'

console.log('----------------------------------------------')
console.log('----------------------------------------------')


//While Loop

let i = 1
while (i<=20) {

    console.log(i);
    
    i++;
}

console.log('----------------------------------------------')
console.log('----------------------------------------------')


// do while Loop
//yaha pe pehle kaam hoga/ iteration hogi fir condition check hogi

let j = 1;
do{
    console.log(j)
    j++;
}while(j<=10)

console.log('----------------------------------------------')
console.log('----------------------------------------------')


// Strings
//Sequence characters

let firstName = 'Om'
let lastName = 'Bhandwalkar'

// Template string ``

let fullName = `Om
Bhandwalkar
`

console.log(firstName + ' ' + lastName)
console.log(fullName)

console.log(`${firstName} ${lastName}`)

console.log(firstName.toUpperCase())


//Substring
// ek string ka part

let str = 'Danish bhai zinda hote toh.......'
console.log(str.substring(2, 4))
// start index included a ... end index excluded a


let words = str.split(' '); //words ek array bangaya

console.log(words)


// to convert array to string
console.log(words.join('-'))
