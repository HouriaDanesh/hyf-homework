const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday(eventDay)
{
const today = new Date();
const currentDay = today.getDay();
const day = currentDay + eventDay % 7;
return weekdays[day];
}

console.log(`Event will be held on ${getEventWeekday(1)}`); 
console.log(`Event will be held on ${getEventWeekday(2)}`); 