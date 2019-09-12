
function pickYourClothBasedOnWeather(temperature)
{

if(temperature < 0)
 {
    return "It is freezing cold do not forget all your winter clothes!"
    }
     else if (temperature > 18)
     {
    return "Spring weather ;) you can wear shorts and t-shirts"
    } 
    else if (temperature < 30) 
    {
    return "Welcome to summer! bring out your sandals!"
    }
     else
      {
    return "Beach style!"
    }
       
}
    const clothToWear = pickYourClothBasedOnWeather(30);
    console.log(clothToWear);


const clothesToWear = pickYourClothBasedOnWeather(18);
console.log(clothesToWear); 
