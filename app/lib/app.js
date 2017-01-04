// Create a http server using Node http
// https://nodejs.org/api/http.html
// exports = const server = http.createServer( (req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('okay');
// });
"use strict";
// Import the weather module from the component folder
const weather = require("./components/weather");
// constant globals
//              minutes seconds milliseconds
const TIMEOUT = 5 * 60 * 1000;
// Create a function which checks the weather at some given interval.
// Interval possibly every 5 mintes?
// For more information on how this works, search JavaScript setTimeout.
const timer = setInterval(getCurrentWeather, TIMEOUT);
function getCurrentWeather() {
    const location = 'Orlando';
    // WeatherData object (notice that WeatherData is unknown. Import it.)
    const data = {
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
    // Pass data to webhook.sendData(data)
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMsbUNBQW1DO0FBQ25DLDhEQUE4RDtBQUM5RCx3REFBd0Q7QUFDeEQscUJBQXFCO0FBQ3JCLE1BQU07O0FBRU4sc0RBQXNEO0FBQ3RELGdEQUFnRDtBQUVoRCxtQkFBbUI7QUFDbkIsNENBQTRDO0FBQzVDLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBRTlCLHFFQUFxRTtBQUNyRSxvQ0FBb0M7QUFDcEMsd0VBQXdFO0FBQ3hFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUV0RDtJQUNJLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUMzQixzRUFBc0U7SUFDdEUsTUFBTSxJQUFJLEdBQXdCO1FBQzlCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsV0FBVyxFQUFFLFNBQVM7UUFDdEIsSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsU0FBUztRQUNsQixhQUFhLEVBQUUsU0FBUztRQUN4QixTQUFTLEVBQUUsU0FBUztLQUN2QixDQUFDO0lBRUYsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztTQUM5QixJQUFJLENBQUMsY0FBYztRQUNoQixrRUFBa0U7UUFDbEUsa0VBQWtFO1FBQ2xFLDBDQUEwQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNQLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1NBQzFELElBQUksQ0FBQyxJQUFJO1FBQ04sZ0RBQWdEO1FBQ2hELHlEQUF5RDtRQUN6RCxnRUFBZ0U7SUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFFUCwrREFBK0Q7SUFFL0Qsa0RBQWtEO0lBRWxELDJDQUEyQztJQUUzQywrREFBK0Q7SUFDL0QsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCxtQ0FBbUM7SUFDbkMsc0NBQXNDO0FBQzFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlIGEgaHR0cCBzZXJ2ZXIgdXNpbmcgTm9kZSBodHRwXHJcbi8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sXHJcbi8vIGV4cG9ydHMgPSBjb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlciggKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgcmVzLndyaXRlSGVhZCgyMDAsIHsnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nfSk7XHJcbi8vICAgcmVzLmVuZCgnb2theScpO1xyXG4vLyB9KTtcclxuXHJcbi8vIEltcG9ydCB0aGUgd2VhdGhlciBtb2R1bGUgZnJvbSB0aGUgY29tcG9uZW50IGZvbGRlclxyXG5pbXBvcnQgKiBhcyB3ZWF0aGVyIGZyb20gJy4vY29tcG9uZW50cy93ZWF0aGVyJztcclxuXHJcbi8vIGNvbnN0YW50IGdsb2JhbHNcclxuLy8gICAgICAgICAgICAgIG1pbnV0ZXMgc2Vjb25kcyBtaWxsaXNlY29uZHNcclxuY29uc3QgVElNRU9VVCA9IDUgKiA2MCAqIDEwMDA7XHJcblxyXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgdGhlIHdlYXRoZXIgYXQgc29tZSBnaXZlbiBpbnRlcnZhbC5cclxuLy8gSW50ZXJ2YWwgcG9zc2libHkgZXZlcnkgNSBtaW50ZXM/XHJcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGhvdyB0aGlzIHdvcmtzLCBzZWFyY2ggSmF2YVNjcmlwdCBzZXRUaW1lb3V0LlxyXG5jb25zdCB0aW1lciA9IHNldEludGVydmFsKGdldEN1cnJlbnRXZWF0aGVyLCBUSU1FT1VUKTtcclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSAnT3JsYW5kbyc7XHJcbiAgICAvLyBXZWF0aGVyRGF0YSBvYmplY3QgKG5vdGljZSB0aGF0IFdlYXRoZXJEYXRhIGlzIHVua25vd24uIEltcG9ydCBpdC4pXHJcbiAgICBjb25zdCBkYXRhOiB3ZWF0aGVyLldlYXRoZXJEYXRhID0ge1xyXG4gICAgICAgIHJlY29yZGVkVGltZXN0YW1wOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGVtcGVyYXR1cmU6IHVuZGVmaW5lZCxcclxuICAgICAgICB0eXBlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgd2VhdGhlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgIHdpbmREaXJlY3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgICB3aW5kU3BlZWQ6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuXHJcbiAgICB3ZWF0aGVyLmdldEN1cnJlbnRXZWF0aGVyKGxvY2F0aW9uKVxyXG4gICAgICAgIC50aGVuKGN1cnJlbnRXZWF0aGVyID0+IHtcclxuICAgICAgICAgICAgLy8gUmVhZCB0aHJvdWdoIHRoZSB3ZWF0aGVyIGRhdGEgYW5kIGNvbXBhcmUgdG8gd2hhdCB3ZSBoYXZlIHNlZW4uXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSB3ZWF0aGVyIGNoYW5nZXMgc2luY2Ugb3VyIGxhc3Qgd2ViaG9vayBjYWxsLCB0aGVuIG1ha2UgYVxyXG4gICAgICAgICAgICAvLyBuZXcgY2FsbCB3aXRoIHRoZSBjdXJyZWVudCBpbmZvcm1hdGlvbi5cclxuICAgICAgICB9KTtcclxuICAgIHdlYXRoZXIuZ2V0Q3VycmVudFRlbXAobG9jYXRpb24sIHdlYXRoZXIuRGVncmVlVHlwZS5GYWhyZW5oZWl0KVxyXG4gICAgICAgIC50aGVuKHRlbXAgPT4ge1xyXG4gICAgICAgICAgICAvLyBSZWFkIHRocm91Z2ggY3VycmVudCB0ZW1wZXJhdHVyZSBpbmZvcm1hdGlvbi5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIHRlbXBlcmF0dXJlIGNoYW5nZXMgb3ZlciAzIHNpbmNlIHdlIGxhc3Qgc2VudCBhXHJcbiAgICAgICAgICAgIC8vIHdlYmhvb2sgY2FsbCwgdGhlbiBtYWtlIGEgd2ViaG9vayBjYWxsIHdpdGggdGhlIGN1cnJlbnQgaW5mby5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyBDaGVjayB3aW5kIHNwZWVkLCBpZiBjaGFuZ2UgZXhjZWVkcyA1bXBoLCB0aGVuIG1ha2Ugd2ViIGNhbGxcclxuXHJcbiAgICAvLyBDaGVjayB3aW5kIGRpcmVjdGlvbiwgaWYgY2hhbmdlIG1ha2Ugd2VsbCBjYWxsLlxyXG5cclxuICAgIC8vIFBhc3MgV2VhdGhlckRhdGEgb2JqZWN0IHRvIHRoZSB3ZWIgY2FsbC5cclxuXHJcbiAgICAvLyBUaGUgdHJpY2t5IHBhcmsgaXMgZmlndXJpbmcgb3V0IGhvdyB0byBzdG9yZSB0aGUgZGF0YSBpbiB0aGVcclxuICAgIC8vIFdlYXRoZXJEYXRhIG9iamVjdCwgY29tcGFyZSBpdCB0byB0aGUgcHJldmlvdXMgd2VhdGhlciBkYXRhLFxyXG4gICAgLy8gYW5kIGlmIG5lY2Vzc2FyeSwgcGFzcyBpdCBvZmYgdG8gdGhlIHdlYmhvb2sgY2FsbC4gRmVlbCBmcmVlXHJcbiAgICAvLyB0byBwb2tlIG1lIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gICAgLy8gUGFzcyBkYXRhIHRvIHdlYmhvb2suc2VuZERhdGEoZGF0YSlcclxufVxyXG4iXX0=
