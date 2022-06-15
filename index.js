// Import stylesheets
import './style.css';

import './callBindApply.js';
import './duplicateValues.js';
import './flaten.js';
import './jsclosures.js';
import './jsSorting.js';
import './promises.js';
import './inheritance.js';
import './currying.js';
import './pollyfils.js';
import './prblmSolve.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arr = [4, 3, 5, 17, 9, 2];
const output = arr.map((x) => x * 2); // const output=arr.map((x)=>x*2);
console.log('Using map multiple by 2 with each value', output);

//array map example
const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
  { firstname: 'Malcom', lastname: 'Cobb' },
];
const outputMap = persons.map((item) =>
  [item.firstname, item.lastname].join(' ')
);
console.log('Map function output=>', outputMap);

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const resultFilter = persons
  .filter((item) => item.firstname == 'Malcom')
  .map((item) => [item.firstname, item.lastname].join(' '));
console.log('Filter with map  output for person=>', resultFilter);

const resultpersonsFilter = words.filter((word) => word.length > 4);
console.log('Filter function output=>', resultpersonsFilter);

const maxOutput = arr.reduce(function (max, cur) {
  if (cur > max) {
    max = cur;
  }
  return max;
}, 0);

console.log('using reduce maximum value of this array is ' + maxOutput);
