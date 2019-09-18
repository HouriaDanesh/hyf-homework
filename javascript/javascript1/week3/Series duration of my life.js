// How it works: # of seasons × # of episodes per season × runtime of episode = total for 1 TV show. 
//Repeat for more TV shows = total time.


const seriesDurations = [
    {
      title: 'Home land',
      days: 9,
      hours: 9,
      minutes: 17,  
    },
    {
      title: 'House of cards',
      days: 6,
      hours: 3,
      minutes: 22,
    },
    {
      title: 'Friends',
      days: 3,
      hours: 14,
      minutes: 32,
    }
  ];
  // 1year = 525600min;
// 1day = 1440 min;
//1hours =60min;
function calculateDuration(){

  const AvgLife = 80;
  const YearsInMin= AvgLife * 525600;

  sum = 0;  
  for (let i = 0; i<seriesDurations.length ; i++)
  {
    const daysInMinute = seriesDurations[i].days * 1440;
    const hoursInMinute = seriesDurations[i].hours * 60;
   
    const TotalMinutes = daysInMinute + hoursInMinute + seriesDurations[i].minutes;
   
    const Percentage = (TotalMinutes/YearsInMin) * 100;

    console.log(`The ${seriesDurations[i].title} series took ${Percentage.toFixed(3)}% of my life`);  

    sum += Percentage; 

  }


console.log(`In total that is ${sum.toFixed(2)}% of my life`);
}

calculateDuration();

//  Game of thrones took 0.01% of my life
//Sopranos took 0.012% of my life
//The Wire took 0.007% of my life

//In total that is 0.2% of my life