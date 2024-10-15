function hitungBMI(berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  callback(bmi);
}

let jhon = {
  nama: "Jhon",
  berat: 60, // dalam kg
  tinggi: 1.7, // dalam meter
};

hitungBMI(jhon.berat, jhon.tinggi, function(bmi) {
  console.log(`BMI ${jhon.nama}: ${bmi.toFixed(2)}`);

  if (bmi < 16) {
    console.log(`${jhon.nama} memiliki kategori: Severely Underweight`);
  } else if (bmi >= 16 && bmi < 18.5) {
    console.log(`${jhon.nama} memiliki kategori: Underweight`);
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log(`${jhon.nama} memiliki kategori: Normal`);
  } else if (bmi >= 25 && bmi < 30) {
    console.log(`${jhon.nama} memiliki kategori: Overweight`);
  } else if (bmi >= 30 && bmi < 35) {
    console.log(`${jhon.nama} memiliki kategori: Moderately Obese`);
  } else if (bmi >= 35 && bmi < 40) {
    console.log(`${jhon.nama} memiliki kategori: Severely Obese`);
  } else {
    console.log(`${jhon.nama} memiliki kategori: Morbidly Obese`);
  }
});