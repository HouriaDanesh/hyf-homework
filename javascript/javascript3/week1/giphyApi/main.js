const searchQuery = document.getElementById("mySearch").value;

const apiKey = "&api_key=hj99V2QWH2dmBTCvzBv0nFW4mcA9NCb6"

const api    = `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&apiKey`;




function search() {
    const searchQuery = document.getElementById("mySearch").value;
    document.getElementById("result").innerHTML = searchQuery;
  }

  
  function fetchJSON(url) {
    return fetch(url).then(response => response.json());
  }

  const url = api + apiKey + searchQuery;
  fetchJSON(url, gotData);


  
function gotData(giphy) {
    for (let i = 0; i < giphy.data.length; i++) 
    {
        createImage(giphy.data[i].images.original.url);
    }
}
