function calc_estimate(value) {

    let estimate = value;

    function add_2() {
        estimate += 2
        console.log('add 2 to estimate', estimate);
    }
    return add_2;
}

let add_2 = calc_estimate(50);

// we have the choice to add two to the value at any time in our code 

add_2() // add 2 to estimate 52 
add_2() // add 2 to estimate 54 
add_2() // add 2 to estimate 56 

add_2(2) // add 2 to estimate 52 
add_2(4) // add 2 to estimate 56 
add_2(1) // add 2 to estimate 5 