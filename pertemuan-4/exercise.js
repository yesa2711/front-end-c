// Buatlah fungsi untuk menghitung BMI (Body Mass Index)
// Rumus : BMI = berat / (tinggi * tinggi),
// Berat dalam kg dan tinggi dalam meter
// 170 cm = 1.7 m
// fungsi tersebut menerima 2 parameter yaitu berat dan tinggi 
// dan mengembalikan output berupa BMI

function hitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
  }

let berat = 60// dalam kg
let tinggi = 1.7 // dalam cm
let bmi = hitungBMI(berat, tinggi);
console.log(`BMI: ${bmi.toFixed(2)}`);