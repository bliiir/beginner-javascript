const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300'
myImage.alt = 'Nice photo'
// console.log(myImage);


const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
// console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'cool things';
// myDiv.appendChild(heading);
myDiv.insertAdjacentElement('afterbegin', heading);
// myDiv.insertAdjacentElement('beforebegin', heading);



const myUl = document.createElement('ul');
const myLi = document.createElement('li');

const myItems = ['one', 'two', 'three'];

// myLi.textContent = myItems[1];
// myUl.appendChild(myLi);
// 
// console.log(myUl);
// console.log(myLi);

for (var i=0; i < myItems.length; i++) { 
  // console.log(i);
  myLi.textContent = myItems[i];
  myUl.appendChild(myLi);
// for (const item of items) {
//   const myLi = document.createElement('il');
//   myLi.textContent = item;
//   myUl.insertAdjacentElement('afterbegin', myLi);
}
document.body.appendChild(myUl);
