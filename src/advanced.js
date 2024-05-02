// DO NOT MODIFY THESE
const nums = [2, 7, 3, 8, 9, 11, 14, 1, 21]
const otherNums = [4, 6, 12, 13]
const numsToMerge = [...nums]
const arrayToExtend = [...nums]

// 1. Set this variable to the sum of the first and last numbers in the nums array
const firstPlusLast = nums[0] + nums[nums.length - 1]
console.log('Sum of the first and the last numbers in nums:', firstPlusLast)

// 2. set this variable to the index where the number 14 is located in the array
const indexOfFourteen = nums.indexOf(14)
console.log('Index of 14 in nums:', indexOfFourteen)

// 3. remove the last 3 elements of the array in one single instruction
const withoutLastThree = nums.slice(0, -3)
console.log('Array without last 3 elements:', withoutLastThree)

// 4. Add the number 15 before the number 8 in the array arrayToExtend
// note: use splice, read the documentation carefully
const indexForEight = arrayToExtend.indexOf(8)
if (indexForEight !== -1) {
  arrayToExtend.splice(indexForEight, 0, 15)
}
console.log('Array with 15 added before 8:', arrayToExtend)
// 5. check if the array includes the number 100
const includesHundred = nums.includes(100)
console.log('Does nums include 100?', includesHundred)

// 6. extract the numbers 7, 3, 8 into a new array
const withSevenThreeEight = nums.filter((n) => n === 7 || n === 3 || n == 8)
console.log('New array with 7,3 and 8:', withSevenThreeEight)

// 7. add the numbers from otherNums to the end of numsToMerge
const combinedNums = numsToMerge.concat(otherNums)
console.log('Combined nums and otherNums:', combinedNums)

// 8. create a new array with the cities 'Rome', 'Paris' and 'Barcelona'
const newCities = ['Rome', 'Paris', 'Barcelona']
console.log('New cities:', newCities)

// 9. use the spread operator ... to clone the cities array and add 'Berlin' to the end and 'Sydney' to the start
// note: read about the spread operator
const moreCities = ['Sydney', ...newCities, 'Berlin']
console.log('More cities with Berlin and Sydney:', moreCities)

module.exports = {
  a: firstPlusLast,
  b: indexOfFourteen,
  c: withoutLastThree,
  d: arrayToExtend,
  e: includesHundred,
  f: withSevenThreeEight,
  i: combinedNums,
  j: newCities,
  k: moreCities
}
