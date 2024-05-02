// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3]
console.log('Fourth teacher:', fourthTeacher)
// 2. Replace the fifth teacher in the teachers array with 'Patrick'
teachers[4] = 'Patrick'
console.log('Array after replacing the fifth teacher', teachers)

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = teachers.pop()
console.log('Last teacher removed:', lastTeacher)
console.log('Array after removing the last teacher:', teachers)
// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.shift()
console.log('First teacher removed:', firstTeacher)
console.log('Array after removing the first teacher:', teachers)

// 5. Add a teacher named 'Vanessa' to the end of the teachers array
teachers.push('Vanessa')
console.log('Array after adding Vanesa to the end:', teachers)
// 6. Remove 'Ed' from the teachers array
const edIndex = teachers.indexOf('Ed')
if (edIndex !== -1) {
  teachers.splice(edIndex, 1)
  console.log("'Ed' removed from the array:", teachers)
} else {
  console.log("'Ed'not found in the array:")
}
// 7. Add a teacher named 'Sarah' to the beginning of the teachers array
teachers.unshift('Sarah')
console.log("Array after adding 'Sarah' to the beginning:", teachers)
// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
