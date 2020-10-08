let todayDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// get the current day
let dayName = days[todayDate.getDay()];
// console.log(dayName);
// get current date

let currentDate = todayDate.getDate();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// get the current month
let monthName = months[todayDate.getMonth()];
// console.log(monthName);
// get the current year

let year = todayDate.getFullYear();
console.log(year);
// add to html
document.getElementById("month").innerHTML = monthName;
document.getElementById("day").innerHTML = dayName;
document.getElementById("currentDate").innerHTML = currentDate;
document.getElementById("year").innerHTML = year;
