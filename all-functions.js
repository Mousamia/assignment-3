// Problem-1: mindGame()->a function returns a number multiplied by 3, added 10, divided by 2, and subtracted with 5
function mindGame(num){
    if(num < 0){
        return  "please enter a positive number";
    }
    let result = num;
    result = result*3;
    result = result+10;
    result = result/2;
    result = result-5;
    return result;
}

console.log(mindGame(33));
console.log(Math.sign(2));        
