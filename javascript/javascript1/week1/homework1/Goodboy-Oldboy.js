const dogYearOfBirth = 2011 ;
const dogYearFuture = 2045 ;
const dogYear = (dogYearFuture - dogYearOfBirth) / 7;
const shouldShowResultInDogYears = true ; //-->boolean
if(shouldShowResultInDogYears) {
    console.log( "Your dog will be " + dogYear + " dog years old in " +  dogYearFuture )

}
else
{
    console.log( "Your dog will be " + dogYear * 7 + " human years old in " +  dogYearFuture )
}
