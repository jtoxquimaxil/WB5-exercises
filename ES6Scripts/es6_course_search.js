"use strict";



let courses = [
  {
  CourseId: "PROG100",
  Title: "Introduction to HTML/CSS/Git",
  Location: "Classroom 7",
  StartDate: "09/08/22",
  Fee: "100.00",
  },
  {
  CourseId: "PROG200",
  Title: "Introduction to JavaScript",
  Location: "Classroom 9",
  StartDate: "11/22/22",
  Fee: "350.00",
  },
  {
  CourseId: "PROG300",
  Title: "Introduction to Java",
  Location: "Classroom 1",
  StartDate: "01/09/23",
  Fee: "50.00",
  },
  {
  CourseId: "PROG400",
  Title: "Introduction to SQL and Databases",
  Location: "Classroom 7",
  StartDate: "03/16/23",
  Fee: "50.00",
  },
  {
  CourseId: "PROJ500",
  Title: "Introduction to Angular",
  Location: "Classroom 1",
  StartDate: "04/25/23",
  Fee: "50.00",
  }
 ];

/// When does the PROG200 course sytart?////

function findStartDateByCourseId(courseIdToFind) {
  const foundCourse = courses.find(course => course.CourseId === courseIdToFind);

  if (foundCourse) {
    return foundCourse.StartDate;
  } else {
    return `Course with CourseId ${courseIdToFind} not found.`;
  }
}

const courseCodeToFind = "PROG200";
const startDate = findStartDateByCourseId(courseCodeToFind);
console.log(`Start Date: ${startDate}`);



/// Whta is the title of the PROJ500 course?//

function IsProj500(course){
  return course.CourseId == "PROJ500";
}

let proj500course = courses.find(IsProj500);

console.log(proj500course.Title)

///What are the titles of the courses that cost $50 or less?//

function findCourseTitles50OrLess(feeValue) {
return courses.filter(course => course.Fee <= feeValue);
}
let maxFee = 50.00;
let firstValueUnder50 = findCourseTitles50OrLess(maxFee); 

if (firstValueUnder50 != undefined) {
  console.log(firstValueUnder50);
}
else {
  console.log("No value under 50");
}

///What classes meet in "Classroom1"///

function findCourseLocation(courseLocation) {
  return courses.filter(course => course.Location === courseLocation);
}
let classroomPlace = "Classroom 1";
let coursesInClassroom1 = findCourseLocation(classroomPlace);

if (coursesInClassroom1 != undefined) {
  console.log(coursesInClassroom1);
}
else {
  console.log("No courses take place in Classroom1");
}
