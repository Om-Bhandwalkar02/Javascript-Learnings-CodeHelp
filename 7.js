// first you instantiate a plan and then you convert that plan into an actual thing, this called an object

class Human{
    // properties
    age // public, by default
    #wt = 80  // private using #
    ht = 180


    constructor(newAge, newHeight, newWeight) {
        this.age = newAge
        this.ht = newHeight
        this.#wt = newWeight
    }

    // behaviour
    walking(){
        console.log('I am walking!')
    }

    running(){
        console.log('i am running')
    }

    get fetchWeight(){
        return this.#wt
    }

    set modifyWeight(val){
        this.#wt = val
    }
}

let obj  = new Human(50, 190, 150)

console.log(obj.age)
obj.walking()

let ss = obj.fetchWeight
console.log(ss)

console.log(obj.ht)


// default parameters
// allow to use functions with dafault values



function sayMyName(fName = 'Hrishikesh', lName = fName.toUpperCase()){  //here lName is dependent on the fName
    console.log('mera naam ', fName, lName, 'hai');
}

sayMyName('Om', 'Bhandwalkar')
sayMyName('Om')
sayMyName()


// function solve(value = {age:15, ht:150, wt:90}){
//     console.log('HELLO JEEEE', value);
// }

// solve()




// function solve(value = ['love', 'rahul', 'kunal']){
//     console.log('HELLO JEEEE', value);
// }

// solve()



// function solve(value = 'Rahul'){
//     console.log('HELLO JEEEE', value);
// }

// solve(null)



// function solve(value = 'Rahul'){
//     console.log('HELLO JEEEE', value);
// }

// solve(undefined)


function getAge(){
    return 190;
}


function utility(name = 'om', age = getAge()){

    console.log(name, age);
}


utility('om', 19)
utility()