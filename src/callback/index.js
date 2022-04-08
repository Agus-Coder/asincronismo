function sum(a, b) {
    return a + b;
}

function mult(a,b){
    return a*b;
}

function calc(num1, num2, callback) { //callback es un parametro que se llama asi por estandar, para identificar al callback
    return callback(num1, num2);
}

console.log(calc(5,2,mult))

function date (callback) {
    console.log(new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate);


console.log(calc(5,3,mult))