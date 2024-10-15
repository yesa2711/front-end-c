// Javascript function
// Cara 1.
// Tanpa input (parameter) dan output
// function greetings1(){
//     console.log("hello world");
// }
// greetings1(); // Call function


// // Cara 2.
// let greetings2 = function(){
//     console.log("hello world");
// };
// greetings2(); // Call function

// Parameter & Argument
// Dengan input (parameter) dan output (return value)
//                  Parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //                       Argument
// let output1 = greetings1("Jhon Doe");
// console.log(output1);

// let greetings2 = function(fullName){
//     return "Hello " + fullName;
// }
// let output2 = greetings2("Jhone Doe");
// console.log(output2);

// Global, Local & block Scope

let x = 10 // Global

function foo(){
    let y = 20; // local
    let z = 30;
    console.log(x);
    console.log(y);
    if(z > x) {
        let a = 40; // Local (Block)
        console.log(a);
    }
}