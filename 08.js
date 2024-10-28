// Math object

console.log(Math.PI);
console.log(Math.max(29,33,21,1,0,2222));
console.log(Math.min(29,33,21,1,0,2222));
console.log(Math.round(2.6));
console.log(Math.ceil(2.6));
console.log(Math.floor(2.6));
console.log(Math.abs(-55)); //makes number positive
console.log(Math.random());
console.log(Math.sqrt(5));
console.log(Math.pow(2, 10));


// Date

let curr = new Date()
console.log(curr);


let date = new Date('February 2 2005 09:15')
console.log(date);


let newdate = new Date(2005, 1, 2, 9)
console.log(newdate);


console.log(newdate.getFullYear());
console.log(newdate.setFullYear(2004));
console.log(newdate);

