// input: array
// ouput: object
const createObjectFromStudents = students =>
  students.reduce((acc, student) => {
    const monthName = new Date(student.birthDate)
      .toLocaleString('en', { month: 'long' })
      .slice(0, 3);
    acc[monthName] = acc[monthName] ? [...acc[monthName], student] : [student];
    return acc;
  }, {});

// input: object
// output: object
const transformObject = studentsObject =>
  Object.keys(studentsObject).reduce(
    (acc, key) => ({
      ...acc,
      [key]: studentsObject[key]
        .sort(
          (student1, student2) =>
            new Date(student1.birthDate).getDate() - new Date(student2.birthDate).getDate(),
        )
        .map(student => student.name),
    }),
    {},
  );

// input: array
// output: object
const studentsBirthDays = students => transformObject(createObjectFromStudents(students));

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Bill', birthDate: '03/06/2010' },
];

console.log(studentsBirthDays(students));
