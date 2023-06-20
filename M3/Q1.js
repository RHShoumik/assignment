// 1.Date Object:

// a.Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns 
// the day of the week for that date.The function should use the Date object.

let dayOfWeekChecker = (a) => {
    const date = new Date(a);
    const day = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day];
}

let formatedDate = dayOfWeekChecker("2023-06-20");
console.log(formatedDate)


// b.Implement the function to display the day of the week for the current date.

let currentDayChecker = () => {
    const date = new Date().getDay().toLocaleString();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[date];
}

let currentDate = currentDayChecker();
console.log(currentDate)