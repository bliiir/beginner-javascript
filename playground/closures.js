// function outer() {
//   const outerVar = 'Hey I am the outer Var!';
//   function inner() {
//     const innerVar = 'Hey I am the inner Var!';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
//   // inner();
// }
// // outer();
// const innerFN = outer();
// innerFN()



function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hey');

console.log(sayHello('Rasmus'));
console.log(sayHello('Marianne'));
console.log(sayHey('Alva'));
console.log(sayHello('Laura'));

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your ${gameName} score is ${score}`;
  }
}

const hokeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');

