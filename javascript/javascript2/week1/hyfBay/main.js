//console.log("Script loaded");
//const testProductNames = ["Flat screen", "Mobile phone", "Wallet"];

function getAvailableProducts() {
    return [{
        id: 23771823,
        name: 'Flat screen',
        price: 4000,
        rating: 4.2,
        shipsTo: ['Denmark', 'Germany']
       },
       {
        id: 23771824,
        name: 'Mobile Phones',
        price: 14000,
        rating: 4.6,
        shipsTo: ['Germany','Sweden','Norway','Denmark']
       },
       {
        id: 23771825,
        name: 'Wallets',
        price: 4000,
        rating: 4.2,
        shipsTo: ['Denmark']
       }]
  }
  const products = getAvailableProducts();
  console.log(products); // logs out
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
  
//renderProducts(testProductNames); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text

const parent = document.querySelector("section.products > ul");
function renderProducts(products) {
products.forEach(function() {
    const li = document.createElement("li");
    li.textContent = products.name;
    parent.appendChild(li);
 });
}

