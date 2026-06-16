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

