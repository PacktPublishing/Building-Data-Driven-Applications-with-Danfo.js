var estimate = 6000;

function calculate_estimate() {
    console.log(estimate);
}

calculate_estimate() // output 6000 

if (true) {
    var estimate = 6000;
}

console.log(estimate)  //output 6000


if (true) {
    let estimate2 = 6000;
}
console.log(estimate2) //output: ReferenceError: estimate2 is not defined
