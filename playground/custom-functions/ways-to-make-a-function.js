// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };
//
// console.log(doctorize('Rasmus'));

// function inchToCM(inches) {
//   return inches * 2.54;
// };
//
// console.log(inchToCM(100));
//
// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

// const inchToCM = (inches) => inches * 2.54;

// const inchToCM = inches => inches * 2.54;

// console.log(inchToCM(100));

// function add(a, b) {
//   return a + b
// }

// const sum = (a, b) => a + b;

// console.log(sum(100, 200));

// (function(age) {
//   // console.log('Running the anon function');
//   return `You are cool and age ${age}`;
// })(10);

const ras = {

  name: 'Rasmus Groth',

  // Traditional Method
  hi: function hi(greeting = 'hello there') {
    console.log(`Why hi!!!!`);
    return `Why hi, ${greeting}`;
  },

  // Method
  sayHi: function(greeting = 'Hello') {
    return `Hi ${greeting}`;
  },

  // Short hand Method
  yellHi(greeting = 'HELLO') {
    return `Hi ${greeting}!`.toUpperCase();
  },

  // Arrow Method
  whisperHi: (greeting = "hello") => (`hi ${greeting}`.toLowerCase())

};


// Callback Functions

// Click callback
const button = document.querySelector('.clickMe');
console.log(button);

// button.addEventListener('click', function() {
//   console.log('working?');
// });
button.addEventListener('click', ras.hi);

setTimeout(() => {
  ras.hi();
}, 10000);
