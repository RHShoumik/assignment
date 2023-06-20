// 1.Date Object:

// a.Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns 
// the day of the week for that date.The function should use the Date object.

let dayOfWeekChecker = (a) => {
    const date = new Date(a);
    const day = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day];
}



// b.Implement the function to display the day of the week for the current date.

    
const currentDate = new Date().getDay().toLocaleString();
let result = dayOfWeekChecker(currentDate);
// let result = dayOfWeekChecker("2023-06-20");
console.log(result)