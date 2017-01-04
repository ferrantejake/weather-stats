// Use the weather-js module
// You'll need to install weather-js via npm
// Here is how you will use it..
// https://www.npmjs.com/package/weather-js
// Uncomment when you have installed weather-js

// Require weather-js as a dependency.
// Note you will need to npm install this dependency.
const weather = require('weather-js');

// Make an enums for common values, such as temperature standards.
export enum DegreeType {
    Fahrenheit,
    Celcius
}

export enum WeatherNotification {
    Weather,
    Temperature,
    WindDirection,
    WindSpeed
}

export enum WeatherType {
    // make your own enum for different weather types
    // that can appear from the weather-js module.
}

export interface WeatherData {
    recordedTimestamp: Date;        // The time when the data was recorded
    type: WeatherNotification;      // The type of notification being sent
    temperature: number;            // Current temperature
    windDirection: string;          // Current wind direction
    windSpeed: number;              // Current wind speed
    weather: WeatherType;           // Current weather type
}

// Export makes it availiable in the module. This structure
// is called an interface. For example, when you import This
// weather module into app, then you will be able to use:
// weather.getCurrentTemp(location).
export function getCurrentTemp(
    location: string, degreeType?: DegreeType): Promise<any> {
    // Im jumping you right into Promises, because that's the modern
    // way to respond with an async function. Many libs by default only
    // support callbacks, but since ES6 (JavaScript lang update) Promises
    // have become the defacto. Make sure to look these up.
    return new Promise<any>((resolve, reject) => {
        weather.find({ search: location, degreeType: mapDegreeType(degreeType) },
            (error: Error, result: any) => {
                if (!error) { resolve(result); }
                else { reject(error); }
            });
    });
}

// Check if the weather in a locationis rainy.
// Resolve true if it is raining, false if it is not.
// Reject if there was an error.
export function isRaining(location: string): boolean {
    // Make your calls to the weather API here.
    return null;
}

// Get the current weather reading.. i.e. raining, cloudy, etc.
export function getCurrentWeather(location: string): Promise<any> {
    // Make your calls to the weather API here.
    return null;
}

// The following functions are empty prototypes. You decide
// how to construct them.
export function getWindStrnegth() { }
export function getWindDirection() { }


// Internal function. A function which is not exported can be thought
// as a private function to the interface, and cannot be called via
// the exported module.
function mapDegreeType(degreeType: DegreeType): string {
    return (degreeType = DegreeType.Fahrenheit) ? 'F' : 'C';
}