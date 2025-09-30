// date objects = used to work with dates and times

// Create a new date object representing the current date and time


const now = new Date();
console.log(now);

const date = new Date(2025, 11, 25); // December 25, 2025
console.log(date);

//passing a date string is also valid

const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-indexed
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const dateString = new Date("2025-12-25");
console.log(dateString);
console.log(year, month, day, hours, minutes, seconds);

// Output: 2025 12 25 0 0 0
// Note: Months are zero-indexed, so December is 11

const d = new Date();

d.setFullYear(2023);
d.setMonth(0); // January
d.setDate(15);
d.setHours(10);
d.setMinutes(30);
d.setSeconds(45);
d.setMilliseconds(500);
console.log(d);

// Output: Date object representing January 15, 2023, 10:30:45.500 AM

