document.getElementById("getWeatherButton").addEventListener("click", function () {
    const apiKey = "1928d3f1058b4525bbc130838233009"; 
    const city = document.getElementById("cityInput").value;
    const weatherInfoElement = document.getElementById("weatherInfo");

    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                const location = data.location;
                const current = data.current;

                const html = `
                    <h2>Weather in ${location.name}, ${location.country}</h2>
                    <p>Region: ${location.region}</p>
                    <p>Local Time: ${location.localtime}</p>
                    <p>Temperature: ${current.temp_c}°C (${current.temp_f}°F)</p>
                    <p>Condition: ${current.condition.text}</p>
                    <p>Wind: ${current.wind_kph} km/h from ${current.wind_dir}</p>
                    <p>Pressure: ${current.pressure_mb} mb (${current.pressure_in} in)</p>
                    <p>Precipitation: ${current.precip_mm} mm (${current.precip_in} in)</p>
                    <p>Humidity: ${current.humidity}%</p>
                    <p>Cloudiness: ${current.cloud}%</p>
                    <p>Feels Like: ${current.feelslike_c}°C (${current.feelslike_f}°F)</p>
                    <p>Visibility: ${current.vis_km} km (${current.vis_miles} miles)</p>
                    <p>UV Index: ${current.uv}</p>
                    <p>Gust: ${current.gust_kph} km/h (${current.gust_mph} mph)</p>
                `;

                weatherInfoElement.innerHTML = html;
            } else {
                weatherInfoElement.innerHTML = "Weather data not available.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            weatherInfoElement.innerHTML = "An error occurred while fetching data.";
        });
});
const weatherInfoElement = document.getElementById("weatherInfo");
weatherInfoElement.classList.add("show-info");
