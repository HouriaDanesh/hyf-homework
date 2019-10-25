
function checkCheck() {
    
    if (document.getElementById('checkbox').checked){
        
            navigator.geolocation.getCurrentPosition(GetLocation);
                function GetLocation(location) {
                const lat = location.coords.latitude;
                const long = location.coords.longitude;
                const url = 'http://api.openweathermap.org/data/2.5/weather?';
                const lat_cord = 'lat=' + lat;
                const lon_cord = '&lon=' + long;
                const unit = '&units=metric';
                const apikey = '&appid=a7d6e888a07b1af128820088b2fc973b';
                const fullapiaddress = url + lat_cord + lon_cord + unit +apikey;
                console.log(fullapiaddress);
                
                //LOADING JSON FILE
                    function Get(fullipaddress){
                        const Httpreq = new XMLHttpRequest(); // a new request
                        Httpreq.open("GET",fullipaddress,false);
                        Httpreq.send(null);
                        return Httpreq.responseText;          
                    }

                //DISPLAYING INFORMATION 
                    const json_obj = JSON.parse(Get(fullapiaddress));
                    const cityname = ("<p>city: "+json_obj.name + "</p>");
                    const citytemerature = ("<p>Temperature: "+json_obj.main.temp + "°C</p>");
                    const cityhumidity = ("<p>Humidity: "+json_obj.main.humidity+ "%</p>");
                    const citywind = ("<p>Wind speed: " + json_obj.wind.speed+" m/s</p>");
                    const citydescription = ("<p>Description: " +json_obj.weather[0].description+"</p>");
                    const icon = json_obj.weather[0].icon;
                    const ico_url = 'http://openweathermap.org/img/w/';
                    const full_ico = ico_url + icon;
                    const weathericon = ("<img src='" + full_ico + ".png'/>")
                    const cityid = json_obj.id;

                    console.log(cityid);
                    
                    const result2 = cityname + citytemerature + cityhumidity + citywind + citydescription + weathericon;

                    
                    document.body.parentElement.innerHTML = result2;

        }
    }
    
}