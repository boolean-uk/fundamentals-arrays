// DO NOT MODIFY THESE
const nums = [2, 7, 3, 8, 9, 11, 14, 1, 21]
const otherNums = [4, 6, 12, 13]
const numsToMerge = [...nums]
const arrayToExtend = [...nums]

// 1. Set this variable to the sum of the first and last numbers in the nums array
const firstPlusLast = nums[0] + nums[8]

console.log(firstPlusLast)

// 2. set this variable to the index where the number 14 is located in the array

const indexOfFourteen = nums.indexOf(14)

console.log(indexOfFourteen)

// 3. remove the last 3 elements of the array in one single instruction

const withoutLastThree = nums.slice(0, -3)

console.log(withoutLastThree)

// 4. Add the number 15 before the number 8 in the array arrayToExtend

const indexofeight = nums.indexOf(8)

nums.splice(indexofeight, 0, 15)

console.log(nums)

// note: use splice, read the documentation carefully

// 5. check if the array includes the number 100

const includesHundred = nums.includes(100)

console.log(includesHundred)

// 6. extract the numbers 7, 3, 8 into a new array

const withSevenThreeEight = [7, 3, 8]

console.log(withSevenThreeEight)

// 7. add the numbers from otherNums to the end of numsToMerge

const combinedNums = [...numsToMerge, ...otherNums]

console.log(combinedNums)

// 8. create a new array with the cities 'Rome', 'Paris' and 'Barcelona'
const newCities = ['Rome', 'Paris', 'Barcelona']

// 9. use the spread operator ... to clone the cities array and add 'Berlin' to the end and 'Sydney' to the start
// note: read about the spread operator

const moreCities = ['Sydney', ...newCities, 'Berlin']

console.log(moreCities)

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
