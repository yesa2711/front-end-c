// ARRAY EXERCISE

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Using a forEach(), iterate through this array and console.log all of the people.
people.forEach(person => console.log(person));
console.log(people);

// 3. Write the command to remove "Greg" from the array.
people.splice(people.indexOf("Greg"), 1);
console.log(people);

// 4. Write the command to remove "James" from the array.
people.splice(people.indexOf("James"), 1);
console.log(people);

// 5. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

// 6. Write the command to add your name to the end of the array.
people.push("Yesa");
console.log(people);

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }

// 8. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let peopleCopy = people.slice(2);
console.log(people);

// 9. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie".
people = ["Greg", "Mary", "Devon", "James"];
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
people.unshift("Matt");
people.push("Yesa");
people.splice(people.indexOf("James"), 1);
console.log(people);

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat(["Bob"]);

console.log(withBob);

// OBJECT EXERCISE

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(programming);

// 1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
// 2. By using the bracket notation, change the diffculty to the value of 7.
programming['difficulty'] = 7;
// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
// 4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
// 5. Using a map(), iterate through the languages array and update each element to be "0- JavaScript, 1 - Python, ...", where 0 represents the index of the array, and console.log the output.
programming.languages = programming.languages.map((lang, index) => `${index} - ${lang}`);
console.log(programming.languages);