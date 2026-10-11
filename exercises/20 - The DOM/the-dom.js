// const p = ocument.querySelector('p');
// // const divs = document.querySelector('div');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// // console.log(p);
// console.log(item2Image);
// console.log(heading);
// console.log(heading.textContent);
// heading.textContent = 'I have been changed!!!';
// console.log(heading.textContent);
//
//
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// console.log(pizzaList.innerText);
//
// // Three ways of concatenating strings
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');
// pizzaList.insertAdjacentText('afterbegin', '🍕');

// Classes
// const pic = document.querySelector('.nice');
const pic = document.querySelector('img');
pic.classList.add('open');
pic.classList.add('close');
pic.classList.toggle('round');

pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Some alt text'; // setter
console.log(pic.alt); // getter

pic.width = 200;

pic.addEventListener('load', function() {
    console.log(pic.naturalWidth);
});
console.log(pic.getAttribute('alt'));
console.log(pic.setAttribute('alt', 'Something else'));
console.log(pic.getAttribute('alt'));
console.log(pic.setAttribute('some_attribute', 'custom attribute'));
console.log(pic.getAttribute('some_attribute'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);
