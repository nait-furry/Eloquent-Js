function triangleMaker(size){
    if(size % 2 == 0){
        console.log("Next Time Pick An ODD NUMBER;")
        let tri = "#";
        while(tri.length <= size){
            console.log(tri);
            tri+="#";
        }
    }else{
        let tri = "#";
        let space = " ";
        while(space.length <= Math.floor((size-2)/2)){
            space+=" ";
        }
        while(space.length != 0){
            console.log([...space] + tri);
            tri+=2;
            [...space].pop();
        }
    }
}
// triangleMaker(10);


function fizzBuzz(maxNumber){
    let number= 1;
    while( number <= maxNumber){
        if(number % 3 == 0){
            if(number % 5 == 0){
                console.log("FizzBuzz");
            }else{
                console.log("Fizz");
            }
        }else{
            if(number % 5 == 0){
                console.log("Buzz");
            }else{
                console.log(number);
            }
        }
        number++
    }
}
// fizzBuzz(399);


function chesssBoard(size = 8){
    // The function is a string building engine...

    let odd = "# "; // odd valued rows
    for(let a = 1; a <= size; a++){
        if(a % 2 != 0){
            odd+="0 ";
        }else{
            odd+="# "
        }
    }


    let even = "0 "; // even valued rows
    for(let a = 1; a <= size; a++){
        if(a % 2 != 0){
            even+="# ";
        }else{
            even+="0 "
        }
    }


    let string = odd + "\n";
    for(let a = 1; a <= size; a++){
        if(a % 2 != 0){
            string+= even;
            string+="\n";
        }else{
            string+= odd;
            string+="\n";
        }
    }

    return string;

}
// console.log(chesssBoard(3));


/* FUNCTIONS*/
function min(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
// console.log(min(2,2));


function isEven(num){
    if(num == 0 || num == 2){
       return true;
    }else if(num > 2){
        num -= 2 
        return isEven(num)
    }else{
       return false;
    }
}
// Doesn't handle negative numbers so gracefully...
// console.log(isEven(-2))


function CustomFactorization(number, count = 0){
    if( Number.isInteger(( Math.log(number))/(Math.log(3))) ){
        return ("CustomFactorizable: Power of 3");
    }else if( ((number -1) % 5 == 0)){
        return ("CustomFactorizable: Multiple of 5");
    }else if( number > ((1*3) + 5) && ((count%2) == 0)){
        number = number -5;
        count++
        CustomFactorization(number, count);
    }else if( ((number-5)%3) == 0 ){
        number = number/3
        CustomFactorization(number, 0);
    }else{
        return "Can't help you";
    }
}


function countChar(string, char){
    let count = 0;
    for(a = 0; a < string.length; a++){
        if(string[a]===char){
            count++
        }
    }
    return count
}
// console.log(countChar("AadfAsfafadfAafhafA", "a"));


/* LYNCATHROPE's LOG: */
let journal  = [];
function addEvent(events, squirell){
    journal.push(events, squirell);
}
