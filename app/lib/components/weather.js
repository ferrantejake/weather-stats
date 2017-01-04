// Use the weather-js module
// You'll need to install weather-js via npm
// Here is how you will use it..
// https://www.npmjs.com/package/weather-js
// Uncomment when you have installed weather-js
"use strict";
const weather = require('weather-js');
// Make an enums for common values, such as temperature standards.
var DegreeType;
(function (DegreeType) {
    DegreeType[DegreeType["Fahrenheit"] = 0] = "Fahrenheit";
    DegreeType[DegreeType["Celcius"] = 1] = "Celcius";
})(DegreeType = exports.DegreeType || (exports.DegreeType = {}));
var WeatherNotification;
(function (WeatherNotification) {
    WeatherNotification[WeatherNotification["Weather"] = 0] = "Weather";
    WeatherNotification[WeatherNotification["Temperature"] = 1] = "Temperature";
    WeatherNotification[WeatherNotification["WindDirection"] = 2] = "WindDirection";
    WeatherNotification[WeatherNotification["WindSpeed"] = 3] = "WindSpeed";
})(WeatherNotification = exports.WeatherNotification || (exports.WeatherNotification = {}));
var WeatherType;
(function (WeatherType) {
    // make your own enum for different weather types
    // that can appear from the weather-js module.
})(WeatherType = exports.WeatherType || (exports.WeatherType = {}));
// Export makes it availiable in the module. This structure
// is called an interface. For example, when you import This
// weather module into app, then you will be able to use:
// weather.getCurrentTemp(location).
function getCurrentTemp(location, degreeType) {
    // Im jumping you right into Promises, because that's the modern
    // way to respond with an async function. Many libs by default only
    // support callbacks, but since ES6 (JavaScript lang update) Promises
    // have become the defacto. Make sure to look these up.
    return new Promise((resolve, reject) => {
        weather.find({ search: location, degreeType: mapDegreeType(degreeType) }, (error, result) => {
            if (!error) {
                resolve(result);
            }
            else {
                reject(error);
            }
        });
    });
}
exports.getCurrentTemp = getCurrentTemp;
// Check if the weather in a locationis rainy.
// Resolve true if it is raining, false if it is not.
// Reject if there was an error.
function isRaining(location) {
    return null;
}
exports.isRaining = isRaining;
// Get the current weather reading.. i.e. raining, cloudy, etc.
function getCurrentWeather(location) {
    return null;
}
exports.getCurrentWeather = getCurrentWeather;
// Internal function. A function which is not exported can be thought
// as a private function to the interface, and cannot be called via
// the exported module.
function mapDegreeType(degreeType) {
    return (degreeType = DegreeType.Fahrenheit) ? 'F' : 'C';
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2VhdGhlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUIsNENBQTRDO0FBQzVDLGdDQUFnQztBQUNoQywyQ0FBMkM7QUFDM0MsK0NBQStDOztBQUUvQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsa0VBQWtFO0FBQ2xFLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNsQix1REFBVSxDQUFBO0lBQ1YsaURBQU8sQ0FBQTtBQUNYLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQUVELElBQVksbUJBS1g7QUFMRCxXQUFZLG1CQUFtQjtJQUMzQixtRUFBTyxDQUFBO0lBQ1AsMkVBQVcsQ0FBQTtJQUNYLCtFQUFhLENBQUE7SUFDYix1RUFBUyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBSzlCO0FBRUQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ25CLGlEQUFpRDtJQUNqRCw4Q0FBOEM7QUFDbEQsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBV0QsMkRBQTJEO0FBQzNELDREQUE0RDtBQUM1RCx5REFBeUQ7QUFDekQsb0NBQW9DO0FBQ3BDLHdCQUNJLFFBQWdCLEVBQUUsVUFBdUI7SUFDekMsZ0VBQWdFO0lBQ2hFLG1FQUFtRTtJQUNuRSxxRUFBcUU7SUFDckUsdURBQXVEO0lBQ3ZELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFDcEUsQ0FBQyxLQUFZLEVBQUUsTUFBVztZQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsQ0FBQztnQkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBYkQsd0NBYUM7QUFFRCw4Q0FBOEM7QUFDOUMscURBQXFEO0FBQ3JELGdDQUFnQztBQUNoQyxtQkFBMEIsUUFBZ0I7SUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRkQsOEJBRUM7QUFFRCwrREFBK0Q7QUFDL0QsMkJBQWtDLFFBQWdCO0lBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUZELDhDQUVDO0FBRUQscUVBQXFFO0FBQ3JFLG1FQUFtRTtBQUNuRSx1QkFBdUI7QUFDdkIsdUJBQXVCLFVBQXNCO0lBQ3pDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RCxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvd2VhdGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVzZSB0aGUgd2VhdGhlci1qcyBtb2R1bGVcclxuLy8gWW91J2xsIG5lZWQgdG8gaW5zdGFsbCB3ZWF0aGVyLWpzIHZpYSBucG1cclxuLy8gSGVyZSBpcyBob3cgeW91IHdpbGwgdXNlIGl0Li5cclxuLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvd2VhdGhlci1qc1xyXG4vLyBVbmNvbW1lbnQgd2hlbiB5b3UgaGF2ZSBpbnN0YWxsZWQgd2VhdGhlci1qc1xyXG5cclxuY29uc3Qgd2VhdGhlciA9IHJlcXVpcmUoJ3dlYXRoZXItanMnKTtcclxuLy8gTWFrZSBhbiBlbnVtcyBmb3IgY29tbW9uIHZhbHVlcywgc3VjaCBhcyB0ZW1wZXJhdHVyZSBzdGFuZGFyZHMuXHJcbmV4cG9ydCBlbnVtIERlZ3JlZVR5cGUge1xyXG4gICAgRmFocmVuaGVpdCxcclxuICAgIENlbGNpdXNcclxufVxyXG5cclxuZXhwb3J0IGVudW0gV2VhdGhlck5vdGlmaWNhdGlvbiB7XHJcbiAgICBXZWF0aGVyLFxyXG4gICAgVGVtcGVyYXR1cmUsXHJcbiAgICBXaW5kRGlyZWN0aW9uLFxyXG4gICAgV2luZFNwZWVkXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdlYXRoZXJUeXBlIHtcclxuICAgIC8vIG1ha2UgeW91ciBvd24gZW51bSBmb3IgZGlmZmVyZW50IHdlYXRoZXIgdHlwZXNcclxuICAgIC8vIHRoYXQgY2FuIGFwcGVhciBmcm9tIHRoZSB3ZWF0aGVyLWpzIG1vZHVsZS5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRGF0YSB7XHJcbiAgICByZWNvcmRlZFRpbWVzdGFtcDogRGF0ZTsgICAgICAgIC8vIFRoZSB0aW1lIHdoZW4gdGhlIGRhdGEgd2FzIHJlY29yZGVkXHJcbiAgICB0eXBlOiBXZWF0aGVyTm90aWZpY2F0aW9uOyAgICAgIC8vIFRoZSB0eXBlIG9mIG5vdGlmaWNhdGlvbiBiZWluZyBzZW50XHJcbiAgICB0ZW1wZXJhdHVyZTogbnVtYmVyOyAgICAgICAgICAgIC8vIEN1cnJlbnQgdGVtcGVyYXR1cmVcclxuICAgIHdpbmREaXJlY3Rpb246IHN0cmluZzsgICAgICAgICAgLy8gQ3VycmVudCB3aW5kIGRpcmVjdGlvblxyXG4gICAgd2luZFNwZWVkOiBudW1iZXI7ICAgICAgICAgICAgICAvLyBDdXJyZW50IHdpbmQgc3BlZWRcclxuICAgIHdlYXRoZXI6IFdlYXRoZXJUeXBlOyAgICAgICAgICAgLy8gQ3VycmVudCB3ZWF0aGVyIHR5cGVcclxufVxyXG5cclxuLy8gRXhwb3J0IG1ha2VzIGl0IGF2YWlsaWFibGUgaW4gdGhlIG1vZHVsZS4gVGhpcyBzdHJ1Y3R1cmVcclxuLy8gaXMgY2FsbGVkIGFuIGludGVyZmFjZS4gRm9yIGV4YW1wbGUsIHdoZW4geW91IGltcG9ydCBUaGlzXHJcbi8vIHdlYXRoZXIgbW9kdWxlIGludG8gYXBwLCB0aGVuIHlvdSB3aWxsIGJlIGFibGUgdG8gdXNlOlxyXG4vLyB3ZWF0aGVyLmdldEN1cnJlbnRUZW1wKGxvY2F0aW9uKS5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wKFxyXG4gICAgbG9jYXRpb246IHN0cmluZywgZGVncmVlVHlwZT86IERlZ3JlZVR5cGUpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgLy8gSW0ganVtcGluZyB5b3UgcmlnaHQgaW50byBQcm9taXNlcywgYmVjYXVzZSB0aGF0J3MgdGhlIG1vZGVyblxyXG4gICAgLy8gd2F5IHRvIHJlc3BvbmQgd2l0aCBhbiBhc3luYyBmdW5jdGlvbi4gTWFueSBsaWJzIGJ5IGRlZmF1bHQgb25seVxyXG4gICAgLy8gc3VwcG9ydCBjYWxsYmFja3MsIGJ1dCBzaW5jZSBFUzYgKEphdmFTY3JpcHQgbGFuZyB1cGRhdGUpIFByb21pc2VzXHJcbiAgICAvLyBoYXZlIGJlY29tZSB0aGUgZGVmYWN0by4gTWFrZSBzdXJlIHRvIGxvb2sgdGhlc2UgdXAuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgd2VhdGhlci5maW5kKHsgc2VhcmNoOiBsb2NhdGlvbiwgZGVncmVlVHlwZTogbWFwRGVncmVlVHlwZShkZWdyZWVUeXBlKSB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IEVycm9yLCByZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcikgeyByZXNvbHZlKHJlc3VsdCk7IH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyByZWplY3QoZXJyb3IpOyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIENoZWNrIGlmIHRoZSB3ZWF0aGVyIGluIGEgbG9jYXRpb25pcyByYWlueS5cclxuLy8gUmVzb2x2ZSB0cnVlIGlmIGl0IGlzIHJhaW5pbmcsIGZhbHNlIGlmIGl0IGlzIG5vdC5cclxuLy8gUmVqZWN0IGlmIHRoZXJlIHdhcyBhbiBlcnJvci5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmFpbmluZyhsb2NhdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBjdXJyZW50IHdlYXRoZXIgcmVhZGluZy4uIGkuZS4gcmFpbmluZywgY2xvdWR5LCBldGMuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcihsb2NhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBJbnRlcm5hbCBmdW5jdGlvbi4gQSBmdW5jdGlvbiB3aGljaCBpcyBub3QgZXhwb3J0ZWQgY2FuIGJlIHRob3VnaHRcclxuLy8gYXMgYSBwcml2YXRlIGZ1bmN0aW9uIHRvIHRoZSBpbnRlcmZhY2UsIGFuZCBjYW5ub3QgYmUgY2FsbGVkIHZpYVxyXG4vLyB0aGUgZXhwb3J0ZWQgbW9kdWxlLlxyXG5mdW5jdGlvbiBtYXBEZWdyZWVUeXBlKGRlZ3JlZVR5cGU6IERlZ3JlZVR5cGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChkZWdyZWVUeXBlID0gRGVncmVlVHlwZS5GYWhyZW5oZWl0KSA/ICdGJyA6ICdDJztcclxufSJdfQ==