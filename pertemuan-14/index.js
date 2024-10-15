// Asynchronous JS

// Synchronous -> Single thread -> Blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// Asynchronous -> Multi thread
// 1. Parallel -> proses yang jalan secara bersamaan
// setTimeout(() => {
//     console.log("Proses 1");
// }, 8000);
// console.log("Proses 2");
// setTimeout(() => {
//     console.log("Proses 3");
// }, 5000);
// console.log("Proses 4");

// 2. Concurent -> proses yang jalan secara tidak bersamaan atau berurutan
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() =>{
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000);

// Promise -> Ditunggu, Ditolak, Diterima
let condition = true;
let newPromise = new Promise((resolve, reject) => {
    if(condition){
        resolve("Ya, aku juga suka sama lu");
    } else {
        reject("Kamu terlalu baik buat aku");
    }
});

// Pakai Promise
// 1. then - catch
// newPromise
//     .then((result) => result)
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error));

// 2. Async - await
// Harus dibuat dalam fungsi
const consumePromise = async () => {
    try{
        let result = await newPromise;
        console.log(result);
    } catch (error){
        console.log(error)
    }
}
consumePromise();

// Pkai Promise yang sudah ada
// 1. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json));

(async () => {
    let response = await fetch("https://jsonplaceolder.typicode.com/users")
    let json = await response.json();
    json.forEach(({name}) => console.log(name));
})();

// 2. Axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => console.log(result.data));

(async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => console.log(name));
})();