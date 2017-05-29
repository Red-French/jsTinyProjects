const dogs = [{ name: 'Shorty', age: 2 }, { name: 'Bella', age: 3 }];
const name = "Red";

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string!', '💩');
console.log(`Hello, I am ${name}`);  // backticks in ES6 allow inserting a variable

// Styled
console.log('I am some %cgreat text', 'font-size:20px; background:red; text-shadow: 10px 10px 0 blue');  // use %c(console) in front of what you want to style

// warning!
console.warn('WARNING');

// Error :|
console.error('ERROR!');

// Info
console.info('General info you might need to know.');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');  // msg does NOT appear if condition is true

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);  // see all properties and methods available on the element

// console.clear();

// Grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`);  // same as below but defaults to open dropdown list
  console.groupCollapsed(`${dog.name}`);  // groups below logs in a dropdown
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);  // end grouping of dropdown list
});

// counting

console.count('Red');
console.count('Red');
console.count('Jumperjack');
console.count('Jumperjack');
console.count('Red');
console.count('Jumperjack');
console.count('Red');
console.count('Jumperjack');
console.count('Jumperjack');
console.count('Jumperjack');
console.count('Jumperjack');
console.count('Jumperjack');

// timing
console.time('fetching data');  // start timer
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');  // end timer (auto calculates and displays elapsed time)
    console.log(data);
  });

// alternative way for timing (requires manual calculation)
  var t0 = performance.now();  // start timer
  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      var t1 = performance.now();  // end timer
      console.log(data);
      console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");  // requires calculation
    });

console.table(dogs);
