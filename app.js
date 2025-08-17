const apiKey ="e0f1c138fb83a3ff95a73ad7e1b0e2d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&units=metric&q=";

const searchButton = document.querySelector("button");
const cityInput = document.querySelector("input");
const tempElement = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

function fetchWeather(city) {
    fetch(apiUrl + city)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            updateWeatherUI(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function updateWeatherUI(data) {
    const temperature = data.main.temp;
    const cityName = data.name;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    tempElement.textContent = `${temperature}°C`;
    cityElement.textContent = cityName;
    humidityElement.textContent = `${humidity}%`;
    windElement.textContent = `${windSpeed} km/h`;
}


