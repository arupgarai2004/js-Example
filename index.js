// Import stylesheets
import './style.css';

import './callBindApply.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arr = [4, 3, 5, 17, 9,2];
const output = arr.map((x) => x * 2); // const output=arr.map((x)=>x*2);
console.log(output);

//array map example
const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];
const outputMap = persons.map((item) =>
  [item.firstname, item.lastname].join(' ')
);
console.log(outputMap);

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const resultFilter = words.filter((word) => word.length > 6);
console.log(resultFilter);


const maxOutput=arr.reduce(function(max,cur){
	if(cur > max){
		max=cur;
	}
	return max;
},0);

console.log("using reduce maximum value of this array is "+maxOutput);
