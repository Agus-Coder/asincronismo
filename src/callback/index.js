function sum(a, b) {
    return a + b;
}

function calc(num1, num2, callback) { //callback es un parametro que se llama asi por estandar, para identificar al callback
    return callback(num1, num2);
}

console.log(calc(2,2,sum))