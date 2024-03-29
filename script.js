//Add a radio button?
//The API key that I generated on https://openweathermap.org/
const key = "1015a338e1d99a768c1e1d9c68819134";
//Allow for input
const API_Inquiry = ""; 
const inquiry_URL= "http://api.openweathermap.org/data/2.5/forecast";
// Query URL to be fetched
//Tell is to establish a JS variable for the search button on the HTML
const searchButton = document.getElementById("search");
//Activate a click function, e.g. $("submit").onclick(getTheWeather)
//add the click effect to begin the search process
searchButton.addEventListener('click', getWeather) ;
// Function to get the data in the first place
function getWeather() {
    //const city=//jquery to allow the different cities 
    // to be selected accroding to what's being typed in
    var cityText = document.querySelector(".form-control");
    //This will inserted into the fetch URL, so that it will search whatever city is inputted
    var city = cityText.value;
    // Fetch the result of the Query about the weather results
    fetch(`${inquiry_URL}?q=${city}&units=metric&&appid=${key}`)
    //.then waits until the data is collected, and then sends a response to be arranged via JSON
        .then((response) => response.json())
    //.then after the data is fully collected and arranged, then go to display the information
        .then((data) => {
            displayCity (data);
            //for loop here to call function 5 times, 
            });
};
//To display the selected information, based on the data pulled from the fetch
function displayCity (data) {
    //add parameter location, take an id for where to display
    console.log(data);
    // Variables from the data array
    var city = data.city.name;
    var temperature = data.list[0].main.temp;
    var weathering = data.list[0].weather[0].description;
    var speed = data.list[0].wind.speed;
    var visibility = data.list[0].visibility;
    // City Div from the HTML, tell it to process whatever was inputted
    var cityFound = document.querySelector('#findings');
    cityFound.innerHTML = "";
   // CITY NAME
   // Create a new div to make space to add the label and name of city searched
   var title = document.createElement("p");
   //Created a class to be able to indent properly in CSS
   title.setAttribute("class","indent")
   //Add the label onto the page
   title.innerHTML = "City:"
   //Create a div to make space for the name of city
   var cityName = document.createElement("p");
   //Add the name of city onto the page
   cityName.innerHTML = city;
    // TEMPERATURE
    // See similars above
    var titleTemperature = document.createElement("p");
    titleTemperature.setAttribute("class","indent")
    titleTemperature.innerHTML = 'Temperature (Celcius):';
    var celcius = document.createElement("p");
    celcius.innerHTML = temperature;
    // WEATHER
    // See similars above
    var titleWeather = document.createElement("p");
    titleWeather.setAttribute("class","indent")
    titleWeather.innerHTML = 'Weather:';
    var weatherOverHead = document.createElement("p");
    weatherOverHead.innerHTML = weathering;
    // WIND SPEED
    // See similars above
    var WindSpeed = document.createElement("p");
    WindSpeed.setAttribute("class","indent");
    WindSpeed.innerHTML = 'Wind Speed (meters/sec.):';
    var winding = document.createElement("p");
    winding.innerHTML = speed;
    // VISIBILITY
    // See similars above
    var titleVisibility = document.createElement("p");
    titleVisibility.setAttribute("class","indent");
    titleVisibility.innerHTML = 'Visibility (km):';
    var visibleSight = document.createElement("p");
    visibleSight.innerHTML = visibility;
//The following are to be displayed and appended inside <div id = "findings" class="weather-info text-center">
    cityFound.append(title, cityName, titleTemperature, celcius, titleWeather, weatherOverHead,  WindSpeed, winding, titleVisibility, visibleSight);
    loopDays (data.list, city) // = weatherArray
    //A function to loop the data array for 5 days
};
function loopDays (weatherArray, city) {
    //Needs New function  to consolidate, then loop through
   //for (var i = 0; i < data.list.length; i+8) { }
    //add for loop to get 5 day forecast. 
   for (let i = 0; i< weatherArray.length; i += 8) {
    //console.log(weatherArray[i].dt_txt);
    //arrays of the variables
    var forecast = weatherArray[i].dt_txt;
    var tempForecast = weatherArray[i].main.temp;
    var weaForecastData = weatherArray[i].weather[0].description;
    var speedForecast = weatherArray[i].wind.speed;
    var visibleForecast = weatherArray[i].visibility

    //Title for the days of the weather forecasts
    //Structure: see similars above
    var titleForecast = document.createElement("p");
    titleForecast.setAttribute("class","indent");
    titleForecast.innerHTML = "Days 2-5 of the weather forecast:";
    var weatherForecast = document.createElement("div");
    weatherForecast.innerHTML = forecast;
    //Title and other temperatures at the same time on other days
    //Structure: see similars above
    var titleTemp = document.createElement("p");
    titleTemp.setAttribute("class","indent");
    titleTemp.innerHTML = "Temperature (Celcius):";
    var temperatureForecast = document.createElement("div");
    temperatureForecast.innerHTML = tempForecast;
    //Do the same for the rest of the info
    //Title and the weather sky at the same time on other days
    //Structure: see similars above
    var titleWea = document.createElement("p");
    titleWea.setAttribute("class","indent");
     titleWea.innerHTML = "Weather:";
    var weaForecast = document.createElement("div");
    weaForecast.innerHTML = weaForecastData
    //Title and the wind speed at the same time on other days
    //Structure: see similars above
    var titleSpeed = document.createElement("p");
    titleSpeed.setAttribute("class","indent");
    titleSpeed.innerHTML = "Wind Speed (meters/sec.):";
    var speedWindForecast = document.createElement("div");
    speedWindForecast.innerHTML = speedForecast
    //Title and the visibility at the same time on other days
    //Structure: see similars above
    var titleVisible = document.createElement("p");
    titleVisible.setAttribute("class","indent");
    titleVisible.innerHTML = "Visibility (km):";
    var visibilityForecast = document.createElement("div");
    visibilityForecast.innerHTML = visibleForecast
    //Appends this info to the rest of the information for the 1st day. 
    var cityFound = document.querySelector('#findings');
    cityFound.append (titleForecast.innerHTML,forecast, titleTemp.innerHTML, tempForecast, titleWea, weaForecastData, titleSpeed.innerHTML, speedForecast, titleVisible.innerHTML, visibleForecast);
   } 
  console.log(city)
   storeWeatherData(city)//calls this function
};
function storeWeatherData (cityFound) { //city =  cityFound, calls new function to store name of city
    console.log(cityFound)
    const memory = localStorage.getItem("cityHistory"); //check to see if there is anything entered
    if (memory !== null) { //if something actually got entered
        const history = JSON.parse(memory);//translates memory from string into an array object that can be used in function
        history.push (cityFound) // push name into array, otherwise it won't be saved
        console.log(history);
        localStorage.setItem("cityHistory", JSON.stringify (history));//place object "city's name" into local storage array under "cityHistory"
    } 
    else {
        const cityarray=[cityFound] //makes blank entry an unprocessed request
        localStorage.setItem("cityHistory", JSON.stringify(cityarray));//needs to be a string to go into localStorage, but an object to be taken out
        console.log(cityFound);
    }
    displayWeather() //calls the new function to display the memory of the string
}
function displayWeather(){ //This displays the cities from previous query search at the bottom of the page
    const previous = localStorage.getItem("cityHistory") //gets the key from the Application already stored in localStorage
    const history = document.getElementById("searchhistory") //HTML element to be used to display on the webpage, else it can't appear
    const parsed = JSON.parse(previous) // takes the key, then translates the key from a string into an object 
    parsed.map((searchterm)=>{ //returns the object after looping through the array, however many cities there are after the key, even when refreshed
        const html = document.createElement("p") //formatting to separate cities on the webpage
        html.textContent=searchterm //Assigns the most recent city searched in the array (which will show last), which can be seen in Application
        history.append(html) //adds it under the <div> with that id, also adds the children under separate p tags
    })
}
function displayTemperature (data) { 
    var weather = document.querySelector('#findings');
    //weather.innerHTML = "";
    var temperature = data.list[0].main.temp; //defaults to preview, which is data., then data.content will specify. Like a hallway with room, or parent()
    //console.log(temperature)
    // .menu-on-content(applies to method, not array)
    //Under list-array, I want city.name, main(all temp), rain, system-visibility, weather and wind
    var title = document.createElement("p");
    title.innerHTML = 'Temperature (Celcius):';
    //weather.textContent = temperature;
    var celcius = document.createElement("div");
    celcius.innerHTML = temperature;
    weather.append(title);
    title.append(celcius);
    //Cannot replace the placeholder
    var temperatureReplace = document.getElementById('temp');
    //console.log(temperatureReplace);
    temperatureReplace.placeholder = weather;
    //displayCity ();
    console.log(data);
    let i = 0;
while (i < temperature.length) {
    console.log(temperature[i]);
    i++;
}
}
 /**
 * 
//const inquiry_URL= "http://api.openweathermap.org/data/2.5/weather";
//Do I need the city IDs? https://bulk.openweathermap.org/sample/ 
//{city name},{state code} and/or {country code} or just city?
//zipcode needs Zip and Country
//let humidity;
//get the varioables from the page
    //const params=`?q=${city},${state},${country}&units=metric&lang=en&appid=${API_key}`
    //`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=London&days=5&aqi=no&alerts=no`
    * @param {*} data 
/**displayTemperature (data);
            displayWeather(data);
            displaywindSpeed(data);
            displayVisibility (data);*/
            //var weatherForecast = weatherArray[0].dt_txt;
   //weatherForecast.append(title, cityName, titleTemperature, celcius, titleWeather, weatherOverHead,  WindSpeed, winding, titleVisibility, visibleSight);
    // }
 //if (memory > 9) {
    //    memory.unshift ()
    //}
