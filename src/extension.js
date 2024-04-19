// Do not edit the variables below directly
const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

// 1. Add Fred to the names array
const FredName = names.unshift('Fred');
console.log(names);
// 2. Add 4 to the end of the numbers array
const Addnumbers = numbers.push('4');
console.log(numbers);
// 3. Add Rio to the start of the cities array
const Addcity = cities.unshift('Rio');
console.log(cities);
// 4. Remove the first colour from the colours array
const Removecolour = colours.shift();
console.log(colours);
// 5. Remove the last item from the keys array
const Removekey = keys.pop();
console.log(keys);
// 6. Remove Jordan from the countries array
const Removecountry = countries.splice(1, 1);
console.log(countries);
// 7. Remove the last fruit from the fruits array and store it in pear below
const pear = fruits.pop()
console.log(fruits);

// Do not change the code below
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear
}
