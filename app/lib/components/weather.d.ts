export declare enum DegreeType {
    Fahrenheit = 0,
    Celcius = 1,
}
export declare enum WeatherNotification {
    Weather = 0,
    Temperature = 1,
    WindDirection = 2,
    WindSpeed = 3,
}
export declare enum WeatherType {
}
export interface WeatherData {
    recordedTimestamp: Date;
    type: WeatherNotification;
    temperature: number;
    windDirection: string;
    windSpeed: number;
    weather: WeatherType;
}
export declare function getCurrentTemp(location: string, degreeType?: DegreeType): Promise<any>;
export declare function isRaining(location: string): boolean;
export declare function getCurrentWeather(location: string): Promise<any>;
