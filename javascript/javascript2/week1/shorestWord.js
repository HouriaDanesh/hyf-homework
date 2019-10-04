const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function shortestWord(danishWords)
{

    let shortest = danishWords[0];

    for (let i = 0; i< danishWords.length ; i++)
    {
        if (danishWords[i].length < shortest.length)
         {
            shortest = danishWords[i];
    }

}; // returns 'ø'


  
  return shortest;
};


console.log(shortestWord(danishWords));