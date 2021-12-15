// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const arr =[4,3,5,7]; 

const output=arr.map((x)=>x*2); // const output=arr.map((x)=>x*2); 
console.log(output);

//array map example 
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
const outputMap=persons.map((item)=>[item.firstname,item.lastname].join(" "));
console.log(outputMap);
