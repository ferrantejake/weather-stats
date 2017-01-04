// Imports and constants are always located at the top.

// Import weather module from the components directory.
import * as weather from './components/weather';
// Import webhook module from the components directory.
//


// Globals
//              minutes seconds milliseconds
const TIMEOUT = 5 * 60 * 1000;

// Create a function which checks the weather at some given interval.
// This interval indivates that we will make a call at the given interval
// and continue to make calls following the initial one after the set
// interval amount of time.
// For more information on how this works, search JavaScript setInterval.
const timer = setInterval(getCurrentWeather, TIMEOUT);

// This retrieves all kinda of weather data from our weather module. Here
// I have setup some of the basics, but it is up to you to implement all 5
// data retrieval steps and compile them into a single data point.
function getCurrentWeather() {
    const location = 'Orlando';
    // WeatherData object (notice that WeatherData is unknown. Import it.)
    const data: weather.WeatherData = {
        recordedTimestamp: undefined,
        temperature: undefined,
        type: undefined,
        weather: undefined,
        windDirection: undefined,
        windSpeed: undefined
    };

    weather.getCurrentWeather(location)
        .then(currentWeather => {
            // Read through the weather data and compare to what we have seen.
            // If the weather changes since our last webhook call, then make a
            // new call with the curreent information.
        });
    weather.getCurrentTemp(location, weather.DegreeType.Fahrenheit)
        .then(temp => {
            // Read through current temperature information.
            // If the temperature changes over 3 since we last sent a
            // webhook call, then make a webhook call with the current info.
        });

    // Check wind speed, if change exceeds 5mph, then make web call

    // Check wind direction, if change make well call.

    // Pass WeatherData object to the web call.

    // The tricky park is figuring out how to store the data in the
    // WeatherData object, compare it to the previous weather data,
    // and if necessary, pass it off to the webhook call. Feel free
    // to poke me for more information.
    // Note you will need to import the webhook service
    // Pass data to webhook.sendData(data)
}