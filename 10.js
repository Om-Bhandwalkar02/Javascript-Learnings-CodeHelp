// Error Handling
// ---> what is an error
// ======> disruption in a normal flow of program

// Types of error

//compile time error ---> when code is in  parsing stage ---- here without running to run code we get that there is an syntax error here
// syntax error
// console.log(1;


// run time error --> we have to run these code to get to know about these error
// reference error
// console.log(x)






// error handling

try {
    console.log('Loading....')
    console.log(x)
    console.log('take your data from here please!!');
} catch (e) {
    // define here what to do with errors
    // retry logic 
    // fallback mechanism
    // logging
    // custom error


    console.log('out of station.....try back later')
    console.log('got these erro: ', e)
} finally{
    console.log('benstock!.....kuch bhi hojaye....mein toh chalunga hi');
}



// To show/propogate/return a custom error use throw keyword

// try {
//     console.log(x);
// } catch (e) {
//     throw new Error("bhai aap thode nashe mein ho kyaa...") 
    
// }




let errorCode = 100
if (errorCode == 100) {
    throw new Error("Invalid Json")

}