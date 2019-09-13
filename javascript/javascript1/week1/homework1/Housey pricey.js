//const volumeInMeters = [8*10*10 , 5*11*8] ;
//const gardenSizeInM2 = [100 , 70] ;
//const PeterHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
//const JuliaHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

//if (PeterHousePrice > 2500000 )
// {
  //  console.log (" Peter paid too much for the house")
//}

//else {
//    console.log (" Peter paid too little for the house") 
//}

//if (JuliaHousePrice > 1000000 )
 //{
//console.log (" Julia paid too much for the house")
//}

//else {
 //   console.log (" Julia paid too little for the house") 
//}


//----------------------------------------
const friend = ["Peter", "Julia"];
const width = [8, 5];
const depth = [10, 11];
const height = [10, 8];
const gardM2 = [100, 70];
const paidPrice = [2500000, 1000000];
const mult = [2.5 * 1000, 300];

//write a function that caliculate the volume from depth and height 
//replace the volume calculation within the script 
//with oyur newly created function

function calculateVolume(width, depth, height)
{
    const volume = width * depth * height ;
  return volume;
}

function CalculateHousePrice(volumeM, mult, gardM2)
{
    const price = volumeM * mult[0] + gardM2 * mult[1];
    return price;
    //or
    //return volumeM * mult[0] + gardM2 * mult[1];
}

//const volumeM = [];
//const housePrice = [];

for (let i=0; i<friend.length; i++){


const volumeM = calculateVolume(width[i] , depth[i] , height[i]);
console.log( volumeM);


 
const housePrice = CalculateHousePrice(volumeM, mult, gardM2[i]);
console.log( housePrice);



   
   if(housePrice[i] < paidPrice[i]){
    console.log(`${friend[i]} has paid too much.`);
} else {
    console.log(`${friend[i]} has paid too little.`);
}


}

//const volumeM = [];
//volumeM.push(calculateVolume(width[0] , depth[0] , height[0]));
//volumeM.push(calculateVolume(width[1] , depth[1] , height[1]));
//console.log( volumeM );


//const housePrice = [];
//housePrice.push(CalculateHousePrice(volumeM[0], mult, gardM2[0]));
//housePrice.push(CalculateHousePrice(volumeM[1],  mult, gardM2[1]));
//console.log( housePrice );
