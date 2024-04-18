// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = 'Phil'
console.log(fourthTeacher)

// 2. Replace the fifth teacher in the teachers array with 'Patrick'
teachers.splice(4, 1, 'Patrick')
console.log('Replaced fifth teacher:' + teachers)

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = 'Shahzad'
teachers.pop()
console.log('Removed last teacher:' + teachers)

// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = 'Nathan'
teachers.shift()
console.log('Removed first teacher:' + teachers)

// 5. Add a teacher named 'Vanessa' to the end of the teachers array
teachers.push('Vanessa')
console.log('New Teacher Added: ' + teachers)

// 6. Remove 'Ed' from the teachers array
teachers.splice(0, 1)
console.log('Removed Ed: ' + teachers)

// 7. Add a teacher named 'Sarah' to the beginning of the teachers array
teachers.unshift('Sarah')
console.log('Added another: ' + teachers)

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
