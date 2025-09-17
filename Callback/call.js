function display(any){
    console.log(any);
}
function calculator(a, b){
    let sum = a+b;
    display("Sum: " + sum);
}
calculator(5, 3); 

//with callback
function display1(any){
    console.log(any);
}
function calculator1(a, b, callback){
    let sum = a+b;
    callback("Sum: " + sum);
}
calculator1(5, 3, display1); 

const num = [4, 1, -20, -7, 5, 9, -6];
const positive = removeneg(num, (x)=> x>0);
console.log(positive); // [4, 1, 5, 9]

function removeneg(num, callback){
    let result = [];
    for (const n of num){
        if (callback(n)) {
            result.push(n);
        }
    }
    return result;
}
