console.log(axios);

// GET LOCATION BUTTON FUNCTION

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

    let updateWeatherStatus = document.querySelector(".weather-status");
    updateWeatherStatus.innerHTML = temp.data.weather[0].main;

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
      celsiusUpdate.innerHTML = `${Math.round(temp.data.main.temp)}°C`;
    }

    function updateFahrenheitT() {
      let fahrenheitUpdate = document.querySelector(".currentTempNumberT");
      let convertFahrenheitTemp = Math.round(temp.data.main.temp) * 1.8 + 32;
      fahrenheitUpdate.innerHTML = `${Math.round(convertFahrenheitTemp)}°F`;
    }

    celsiusButtonT.addEventListener("click", updateCelsiusT);
    fahrenheitButtonT.addEventListener("click", updateFahrenheitT);
  }

  axios.get(weatherUrl).then(getTemp);

  //UPDATE EMOJI BASED ON WEATHER STATUS IN API CURRENT LOCATION BUTTON

  function emojiUpdate(emoji) {
    let updateCurrWeatherEmoji = document.querySelector("#currWeatherEmoji");

    updateCurrWeatherEmoji.innerHTML = emoji.data.weather[0].icon;
    let updateEmojiIcon = emoji.data.weather[0].icon;
    updateCurrWeatherEmoji.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${updateEmojiIcon}@2x.png`
    );

    updateCurrWeatherEmoji.setAttribute("alt", emoji.data.weather[0].main);
  }
  axios.get(weatherUrl).then(emojiUpdate);
}

function updateWeather() {
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let checkCurrentPos = document.querySelector(".currentLocation");
checkCurrentPos.addEventListener("click", updateWeather);

//GET AND FORMAT CURRENT DATE

let currentDate = new Date();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonth = months[currentDate.getMonth()];

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

let currentDay = currentDate.getDate();

let formatDate = `${currentWeekday} ${currentMonth} ${currentDay}`;
console.log(formatDate);

let updateCurrentWeekday = document.querySelector(".h2Line");
updateCurrentWeekday.innerHTML = formatDate;

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
    let updateWeatherStatus = document.querySelector(".weather-status");
    updateWeatherStatus.innerHTML = temp.data.weather[0].main;

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

    //CURRENT C & F BUTTONS

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

    //TOMORROW C & F BUTTONS

    let celsiusButtonT = document.querySelector(".celsiusT");
    let fahrenheitButtonT = document.querySelector(".fahrenheitT");

    function updateCelsiusT() {
      let celsiusUpdate = document.querySelector(".currentTempNumberT");
      celsiusUpdate.innerHTML = `${Math.round(temp.data.main.temp)}°C`;
    }

    function updateFahrenheitT() {
      let fahrenheitUpdate = document.querySelector(".currentTempNumberT");
      let convertFahrenheitTemp = Math.round(temp.data.main.temp) * 1.8 + 32;
      fahrenheitUpdate.innerHTML = `${Math.round(convertFahrenheitTemp)}°F`;
    }

    celsiusButtonT.addEventListener("click", updateCelsiusT);
    fahrenheitButtonT.addEventListener("click", updateFahrenheitT);
  }

  axios.get(weatherSearchedUrl).then(getTemp);

  //UPDATE EMOJI TO BE AUTO UPDATE WITH DATA IN API

  function emojiUpdateT(emoji) {
    let updatecurrWeatherEmoji = document.querySelector("#currWeatherEmoji");
    console.log(emoji.data.weather[0].main);

    updatecurrWeatherEmoji.innerHTML = emoji.data.weather[0].icon;
    let updateEmojiIcon = emoji.data.weather[0].icon;
    updatecurrWeatherEmoji.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${updateEmojiIcon}@2x.png`
    );

    updatecurrWeatherEmoji.setAttribute("alt", emoji.data.weather[0].main);
  }

  axios.get(weatherSearchedUrl).then(emojiUpdateT);
}

citySearch.addEventListener("submit", displayCity);
