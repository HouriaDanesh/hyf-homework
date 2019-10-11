// console.log('Script loaded');

// const products = getAvailableProducts();
// const productsUl = document.querySelector('section.products ul');
// console.log(productsUl);

// function renderProducts(products) {
//     products.forEach(product => {
//         const li = document.createElement('li');

//         const shipsToHTML = product.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`);

//         li.innerHTML = `
//             <ul>
//                 <li>${product.name}</li>
//                 <li>${product.price}</li>
//                 <li>${product.rating}</li>
//                 <ul class="ships-to">${shipsToHTML}</ul>
//             </ul>
//         `;
//         productsUl.appendChild(li);
//     });
// }

// renderProducts(products);

console.log("Script loaded");
const testProductNames = ["Flat screen", "Mobile phone", "Wallet"];

function getAvailableProducts() {
  return [
    {
      id: 23771823,
      name: "Flat screen",
      price: 4000,
      rating: 4.2,
      shipsTo: ["Denmark", "Germany"]
    },
    {
      id: 23771824,
      name: "Mobile Phones",
      price: 14000,
      rating: 4.6,
      shipsTo: ["Germany", "Sweden", "Norway", "Denmark"]
    },
    {
      id: 23771825,
      name: "Wallets",
      price: 4000,
      rating: 4.2,
      shipsTo: ["Denmark"]
    }
  ];
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

search.addEventListener("input", searchTab);

function searchTab() {
  const search = document.querySelector("input");
  const searchedProduct = testProductNames.filter(function searchProduct(product){
    product.name.includes(search.value)

  });
  const productList = document.getElementById("products");
  const myUl = document.createElement("ul");
  renderProducts(searchedProduct);
}

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
//////////////////////////////////////////////////////////////

// function renderProducts(array) {
//   for (let i = 0; i < array.length; i++) {
//     const product = array[i];
//     const productLi = document.createElement("li");
//     productList.appendChild(productLi);

//     productLi.innerHTML = `
//     <ul>
//         <li>${product.name}</li>
//         <li>${product.price}</li>
//         <li>${product.rating}</li>
//         <li>${product.shipsTo}</li>
//     </ul>`;

//     product.innerHTML = `${array[i].name} | ${array[i].price} | ${array[i].rating} | ${array[i].shipsTo}`;

//     productLi.appendChild(renderProduct(product));
//   }
// }
