function getFullname(firstname  , surname , useFormalName)
{
    if(firstname == "" || surname =="") {
        return `Enter your FirstName and Surname`;
    } 
    else if (useFormalName) {
        return `Lord ${firstname} ${surname}`;
    }
     else {
        return `${firstname} ${surname}`;
    }
  
}

const fullName1 = getFullname('Benjamin', 'Hughes', true); // returns "Lord Benjamin Hughes"`
const fullName2 = getFullname('Benjamin', 'Hughes', false); // returns "Benjamin Hughes"

console.log(fullName1);
console.log(fullName2);