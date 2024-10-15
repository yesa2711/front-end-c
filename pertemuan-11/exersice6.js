// Ubahlah syntax ES5 berikut ke dalam ES6

// 1.
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  let age = calculateAge(year);
  let retirement = 60 - age;

  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2.
const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    return numbers.reduce((sum, current) => sum + current, 0);
  }
  
  console.log(addNumber(1,2,3,4,5,6,7));

// 3.
let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};

radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
  }
  
  makeAjaxRequest('www.google.com');