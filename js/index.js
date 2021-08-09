console.log(axios);

//ONLY THE CURRENT TEMP UPDATES COULDN'T GET FUTURE FORECAST TO DISPLAY DATA

//BONUS CHALLENGE

function getCurrentLocation(response) {
  console.log(response);
  let weatherApiKey = "a0ec055234934001bdc16c33f46f3ecb";

  let latitude = response.coords.latitude;
  console.log(latitude);
  let longitude = response.coords.longitude;
  let units = "metric";
  let cnt = 7;

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&cnt=${cnt}&appid=${weatherApiKey}&units=${units}`;
  console.log(weatherUrl);

  //GET TEMP BASED ON COORDINATES

  function getTemp(temp) {
    console.log(temp);

    let updateCityName = document.querySelector(".cityNameC");
    updateCityName.innerHTML = temp.data.name;

    let updateCityNameT = document.querySelector(".cityNameT");
    updateCityNameT.innerHTML = temp.data.name;

    let updateCurrWeatherTemp = document.querySelector(".currentTempNumber");
    updateCurrWeatherTemp.innerHTML = `${Math.round(temp.data.main.temp)}°C`;

    let updateCurrWeatherFeels = document.querySelector(".currFeel");
    updateCurrWeatherFeels.innerHTML = `${Math.round(
      temp.data.main.feels_like
    )}°C`;

    let updateTomWeatherTemp = document.querySelector(".currentTempNumberT");
    updateTomWeatherTemp.innerHTML = `${Math.round(temp.data.main.temp)}°C`;

    let updateWindSpeedCurr = document.querySelector(".wind-speed-curr");
    updateWindSpeedCurr.innerHTML = Math.round(temp.data.wind.speed);

    let updateRainCurr = document.querySelector(".rain-curr");
    updateRainCurr.innerHTML = Math.round(temp.data.clouds.all);
    console.log(updateCurrWeatherFeels);

    let updateLowTempCurr = document.querySelector(".low-temp-curr");
    updateLowTempCurr.innerHTML = Math.round(temp.data.main.temp_min);

    let updateHighTempCurr = document.querySelector(".high-temp-curr");
    updateHighTempCurr.innerHTML = Math.round(temp.data.main.temp_max);

    //CONVERT C to F

    let celsiusButton = document.querySelector(".celsius");
    let fahrenheitButton = document.querySelector(".fahrenheit");

    function updateCelsius() {
      let celsiusUpdate = document.querySelector(".currentTempNumber");
      celsiusUpdate.innerHTML = `${Math.round(temp.data.main.temp)}°C`;
    }

    function updateFahrenheit() {
      let fahrenheitUpdate = document.querySelector(".currentTempNumber");
      let convertFahrenheitTemp = Math.round(temp.data.main.temp) * 1.8 + 32;
      fahrenheitUpdate.innerHTML = `${Math.round(convertFahrenheitTemp)}°F`;
    }

    celsiusButton.addEventListener("click", updateCelsius);
    fahrenheitButton.addEventListener("click", updateFahrenheit);

    //TOMORROW C & F
    let celsiusButtonT = document.querySelector(".celsiusT");
    let fahrenheitButtonT = document.querySelector(".fahrenheitT");

    function updateCelsiusT() {
      let celsiusUpdate = document.querySelector(".currentTempNumberT");
      celsiusUpdate.innerHTML = "30°C";
    }

    function updateFahrenheitT() {
      let fahrenheitUpdate = document.querySelector(".currentTempNumberT");
      fahrenheitUpdate.innerHTML = "86°F";
    }

    celsiusButtonT.addEventListener("click", updateCelsiusT);
    fahrenheitButtonT.addEventListener("click", updateFahrenheitT);
  }

  axios.get(weatherUrl).then(getTemp);

  //UPDATE EMOJI BASED ON WEATHER STATUS

  function emojiUpdate(emoji) {
    let updateCurrWeatherEmoji = document.querySelector(".currWeatherEmoji");
    console.log(emoji.data.weather[0].main);

    if (emoji.data.weather[0].main === "Clouds") {
      updateCurrWeatherEmoji.innerHTML = "☁";
    }
    if (emoji.data.weather[0].main === "Scattered Clouds") {
      updateCurrWeatherEmoji.innerHTML = "☁";
    }
    if (emoji.data.weather[0].main === "Partly Cloudy") {
      updateCurrWeatherEmoji.innerHTML = "⛅";
    }
    if (emoji.data.weather[0].main === "Rain") {
      updateCurrWeatherEmoji.innerHTML = "🌧";
    }
    if (emoji.data.weather[0].main === "Light Rain") {
      updateCurrWeatherEmoji.innerHTML = "🌧";
    }
    if (emoji.data.weather[0].main === "Drizzle") {
      updateCurrWeatherEmoji.innerHTML = "🌧";
    }
    if (emoji.data.weather[0].main === "Thunderstorm || Light Thunderstorm") {
      updateCurrWeatherEmoji.innerHTML = "⛈";
    }
    if (emoji.data.weather[0].main === "Light Thunderstorm") {
      updateCurrWeatherEmoji.innerHTML = "⛈";
    }
    if (emoji.data.weather[0].main === "Sunny") {
      updateCurrWeatherEmoji.innerHTML = "☀";
    }
    if (emoji.data.weather[0].main === "Clear") {
      updateCurrWeatherEmoji.innerHTML = "☀";
    }
    if (emoji.data.weather[0].main === "Clear Sky") {
      updateCurrWeatherEmoji.innerHTML = "☀";
    }
    if (emoji.data.weather[0].main === "Snow") {
      updateCurrWeatherEmoji.innerHTML = "🌨";
    }
    if (emoji.data.weather[0].main === "Atmosphere") {
      updateCurrWeatherEmoji.innerHTML = "🌫️";
    }
    if (emoji.data.weather[0].main === "Fog") {
      updateCurrWeatherEmoji.innerHTML = "🌫️";
    }
    if (emoji.data.weather[0].main === "Mist") {
      updateCurrWeatherEmoji.innerHTML = "🌫️";
    }
    if (emoji.data.weather[0].main === "Haze") {
      updateCurrWeatherEmoji.innerHTML = "🌫️";
    }
  }
  axios.get(weatherUrl).then(emojiUpdate);
}

function updateWeather() {
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let checkCurrentPos = document.querySelector(".currentLocation");
checkCurrentPos.addEventListener("click", updateWeather);

let currentDate = new Date();

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentWeekday = weekdays[currentDate.getDay()];

let updateCurrentWeekday = document.querySelector(".h2Line");
updateCurrentWeekday.innerHTML = currentWeekday;

//TIME LIVE UPDATE
let currentHour = currentDate.getHours();
let updateHour = document.querySelector(".hour");
updateHour.innerHTML = currentHour;

if (currentHour < 10) {
  currentHour = "0" + currentHour;
  updateHour.innerHTML = currentHour;
}

let currentMinutes = currentDate.getMinutes();
let updateMinutes = document.querySelector(".minutes");
updateMinutes.innerHTML = currentMinutes;

if (currentMinutes < 10) {
  currentMinutes = "0" + currentMinutes;
  updateMinutes.innerHTML = currentMinutes;
}

//CHALLENGE 1

let citySearch = document.querySelector("#city-search-bar");

function displayCity(event) {
  event.preventDefault();

  //GET INPUT SEARCH FIELD AND PUT INTO API LINK

  let inputCity = document.querySelector(".search-bar");
  let inputEntry = inputCity.value;
  console.log(inputEntry);

  let updateCityNameC = document.querySelector(".cityNameC");

  let updateCityNameT = document.querySelector(".cityNameT");

  updateCityNameC.innerHTML = inputCity.value;

  updateCityNameT.innerHTML = inputCity.value;

  let weatherApiKeySearched = "a0ec055234934001bdc16c33f46f3ecb";
  let units = "metric";
  let cnt = 7;

  let weatherSearchedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputEntry}&appid=${weatherApiKeySearched}&units=${units}&cnt=${cnt}`;
  console.log(weatherSearchedUrl);

  //GET TEMP BASED ON SEARCH INPUT FIELD

  function getTemp(temp) {
    console.log(temp);

    let updateCurrWeatherTemp = document.querySelector(".currentTempNumber");
    updateCurrWeatherTemp.innerHTML = `${Math.round(temp.data.main.temp)}°C`;

    let updateCurrWeatherFeels = document.querySelector(".currFeel");
    updateCurrWeatherFeels.innerHTML = `${Math.round(
      temp.data.main.feels_like
    )}°C`;

    let updateWindSpeedCurr = document.querySelector(".wind-speed-curr");
    updateWindSpeedCurr.innerHTML = Math.round(temp.data.wind.speed);

    let updateRainCurr = document.querySelector(".rain-curr");
    updateRainCurr.innerHTML = Math.round(temp.data.clouds.all);
    console.log(updateCurrWeatherFeels);

    let updateLowTempCurr = document.querySelector(".low-temp-curr");
    updateLowTempCurr.innerHTML = Math.round(temp.data.main.temp_min);

    let updateHighTempCurr = document.querySelector(".high-temp-curr");
    updateHighTempCurr.innerHTML = Math.round(temp.data.main.temp_max);

    let celsiusUpdateButton = `${Math.round(temp.data.main.temp)}°C`;

    //let updateTomWeatherTemp = document.querySelector(".currentTempNumberT");
    //updateTomWeatherTemp.innerHTML = `${Math.round(temp.data.main.temp)}°C`;

    let celsiusButton = document.querySelector(".celsius");
    let fahrenheitButton = document.querySelector(".fahrenheit");

    function updateCelsius() {
      let celsiusUpdate = document.querySelector(".currentTempNumber");
      celsiusUpdate.innerHTML = `${Math.round(temp.data.main.temp)}°C`;
    }

    function updateFahrenheit() {
      let fahrenheitUpdate = document.querySelector(".currentTempNumber");
      let convertFahrenheitTemp = Math.round(temp.data.main.temp) * 1.8 + 32;
      fahrenheitUpdate.innerHTML = `${Math.round(convertFahrenheitTemp)}°F`;
    }

    celsiusButton.addEventListener("click", updateCelsius);
    fahrenheitButton.addEventListener("click", updateFahrenheit);

    //TOMORROW C & F
    let celsiusButtonT = document.querySelector(".celsiusT");
    let fahrenheitButtonT = document.querySelector(".fahrenheitT");

    function updateCelsiusT() {
      let celsiusUpdate = document.querySelector(".currentTempNumberT");
      celsiusUpdate.innerHTML = "30°C";
    }

    function updateFahrenheitT() {
      let fahrenheitUpdate = document.querySelector(".currentTempNumberT");
      fahrenheitUpdate.innerHTML = "86°F";
    }

    celsiusButtonT.addEventListener("click", updateCelsiusT);
    fahrenheitButtonT.addEventListener("click", updateFahrenheitT);
  }

  axios.get(weatherSearchedUrl).then(getTemp);

  function emojiUpdateT(emoji) {
    let updatecurrWeatherEmoji = document.querySelector(".currWeatherEmoji");
    console.log(emoji.data.weather[0].main);

    if (emoji.data.weather[0].main === "Clouds") {
      updatecurrWeatherEmoji.innerHTML = "☁";
    }
    if (emoji.data.weather[0].main === "Scattered Clouds") {
      updatecurrWeatherEmoji.innerHTML = "☁";
    }
    if (emoji.data.weather[0].main === "Partly Cloudy") {
      updatecurrWeatherEmoji.innerHTML = "⛅";
    }
    if (emoji.data.weather[0].main === "Rain") {
      updatecurrWeatherEmoji.innerHTML = "🌧";
    }
    if (emoji.data.weather[0].main === "Light Rain") {
      updatecurrWeatherEmoji.innerHTML = "🌧";
    }
    if (emoji.data.weather[0].main === "Drizzle") {
      updatecurrWeatherEmoji.innerHTML = "🌧";
    }
    if (emoji.data.weather[0].main === "Thunderstorm || Light Thunderstorm") {
      updatecurrWeatherEmoji.innerHTML = "⛈";
    }
    if (emoji.data.weather[0].main === "Light Thunderstorm") {
      updatecurrWeatherEmoji.innerHTML = "⛈";
    }
    if (emoji.data.weather[0].main === "Sunny") {
      updatecurrWeatherEmoji.innerHTML = "☀";
    }
    if (emoji.data.weather[0].main === "Clear") {
      updatecurrWeatherEmoji.innerHTML = "☀";
    }
    if (emoji.data.weather[0].main === "Clear Sky") {
      updatecurrWeatherEmoji.innerHTML = "☀";
    }
    if (emoji.data.weather[0].main === "Snow") {
      updatecurrWeatherEmoji.innerHTML = "🌨";
    }
    if (emoji.data.weather[0].main === "Atmosphere") {
      updatecurrWeatherEmoji.innerHTML = "🌫️";
    }
    if (emoji.data.weather[0].main === "Fog") {
      updatecurrWeatherEmoji.innerHTML = "🌫️";
    }
    if (emoji.data.weather[0].main === "Mist") {
      updatecurrWeatherEmoji.innerHTML = "🌫️";
    }
    if (emoji.data.weather[0].main === "Haze") {
      updatecurrWeatherEmoji.innerHTML = "🌫️";
    }
  }

  axios.get(weatherSearchedUrl).then(emojiUpdateT);
}

citySearch.addEventListener("submit", displayCity);
