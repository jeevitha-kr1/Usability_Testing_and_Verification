//ES5
function print(num){
    console. log(num);
}

function calculator(num1, num2, cb){
    var sum = num1 + num2;
    cb(sum);
}

calculator(2,3,print);