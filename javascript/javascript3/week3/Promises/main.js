function fetchJSON(user){
    const URL = "https://api.github.com/search/repositories?q=user:"+`${user}`;
    return fetch(URL).then(response => response.json());
}
Promise.all([
  fetchJSON('Hossein'),
  fetchJSON('benna100'),
  fetchJSON('mahieakhtar')
]).then(list => {
    console.log(renderRepo(list))
}).catch(error => console.log(error));

function renderRepo(users){
    users.forEach(user => {
        const userUl = document.createElement("ul");
        document.body.appendChild(userUl);
        userUl.innerHTML = `<h1>${user.items[0].owner.login}</h1>`; 
        user.items.forEach(item => {
            const itemLi = document.createElement('li')
            userUl.appendChild(itemLi).innerHTML = 
            `<h3>${item.name}: ${item.html_url}</h3>`;
            })
    });
}