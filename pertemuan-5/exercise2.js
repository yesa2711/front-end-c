// Ubah exercise 1 dari function biasa menjadi
// IIFE dan callback

// IIFE
(function(berat, tinggi, callback){
  let bmi = berat / (tinggi * tinggi);
  callback(bmi)
})(60,170, function(bmi){
  console.log("BMI saya adalah :" + bmi);
})




// Call back
function hitungBMI(berat, tinggi, callback){
    let bmi = berat / (tinggi * tinggi);
    callback(bmi)
  }
  
  let berat = 60; // dalam kg
  let tinggi = 1.7; // dalam meter (not cm!)
  
  hitungBMI(berat, tinggi, function(bmi){
    console.log(`BMI: ${bmi.toFixed(2)}`);
});