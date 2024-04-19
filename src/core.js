// Don't change this array directly on line 2
const teachers = ['Nathan', 'Ed', 'Steve', 'Phil', 'Carlo', 'Lewis', 'Shahzad']
const newlist = [1, 2, 3, 4, 5, 6, 7]
// 1. Using an index on the teachers array, change the value of the
// fourthTeacher variable below to be the fourth teacher listed in the array
const fourthTeacher = teachers[3]
console.log(fourthTeacher);

// 2. Replace the fifth teacher in the teachers array with 'Patrick'
teachers[4]='Patrick';
console.log(teachers);

// 3. Remove the last teacher from the array and save them in lastTeacher below
const lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Remove the first teacher from the array and save them in firstTeacher below
const firstTeacher = teachers.shift();
console.log(firstTeacher);

// 5. Add a teacher named 'Vanessa' to the end of the teachers array
const newTeacher = teachers.push('Vanessa');
console.log(teachers);

// 6. Remove 'Ed' from the teachers array
const EdTeachers = teachers.shift();
console.log(teachers);

// 7. Add a teacher named 'Sarah' to the beginning of the teachers array
const SarahTeachers = teachers.unshift('Sarah');
console.log(teachers);

// Don't change the code below this line
module.exports = {
  teachers,
  fourthTeacher,
  lastTeacher,
  firstTeacher
}
