let number = 1;
if(number){
    while(number < 10){
        console.log(true);
        number++;
    }
}else {

    do{
        let n = "#";
        console.log(n);
        number += 1;
        n+="#";
    }while( number < 100);
}
// console.log(Number.isNaN("we reaadf"));

switch (prompt("pick a number")){
    case "1":
        console.log("This is happening now")
        break;
    case "2":
        console.log("this might happen later");
        break;
    default:
        console.log("This eventually has to happed");
        break;
}

// Error:
/*

switch (prompt("pick a number")){
^

ReferenceError: prompt is not defined
    at Object.<anonymous> (/home/fury/DSA/practice/Eloquent/practice.js:16:1)

*/



function CustomFactorization(number, count = 0){
    if( Number.isInteger(( Math.log(number))/(Math.log(3))) ){
        console.log("CustomFactorizable: Power of 3");
    }else if( ((number -1) % 5 == 0)){
        console.log("CustomFactorizable: Multiple of 5");
    }else if( number > ((1*3) + 5) && ((count%2) == 0)){
      number = number -5;
      count++
      console.log("number > ((1*3) + 5)" + " number: " + number + " count: " + count)
      CustomFactorization(number, count);
    }else if( ((number-5)%3) == 0 ){
      number = number / 3
      console.log("(number-5)&3" + " number: " + number + " count: " + count);
      CustomFactorization(number, 0);
    }else{
        return "Can't help you";
    }
}




function isCustomFactorizable(number) {
    // elimination:
    /*
    - power of 3 ie [log(base_3)x]
    - multiple of 5 ie [[x-1] % 5]
    - combination:
        - > (1*3)+5 = 8
        - do (-5) then:
            - power of 3:
                - multiple of 5:
                    - notCustomFactorizable
        - do (/3) then:
            - multiple of 5;
                - power of 3:
                    - notCustomFactorizable


    */

    //Approach:
    /*
    - make every logic bit a function that is called under the right circumstance ie if()
    */

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

//Logarithms:
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

var nal = [];
function nul(event, squirrel) {
  nal = [];
  function addEntry(event, squirrel) { nal.push({ event, squirrel }) }
  addEntry(event, squirrel);
  console.log(nal);
};
