// IIFE & Callback

// 1. IIFE (Immediately Invoked Function Expression)

// No Params & args & return value
(function (){
    console.log("Hello World");
})();

// With params & args & return value
let output = (function (fullName){
    return "Hello " + fullName;
})("Jhon Doe")

console.log(output)

// Callback Function
// No params & args & return value
// function sayHello(callback){
//     // Logic
//     callback();
// }

// sayHello(function greetings(){
//     console.log("Hello Callback Function");
// });

// // With params & args & raturn value
// function sayHello(callback){
//     // Logic
//     let output = callback("Jhon Doe");
//     return output;
// }

// let output = sayHello(function(fullName){
//     return "Hello " + fullName;
// });

// console.log(output)
