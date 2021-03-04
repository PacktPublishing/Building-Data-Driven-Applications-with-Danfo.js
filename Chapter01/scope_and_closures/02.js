function calc_estimate(value) {

    let estimate = value;

    function add_2() {
        console.log('add two', estimate + 2);
    }

    function add_1() {
        console.log('add one', estimate + 1)
    }

    add_2();
    add_1();

}

calc_estimate(6000) //output: add two 60002 , add one 60001