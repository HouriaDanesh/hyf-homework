// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

const numbers = [1, 2, 3, 4];
const newNumbers= numbers
.filter(function oddNumbers(element)
 {
    return element % 2 !== 0;
 })
        const doubledNumbers = newNumbers
        .map(function dobble(element) {
           
        return element*2;
    })
    
          
 console.log(`The doubled numbers are ${doubledNumbers}.`);
