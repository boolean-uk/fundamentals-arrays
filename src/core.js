// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']

// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeachers = teachers[3];
console.log(fourthTeachers);

// 2. Replace the fifth teacher in the teachers array with 'Patrick'
teachers[4]='Patrick';
console.log(teachers);

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = undefined
lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = undefined
firstTeacher = teachers.shift();
console.log(firstTeacher);

// 5. Add a teacher named 'Vanessa' to the end of the teachers array
teachers.push('vanessa')
console.log(teachers);

// 6. Remove 'Ed' from the teachers array
teachers[2];
console.log(teachers);

// 7. Add a teacher named 'Sarah' to the beginning of the teachers array
teachers.unshift('Sarah');
console.log(teachers);

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
