console.log(axios);

// GET LOCATION BUTTON FUNCTION

function getCurrentLocation(response) {
  console.log(response);
  let weatherApiKey = "a0ec055234934001bdc16c33f46f3ecb";

  let latitude = response.coords.latitude;
  console.log(latitude);
  let longitude = response.coords.longitude;
  let units = "metric";
  let cnt = 8;

  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=${units}`;
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&cnt=${cnt}&units=${units}`;
  console.log(weatherUrl);
  console.log(forecastUrl);

  //GET TEMP BASED ON COORDINATES

  //CURRENT TEMPS

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

    //TOMORROW TEMPS FORECAST

    function getForecast(data) {
      console.log(data);

      let updateTomWeatherTemp = document.querySelector(".currentTempNumberT");
      updateTomWeatherTemp.innerHTML = `${Math.round(
        data.data.list[0].main.temp
      )}°C`;

      let updateTomFeelsTemp = document.querySelector(".tom-Feel");
      updateTomFeelsTemp.innerHTML = `${Math.round(
        data.data.list[0].main.feels_like
      )}°C`;

      let updateTomWindSpeed = document.querySelector(".tom-wind-speed");
      updateTomWindSpeed.innerHTML = Math.round(data.data.list[0].wind.speed);

      let updateRainfall = document.querySelector(".tom-rainfall");
      updateRainfall.innerHTML = Math.trunc(data.data.list[0].pop * 100);

      let updateTomLowTemp = document.querySelector(".tom-low-temp");
      updateTomLowTemp.innerHTML = Math.round(data.data.list[0].main.temp_min);

      let updateTomHighTemp = document.querySelector(".tom-high-temp");
      updateTomHighTemp.innerHTML = Math.round(data.data.list[0].main.temp_max);

      //TOMORROW C & F
      let celsiusButtonT = document.querySelector(".celsiusT");
      let fahrenheitButtonT = document.querySelector(".fahrenheitT");

      function updateCelsiusT() {
        let celsiusUpdate = document.querySelector(".currentTempNumberT");
        celsiusUpdate.innerHTML = `${Math.round(
          data.data.list[0].main.temp
        )}°C`;
      }

      function updateFahrenheitT() {
        let fahrenheitUpdate = document.querySelector(".currentTempNumberT");
        let convertFahrenheitTemp =
          Math.round(data.data.list[0].main.temp) * 1.8 + 32;
        fahrenheitUpdate.innerHTML = `${Math.round(convertFahrenheitTemp)}°F`;
      }

      celsiusButtonT.addEventListener("click", updateCelsiusT);
      fahrenheitButtonT.addEventListener("click", updateFahrenheitT);
    }

    axios.get(forecastUrl).then(getForecast);

    function updateFahrenheit() {
      let fahrenheitUpdate = document.querySelector(".currentTempNumber");
      let convertFahrenheitTemp = Math.round(temp.data.main.temp) * 1.8 + 32;
      fahrenheitUpdate.innerHTML = `${Math.round(convertFahrenheitTemp)}°F`;
    }

    celsiusButton.addEventListener("click", updateCelsius);
    fahrenheitButton.addEventListener("click", updateFahrenheit);
  }

  axios.get(weatherUrl).then(getTemp);

  //UPDATE EMOJI BASED ON WEATHER STATUS IN API CURRENT LOCATION BUTTON

  //UPDATE CURRENT
  function emojiUpdate(emoji) {
    let updateCurrWeatherEmoji = document.querySelector("#curr-weather-emoji");

    updateCurrWeatherEmoji.innerHTML = emoji.data.weather[0].icon;
    let updateEmojiIcon = emoji.data.weather[0].icon;
    updateCurrWeatherEmoji.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${updateEmojiIcon}@2x.png`
    );

    updateCurrWeatherEmoji.setAttribute("alt", emoji.data.weather[0].main);
  }

  //UPDATE TOMORROW

  function emojiUpdateT(emoji) {
    let updateTomWeatherEmoji = document.querySelector("#tom-weather-emoji");
    console.log(emoji.data.weather[0].main);

    updateTomWeatherEmoji.innerHTML = emoji.data.weather[0].icon;
    let updateEmojiIcon = emoji.data.weather[0].icon;
    updateTomWeatherEmoji.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${updateEmojiIcon}@2x.png`
    );

    updateTomWeatherEmoji.setAttribute("alt", emoji.data.weather[0].main);
  }

  axios.get(weatherUrl).then(emojiUpdate);
  axios.get(weatherUrl).then(emojiUpdateT);
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

  let weatherSearchedUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputEntry}&appid=${weatherApiKeySearched}&units=${units}`;
  let forecastSearchedUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${inputEntry}&appid=${weatherApiKeySearched}&units=${units}&cnt=${cnt}`;
  console.log(weatherSearchedUrl);
  console.log(forecastSearchedUrl);

  //GET TEMP BASED ON SEARCH INPUT FIELD

  //CURRENT TEMPS
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
  }

  axios.get(weatherSearchedUrl).then(getTemp);

  //TOMORROW TEMPS SEARCHED

  function getTomTemps(data) {
    console.log(data);

    let updateTomWeatherTemp = document.querySelector(".currentTempNumberT");
    updateTomWeatherTemp.innerHTML = `${Math.round(
      data.data.list[0].main.temp
    )}°C`;

    let updateTomFeelsTemp = document.querySelector(".tom-Feel");
    updateTomFeelsTemp.innerHTML = `${Math.round(
      data.data.list[0].main.feels_like
    )}°C`;

    let updateTomWindSpeed = document.querySelector(".tom-wind-speed");
    updateTomWindSpeed.innerHTML = Math.round(data.data.list[0].wind.speed);

    let updateRainfall = document.querySelector(".tom-rainfall");
    updateRainfall.innerHTML = Math.trunc(data.data.list[0].pop * 100);
    console.log(updateRainfall);

    let updateTomLowTemp = document.querySelector(".tom-low-temp");
    updateTomLowTemp.innerHTML = Math.round(data.data.list[0].main.temp_min);

    let updateTomHighTemp = document.querySelector(".tom-high-temp");
    updateTomHighTemp.innerHTML = Math.round(data.data.list[0].main.temp_max);

    //TOMORROW C & F BUTTONS

    let celsiusButtonT = document.querySelector(".celsiusT");
    let fahrenheitButtonT = document.querySelector(".fahrenheitT");

    function updateCelsiusT() {
      let celsiusUpdateT = document.querySelector(".currentTempNumberT");
      celsiusUpdateT.innerHTML = `${Math.round(data.data.list[0].main.temp)}°C`;
      console.log(celsiusUpdateT);
    }

    function updateFahrenheitT() {
      let fahrenheitUpdateT = document.querySelector(".currentTempNumberT");
      let convertFahrenheitTemp =
        Math.round(data.data.list[0].main.temp) * 1.8 + 32;
      fahrenheitUpdateT.innerHTML = `${Math.round(convertFahrenheitTemp)}°F`;
    }

    celsiusButtonT.addEventListener("click", updateCelsiusT);
    fahrenheitButtonT.addEventListener("click", updateFahrenheitT);
  }

  axios.get(forecastSearchedUrl).then(getTomTemps);

  //UPDATE CURRENT EMOJI WEATHER SEARCHED

  function emojiUpdate(emoji) {
    let updateCurrWeatherEmoji = document.querySelector("#curr-weather-emoji");

    updateCurrWeatherEmoji.innerHTML = emoji.data.weather[0].icon;
    let updateEmojiIcon = emoji.data.weather[0].icon;
    updateCurrWeatherEmoji.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${updateEmojiIcon}@2x.png`
    );

    updateCurrWeatherEmoji.setAttribute("alt", emoji.data.weather[0].main);
  }

  //UPDATE EMOJI TO BE AUTO UPDATE WITH DATA IN API SEARCHED

  function emojiUpdateT(emoji) {
    let updateTomWeatherEmoji = document.querySelector("#tom-weather-emoji");
    console.log(emoji.data.weather[0].main);

    updateTomWeatherEmoji.innerHTML = emoji.data.weather[0].icon;
    let updateEmojiIcon = emoji.data.weather[0].icon;
    updateTomWeatherEmoji.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${updateEmojiIcon}@2x.png`
    );

    updateTomWeatherEmoji.setAttribute("alt", emoji.data.weather[0].main);
  }

  axios.get(weatherSearchedUrl).then(emojiUpdateT);
  axios.get(weatherSearchedUrl).then(emojiUpdate);
}

citySearch.addEventListener("submit", displayCity);

//DISPLAY FORECAST

function displayForecast() {
  let forecast = document.querySelector("#forecast");

  let forecastHtml = `<div class="row">`; //Opened a div so need to close it to prevent errors

  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="col day-container forecast-font">
                ${day}
                <p class="status-font">SUNNY</p>
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="Rain"
                  id="forecast-icon"
                />
                <p class="forecast-temp-num">30°C</p>
                <p class="status-font">HIGH</p>
                <p class="forecast-temp-num">12°C</p>
                <p class="status-font">LOW</p>
        </div>`;
  });
  forecastHtml = forecastHtml + `</div>`; //Need to close the div opened at the beginning
  forecast.innerHTML = forecastHtml;
}

displayForecast();
