/* Problem-1: mindGame()->a function returns a number multiplied by 3, added 10, divided by 2, and subtracted with 5 */
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

/* Problem - 2: evenOdd() is a function checking if a string has even number of letters or not */
function evenOdd(text){
    if(typeof(text) === "number"){
        return "Please Enter a String";
    }
    // storing the length of string
    let len = text.length;

    if((len%2) != 0){
        return "odd";
    }

    if((len%2) === 0){
        return "even";
    }

}

/*Problem -3: isLGSeven() is a function checks the diiference of a number & 7, if difference is greater than 7 return the double of input otherwise return the difference */
function isLGSeven(num){
    // checkng if num is string
    if(typeof(num) === "string"){
        return "Please Enter Any Number";
    }
    let difference = num - 7;

    if(difference < 7){
        return difference;
    }

    if(difference >= 7){
        return num*2;
    }

}

/* Problem -4: findingBadData() is a function checks how many good data (positive numbers) and bad data (negeative nubers) exists in an array */
function findingBadData(ar){
    if(Array.isArray(ar) == false ){
        return "Please Give an array as Input";
    }
    let badData = 0;
    // counting array length
    let len = ar.length;
    for(let i = 0 ; i < len ; i++){
        if(ar[i] < 0 ){
            badData++;
        }
    }
    return badData;
}
