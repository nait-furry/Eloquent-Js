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


function CustomFactorization(number){
    //Destructuring:
    ((num - 3) % 5 == 0) ? {
        /*
        num = x[5] + 3^1: 3^(2,3,4...);
        num = 3^x + 1[5]: (2,3,4...)[5];
        */
    }:{ /* Something else */ }

    //tree-ing:  ie given the first step could only be: 1 * 3 or 5 + 1
    ( )

    //Recursive:
    /*
    num = 3^n
    num = 1 + n[5]
    */
    
    //semiRecursive:
    /*
    num - 3^(1,2,3...) = 1 + n[5];
    num - (1,2,3...)[5] = 3^n
    */
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
