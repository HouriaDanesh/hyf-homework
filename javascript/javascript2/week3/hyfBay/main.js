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

//const products = getAvailableProducts();
//console.log(products); // logs out
//console.log(renderProducts(products));


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
    const shippingListUl = document.createElement("ul");

    shipsToLi.innerText = product.shipsTo;
    ul.appendChild(shipsToLi);
    const shipingItems = product.shipsTo;
    for (let i = 0; i < product.shipsTo.length; i++) {
    const countryToLi = document.createElement("li");
    countryToLi.innerText = shipingItems[i];
        shippingListUl.appendChild(countryToLi);
    }
    ul.appendChild(shippingListUl)
  });
  return ul;
}

const search = document.querySelector("input");
search.addEventListener("input", searchTab);

function searchTab() {
  const searchedProduct = products.filter(function searchProduct(product){
    product.name.includes(search.value)

  });
  renderProducts(searchedProduct);
}


let products = getAvailableProducts();
console.log(products);
let productPrice = products.map(product => product.price);
console.log(productPrice);

const callBackFunction = callback => {
    console.log('Response received');
}

sendPricesToServer((productPrice), callBackFunction);

/////////////////////////////////////////////////////////////

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

