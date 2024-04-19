require('dotenv').config();

/**
 * Get current weather using weatherAPI
 * @param {*} location 
 * @returns 
 */
async function getCurrentWeather(location) {
    const { default: fetch } = await import('node-fetch'); // Use dynamic import
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
    try {
        const weatherFetch = await fetch(url);
        const weatherData = await weatherFetch.json();
        return weatherData;
    } catch (error) {
        console.error('Error:', error);
        throw error; // Re-throw the error to propagate it to the caller
    }
}

const location = 'San Diego, California'; // Corrected capitalization
Promise.resolve(getCurrentWeather(location))
    .then(body => console.log(body))
    .catch(error => console.error(error)); // Handle errors
