const first = 'Rasmus';
const middle = '';
const last = 'Groth';

const sentence = 'she\'s so "cool"';

const song = `Ohh

ya

hello`;

const hello = 'Hello my name is ' + first + ', nice to meet you!';
const hello2 = `hello my name is ${first}. Nice to meet you`;
// console.log(hello2);

const html = `
  <div>
    <h2>${first}</h2>
    <p>${hello2}</p>
  </div>
`;

document.body.innerHTML = html;

// const age = 100;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
console.log(`each kid gets ${eachKidGets}`);

const person = {
    first: 'Rasmus',
    last: 'Groth',
    age: 46
};

const age = 18;
const ofAge = age > 19;
console.log(`is of age: ${ofAge}`);

Math.max(
