const volumeInMeters = [8*10*10 , 5*11*8] ;
const gardenSizeInM2 = [100 , 70] ;
const PeterHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const JuliaHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

if (PeterHousePrice > 2500000 )
 {
    console.log (" Peter paid too much for the house")
}

else {
    console.log (" Peter paid too little for the house") 
}

if (JuliaHousePrice > 1000000 )
 {
    console.log (" Julia paid too much for the house")
}

else {
    console.log (" Julia paid too little for the house") 
}



