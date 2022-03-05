// Import stylesheets
import './style.css';

// Write Javascript code!

// 1. variable declared for my age and assigned a value
const myAge = 11;

// 2. variable declared for early years and assigned a value 2
let earlyYears = 2;

// 3. multiplication assignment operator
earlyYears *= 10.5;

// 4. calculate later years by subtracting 2 from actual age.
let laterYears = myAge - 2;

// 5. Multiply later years by 4 to calculate dog years.
laterYears *= 4;

// 6. log the values of earlyYears and laterYears.
console.log('Early Years: ' + earlyYears);
console.log('Later Years: ' + laterYears);

// 7. Add early years and later years to calculate total dog years.
let myAgeInDogYears = earlyYears + laterYears;

// 8. Assigned my name into a variable myName and called .toLowerCase() method to ignore capitalization.
const myName = 'Prasiddha';

// 9. logged my name and age in dog years using interpolation.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

// 10. Showing result into div element with 'app' id.
const result = `My name is <strong>${myName}</strong>. I am <strong>${myAge}</strong> years old in human years which is <strong>${myAgeInDogYears}</strong> years old in dog years.`;

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<p>${result}</p>`;
