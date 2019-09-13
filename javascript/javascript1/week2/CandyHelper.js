const boughtCandyPrices = [];

function addCandy(candyType , weight )
{
    if (candyType === 'sweet') {
        return boughtCandyPrices.push(0.5 * weight);
    }
    else if (candyType === 'chocolate') {
        return boughtCandyPrices.push(0.7 * weight);
    }
    else if (candyType === 'toffe') {
        return boughtCandyPrices.push(1.1 * weight);
    }
    else (candyType === 'chewing-gum')
     {
        return boughtCandyPrices.push(0.03 * weight);
    }
}

addCandy("sweet", 20);
console.log(`Total price: ${boughtCandyPrices} kr.`);

// Can i buy more?

const amountToSpend = Math.random() * 100;
console.log(`You just have this amount to spend: ${amountToSpend}`);

function canBuyMoreCandy()
{    
       let totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length ; i++)
     {
        totalPrice += boughtCandyPrices[i];
    }
    return totalPrice;
}

if(canBuyMoreCandy() < amountToSpend) {
    console.log("You can buy more, so please do!"); 
   
  }
  else {
    console.log("Enough candy for you!");
  }
