// Problem-1: mindGame()->a function returns a number multiplied by 3, added 10, divided by 2, and subtracted with 5
function mindGame(num){
    // checking if num is positive
    if(num < 0){
        return  "Please Enter a Positive Number";
    }
    // checkng if num is string
    if(typeof(num) === "string"){
        return "Please Enter Any Number";
    }
    let result = num;
    result = result*3;
    result = result+10;
    result = result/2;
    result = result-5;
    return result;
}
