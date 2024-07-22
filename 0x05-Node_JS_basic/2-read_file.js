const fs = require('fs');

function countStudents(fileName) {
  const studentsByField = {};
  let totalStudents = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    for (let i = 1; i < lines.length; i += 1) {
      const [firstName, , , field] = lines[i].split(',');

      if (firstName && field) {
        totalStudents += 1;

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstName);
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
