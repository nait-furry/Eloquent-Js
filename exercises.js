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

// triangleMaker(11);

function fizzBuzz(){
    let number= 1;
    while( number <= 100){
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

// fizzBuzz();


function chesssBoard(size = 8){
    // The function is a string building engine...

    let odd = "#"; // odd valued rows
    for(let a = 1; a <= size; a++){
        if(a % 2 != 0){
            odd+=" ";
        }else{
            odd+="#"
        }
    }


    let even = " "; // even valued rows
    for(let a = 1; a <= size; a++){
        if(a % 2 != 0){
            even+="#";
        }else{
            even+=" "
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

console.log(chesssBoard(3));