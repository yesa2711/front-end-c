// JavaScript Object
// Deklarasi Object 
// Cara 1. Object Literal

let jhon = {
    firstName: "Jhon",
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function(){
        console.log("Hello my name is " + this.firstName);
    },
    address: {
        street: 'Jl. Arnold Mononutu',
        city: "Minahasa Utara",
        province: "Sulawesi Utara",
        postalCode: 95371,
    },
};
console.log(jhon);

// // Cara 2. Kata kunci new
// let jane = new Object();
// jane.firstName = "Jane",
// jane.age = 25,
// jane.isMarried = false

// console.log(jane);

// // Cara mengkases properti dalam object 
// // 1. Dot notion
// console.log(jhon.firstName); // Jhon
// console.log(jhon.age); // 30
// jhon.age = 31;
// console.log(jhon.age); // 31
// jhon.job = "Teacher"; // Tambah properti baru
// console.log(jhon);

// // 2. Bracket nitation
// console.log(jhon["isMarried"]); //true
// jhon["nationality"] = "Indonesia";
// console.log(jhon);

// // Object method
// jhon.sayGreetings(); // Hello my name is Jhon

// // Object inside object
// console.log(jhon.address.city); // Minahasa Utara

// // Delete properti dalam object
// delete jhon.grade;
// console.log(jhon);

// JavaScript Conditional
// 1. if - else
let numbers = 5;
if(numbers % 2 === 0){
    console.log("bilangan genap");
} else {
    console.log("bilangan ganjil");
}

// 2. if - else if

// 100 - 80 nilai A
// 60 - 80 nilai B
// < 60 nilai C

let nilai = 80
if (nilai >= 80 && nilai <= 100) {
    console.log("Grade A");
} else if (nilai >= 60 && nilai < 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

// 3. Switch - Case
let month = 1;
switch (month){
    case 1 : 
        console.log("Janurary");
        break;
    case 2 : 
        console.log("February");
        break;
    case 3 : 
        console.log("March");
        break;
    default:
        console.log("Not Found")
        break;
}