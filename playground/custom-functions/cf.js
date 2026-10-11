// This is a function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // This is the function body
  console.log('function is running');
  return billAmount + (billAmount * taxRate) + (billAmount * tipRate);
}

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}



// This is a function call
const bill = 100;
const tax = 0.13;
const tip = 0.15;
console.log(`Your total is: $${calculateBill(billAmount = bill, tipRate = tip)} `);
