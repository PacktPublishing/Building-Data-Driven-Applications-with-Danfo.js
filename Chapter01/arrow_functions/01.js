/**
 * Arrow functions
 */

// IIFE functions
((x) => {
    console.log(x)
})("unnamed function as IIFE") // output: unnamed function as IIFE 


// asign arrow function to a variable
const unnamed = (x) => {
    console.log(x)
}
unnamed(10) //  10

//use Arrow functions as callback
function processed(arg, callback) {
    let x = arg * 2;
    return callback(x);
}
processed(2, (x) => {
    console.log(x + 2)
});   // output:  6 
