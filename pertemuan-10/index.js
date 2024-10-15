// String Literals, Arrow Function, Default Parameter

// 1. String Literals
let fullName = "Jhon Doe";
let age = 33;
let address = "Manado"

// Halo nama saya Jhon Doe, umur saya 33 tahun dan saya
// tinggal di Manado

let kalimat = "Halo nama saya" + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address + ".";

console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName} , umur saya ${age} tahun dan saya tinggal di ${address}`

console.log(kalimat2);

// 2. Arrow Function

function sayGreetings(fullName){
    return `Hello ${fullName}`;
}

console.log(sayGreetings("Jhon Doe"))

const sayGreetings2 = (fullName) => {
    return `Hello ${fullName}`;
}

console.log(sayGreetings2("Jhon Doe"))

// Implict retrun value

const sayGreetings3 = (fullName) => `Hello ${fullName}`;


console.log(sayGreetings3("Jhon Doe"))

// Arrow Function pada IIFE 
let output1 = (() => `Hello`) ();
console.log(output1);

// Arrow Function pada Callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default Parameter

const sayGreetings4 = (fullName, age, address) =>{
    if(fullName === undefined) {
        fullName = "Jhon Doe";
    }
    if(age === undefined){
        age = 30;
    }
    if(address === undefined){
        address === "Manado";
    }
    console.log(`Hello nama saya ${fullName} umur saya ${age} tahun dan saya berasal di ${address}`);
};

sayGreetings4();


const sayGreetings5 = (fullName = "Jhon Doe", age = 30, address = "Manado") => {
    console.log(`Hello nama saya ${fullName}, Umur saya ${age} tahun dan saya berasal dari ${address}`)
};
sayGreetings5();