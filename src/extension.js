// Do not edit the variables below directly
const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

// 1. Add Fred to the names array
names.push('Fred')
console.log('Names array after adding Fred:', names)

// 2. Add 4 to the end of the numbers array
numbers.push(4)
console.log('Numbers array after adding 4:', numbers)

// 3. Add Rio to the start of the cities array
cities.unshift('Rio')
console.log('Cities array after adding Rio:', cities)

// 4. Remove the first colour from the colours array
const firstColour = colours.shift()
console.log('First colour removed:', firstColour)
console.log('Colour array after removing first color:', colours)

// 5. Remove the last item from the keys array
const lastKey = keys.pop()
console.log('Last key removed:', lastKey)
console.log('Array afred keys removsl:', keys)

// 6. Remove Jordan from the countries array
const jordanIndex = countries.indexOf('Jordan')
if (jordanIndex !== -1) {
  countries.splice(jordanIndex, 1)
  console.log('Jordan removed:', countries)
} else {
  console.log('Jordan not founr in the countries array.')
}

// 7. Remove the last fruit from the fruits array and store it in pear below
const pear = fruits.pop()
console.log('Last fruit removed:', pear)
console.log('Fruits array after removal:', fruits)

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