// function displayWeather(data) {
//do {
//    console.log(temperature[i]);
//    i++;
//} while (i < temperature.length);    
//for (let i = 0; i < temperature.length; i++) { }
//    console.log(temperature.length);}
//     //var temperature = data.list[0].main.temp;
//     var weathering = data.list[0].weather[0].description;
//     //console.log(weathering);
//     //var weather = document.querySelector('#findings');
//     var weatherForecast = document.querySelector('#findings');
//     var title = document.createElement("p");
//     title.innerHTML = 'Weather:';
//     //var celcius = document.createElement("div");
//     var weatherOverHead = document.createElement("div");
//     //celcius.innerHTML = temperature;
//     weatherOverHead.innerHTML = weathering;
//     //weather.append(title);
//     weatherForecast.append(title);
//     title.append(weatherOverHead);
// }
// function displaywindSpeed(data) {    
//     //var temperature = data.list[0].main.temp;
//     let speed = data.list[0].wind.speed;
//     //console.log(speed);
//     var windSpeed = document.querySelector('#findings');
//     //Under list-array, I want city.name, main(all temp), rain, system-visibility, weather and wind
//     var title = document.createElement("p");
//     title.innerHTML = 'Wind Speed:';
//     //var celcius = document.createElement("div");
//     var winding = document.createElement("div");
//     //celcius.innerHTML = temperature;
//     winding.innerHTML = speed
//     windSpeed.append(title);
//     title.append(winding); //+ "m/s");
// }
/**
 *  function displayVisibility (data) {
    //console.log(data)
    //var temperature = data.list[0].main.temp;
    var visibility = data.list[0].visibility;
    //console.log(visibility)
    //var weather = document.querySelector('#findings');
    var visible = document.querySelector('#findings');
    var title = document.createElement("p");
    title.innerHTML = 'Visibility:';
    //var celcius = document.createElement("div");
    var visibleSight = document.createElement("div");
    //celcius.innerHTML = temperature;
    visibleSight.innerHTML = visibility;
    //weather.append(title);
    visible.append(title);
    title.append(visibleSight);
}
 * https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=metric&lang={lang}&appid=1015a338e1d99a768c1e1d9c68819134
 * {"coord":{"lon":-122.3321,"lat":47.6062},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],
 * "base":"stations","main":{"temp":7.62,"feels_like":4.78,"temp_min":6.16,"temp_max":9.26,"pressure":1002,"humidity":88},
 * "visibility":9656,"wind":{"speed":4.63,"deg":160,"gust":9.77},"rain":{"1h":1.12},"clouds":{"all":100},"dt":1710206630,
 * "sys":{"type":2,"id":2041694,"country":"US","sunrise":1710167357,"sunset":1710209355},"timezone":-25200,"id":5809844,"name":"Seattle","cod":200}
 */