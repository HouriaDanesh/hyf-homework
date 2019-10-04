console.log("Script loaded");
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

const products = getAvailableProducts();
 console.log(products); // logs out
 console.log(renderProducts(products));


   function renderProducts(product) {
    const ul = document.querySelector("section.products > ul");
    
    products.forEach(function(product) {

    const nameLi = document.createElement("li");
    nameLi.innerText = product.name;
    ul.appendChild(nameLi);
  
    const priceLi = document.createElement("li");
    priceLi.innerText = product.price;
    ul.appendChild(priceLi);
  
    const ratingLi = document.createElement("li");
    ratingLi.innerText = product.rating;
    ul.appendChild(ratingLi);
  
    const shipsToLi = document.createElement("li");
    shipsToLi.innerText = product.shipsTo;
    ul.appendChild(shipsToLi);
    });
    return ul;
  }
