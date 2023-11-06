document.addEventListener("DOMContentLoaded", function () {
    const locationInput = document.getElementById("locationInput");
    const searchButton = document.getElementById("searchButton");
    const locationName = document.getElementById("locationName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const weatherIcon = document.getElementById("weatherIcon");

    searchButton.addEventListener("click", () => {
        // You can add your code here to fetch weather data from an API
        // and update the content in the HTML elements above.
        // For this example, we'll use static data.
        locationName.textContent = "City, Country";
        temperature.textContent = "Temperature: 25°C";
        description.textContent = "Description: Sunny";
        humidity.textContent = "Humidity: 50%";
        wind.textContent = "Wind: 10 km/h";
        weatherIcon.src = "weather-app.png"; // Replace with the actual image URL
    });
});
