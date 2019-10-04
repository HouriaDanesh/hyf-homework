console.log('Script loaded');

console.log(getAvailableProducts());

const testProductNames = [
    'Flat screen',
    'Mobile phone',
     'Wallet'];

renderProducts(testProductNames); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text

let parent = document.querySelector("ul");

function renderProducts(parent, testProductNames)
 {
    array.forEach(function () 
    {
        const li = document.createElement("li");
        li.textContent = testProductNames;
        parent.appendChild(li);

    })
}


const products = getAvailableProducts();
console.log(products) // logs out
/*
[{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: [ 'denmark', 'germany'],
},
...]
*/





