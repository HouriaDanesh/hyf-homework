const BASE_URL = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';


function fetchJSON(url) {
    return fetch(url).then(response => response.json());
  }
 
  fetchJSON(BASE_URL).then(data => {
    renderDetail(data);
  });

  function renderDetail(data) {
  
    const outputDiv = document.querySelector('#detailView');
    outputDiv.innerHTML = '';
  
    outputDiv.innerHTML = `
    <h1>${data.strDrink}</h1>
    <div><img src="${data.strDrinkThumb}"></div>
    <p>${data.strInstructions}</p>
    `;
  }