const boughtCandyPrices = [];
function addCandy(candyType , weight )
{
    if (candyType === 'sweet') {
        return boughtCandyPrices.push(0.5 * weight);
    }
    if (candyType === 'chocolate') {
        return boughtCandyPrices.push(0.7 * weight);
    }
    if (candyType === 'toffe') {
        return boughtCandyPrices.push(1.1 * weight);
    }
    if (candyType === 'chewing-gum') {
        return boughtCandyPrices.push(0.03 * weight);
    }
}
boughtCandyPrices.push(price);

addCandy('sweet', 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices



// Can i buy more?

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy(boughtCandy )
{    
    console.log(`Amount to spend ${amountToSpend}`);
    let totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length ; i++) {
        totalPrice += boughtCandyPrices[i];
    }    



if(canBuyMoreCandy()) {
    console.log("You can buy more, so please do!"); 
  }
  else {
    console.log("Enough candy for you!");
  }
  
  console.log(amountToSpend,boughtCandyPrices);
}