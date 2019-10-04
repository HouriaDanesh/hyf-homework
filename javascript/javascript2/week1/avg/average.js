const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
function average (housePrices) {
    let sum = 0;

    for (let i = 0; i < housePrices.length; i++) {
        sum += housePrices[i];
    }
    const average = sum/housePrices.length;
    return average.toFixed(2);
}

function median(housePrices)
 {
    let median = 0;
        numsLength = housePrices.length;
    housePrices.sort();
    if (numsLength % 2 === 0)
     { 
        median = (housePrices[numsLength / 2 - 1] + housePrices[numsLength / 2]) / 2;//even
    } else { 
        median = housePrices[(numsLength - 1) / 2];//odd
    }
    return median;
  }
  
  function object(median, average){
    const obj = {
         Median: median, 
         Average: average
         };
   return obj; 
}

console.log(`The average price is ${average(housePrices)}.`); 
console.log(`The median house price is ${median(housePrices)}.`);

/////////////////////rendering//////////////////////////////

const ul = document.createElement('ul');
      ul.textContent = 'Prices:';
      document.body.appendChild(ul);

for (let i = 0; i < housePrices.length; i++)
 {
    const li = document.createElement('li');
          li.textContent = housePrices[i];
          ul.appendChild(li);
}

const avgBtn = document.createElement('button');
      avgBtn.textContent = 'The Average result is';
      document.body.appendChild(avgBtn);

avgBtn.addEventListener('click', function () 
{
    const p = document.createElement('p');
          p.textContent = average(housePrices);
          document.body.appendChild(p);

});

const medianBtn = document.createElement('button');
      medianBtn.textContent = 'The Median result is:'; 
      document.body.appendChild(medianBtn);

medianBtn.addEventListener('click', function() {

    const p = document.createElement('p');
          p.textContent = median(housePrices);   
          document.body.appendChild(p);

});


