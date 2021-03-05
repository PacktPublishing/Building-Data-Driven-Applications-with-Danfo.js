exports.addTwoNumbers = function (num1, num2) {
    if (typeof num1 == "string" || typeof num2 == "string") {
        throw new Error("Cannot add string type to number")
    }
    return num1 + num2;

};

exports.mean = function (numArray) {
    if (numArray.length == 0) {
        throw new Error("Cannot compute mean of empty array")
    }
    let n = numArray.length;
    let sum = 0;

    numArray.forEach((num) => {
        sum += num;
    });
    return sum / n;
};  