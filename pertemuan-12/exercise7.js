//Menggunakan Destructuring

// 1
const calculateAge = (birthYear) => 2019 - birthYear;
//Destructuring Object
const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

const people = [{ year: 1987, firstName: "John" }];
//Destructuring Array
const [john] = people;

yearUntilRetirement(john);

// 2
const addNumber = (...numbers) => {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
};
console.log("Menjumlahkan seluruh angka");
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//Menjumlahkan hanya sebagian
// rest operator
const addNumber2 = (...numbers) => {
  //mengambil 4 angka pertama
  const [first, second, third, fourth] = numbers;
  let sum = 0;
  //menjumlahkan hanya 4 angka saja
  [first, second, third, fourth].forEach((number) => {
    sum += number;
  });

  return sum;
};
console.log("Menjumlahkan hanya sebagian");
console.log(addNumber2(1, 2, 3, 4, 5, 6, 7));

// 3
const phi = 3.14;

const calculateArea = ({ radius = 1, power = 2 }) =>
  phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius });

radius = 7;
const area7 = calculateArea({ radius });

// Menggunakan fungsi dengan radius yang tidak didefinisikan untuk demonstrasi default value
const areaDefault = calculateArea({}); // Menggunakan default value untuk radius dan power

console.log(`Area with default radius: ${areaDefault}`); // menampilkan default value
console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4
const makeAjaxRequest = (url, method = "GET") => {
  console.log(`${url}, ${method}`);
};

makeAjaxRequest("www.google.com");
