const BASE_URL ="https://world.openfoodfacts.org/api/v0/product/737628064502.json"
fetch(BASE_URL)
.then(response => response.json())
.then((json) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(json)
            }, 3000)
        });
    })
.then(json => console.log(json))
