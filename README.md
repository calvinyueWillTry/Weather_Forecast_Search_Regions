index.html
Found a template online, and used that for this assignment. 
Notable changes included: 
Removing default features that would be displayed,
Section for the 1st day of findings.
<div>added for Days 2-5 to allow those to be added on</div>
CSS nothing notably changed, except for font and centralized text.
JS Created an API key and found an inquiry URL to pull the data from.
When the search button is clicked on, then it enters the city typed in, and fetches the data for that city. 
Then under "function displayCity," created variables to display the specific pieces of information being searched for, then use document.createElement to create paragraphs/spaces for each title and information.
Then innerHTML is used to append the title and the relevant information from the data array, including city's name, Temperature, Weather, Wind Speed and Visibility.
After the 1st day, then "function loopDays" for days 2-5, by every 8 on the array (3 hour increments, so 8X3 = 24 hours). Those are then appended to the first day sequentially.
Then the names of the cities entered are stored to localStorage in "function storeWeatherData," as long as something was actually entered. This function converts the city name from a string to a JSON.parse, to an array object.
.push enters it into the array.
"function displayWeather" then gets the key from localStorage, using JSON.parse to convert it. .map returns it.
html.textContent=searchterm adds the latest city searched to the end of the array.
history.append(html) makes sure that the previous search history is finally displayed on the page.
