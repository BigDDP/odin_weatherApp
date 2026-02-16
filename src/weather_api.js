import {key, secret} from '../credentials.js'

const loader = document.querySelector(".loader");

// Mock JSON to circumvent limit.
export default async function mockFetchData() {
    loader.classList.add("yes-loader");

    try {
        const response = await fetch(`/mockWeather.json`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        };

        const jsonData = await response.json();
        return jsonData;
    } catch (err) {
        console.error("Error fertching weather data", err);
        throw err;
    };
};

// Hit Limit

async function fetchAPIData(location, date1, date2) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${key}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        };

        const jsonData = await response.json();
        return jsonData;
    } catch (err) {
        console.error("Error fertching weather data", err);
        return err
    };
};