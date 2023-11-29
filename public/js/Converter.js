const fs = require('fs');

function convertData(jsonData) {
  const result = {};

  jsonData.forEach((course) => {
    const code = course.code;
    result[code] = {};

    course.courses.forEach((c) => {
      c.sections.forEach((section) => {
        const crn = section.crn;
        const daysTimes = section.timeslots.map((timeslot) => {
          return timeslot.days.map((day) => [day, { start: timeslot.timeStart, end: timeslot.timeEnd }]);
        }).flat();

        const info = {
          daysTimes,
          id: c.id,
          sec: section.sec,
          rem: section.rem,
          title: c.title, // added course title
          instructor: section.timeslots[0].instructor // added course instructor
        };

        result[code][crn] = info;
      });
    });
  });

  return result;
}

function jsonFileToDictionary(filePath) {
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // Parse the JSON content into a JavaScript object
    const jsonData = JSON.parse(fileContent);
    // Convert the JSON data to the desired format
    const dictionary = convertData(jsonData);
    // Return the resulting dictionary
    return dictionary;
  } catch (error) {
    console.error('Error reading or parsing the JSON file:', error);
    return null;
  }
}

// Usage example
const filePath = '../json/courses.json';
const dictionary = jsonFileToDictionary(filePath);

if (dictionary !== null) {
  console.dir(dictionary, { depth: null });
}
