const firstWords = ["Easy", "Awesome", "Corporate" , "creative" , "fantastic" , "affective", "nice" , "adorable", "smart", "fancy"];
const secondWords = ["beautiful", "good" , "well" , "performative", "intilligant", "honest" , "worthy", "simple", "talented", "fabiolous"];
const randomNumber1 = Math.floor(Math.random() * 10) + 0;
const randomNumber2 = Math.floor(Math.random() * 10) + 0;

const startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];

console.log("The startup: " + startupName + " contains " + startupName.length + " characters");