const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
    //time = distance / speed;

  const time = travelInformation.destinationDistance / travelInformation.speed;

  const travelTime = function CalculateTravelTime()
 {

  const timeInHours = Math.floor(time);
  const timeInMinutes = Math.floor(time * 60) % 60;

 return (`Travel time will be :hours ${timeInHours} and ${timeInMinutes} minutes`);         
 }
  console.log(travelTime()); // 4 hours and 42 minutes
  