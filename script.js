/*
  git add .
  git commit -m "your message here"
  git push origin master
*/

const API_KEY = "eed8ea420c7911d60f8e86b3c61e0305";
const searchForm = $("#search-form");
const citiesContainer = $("#cities");
const todayContainer = $("#today");
const forecastContainer = $("#forecast");
const historyContainer = $("#history");

let data;
let history = [];

loadSearchHistory();

function loadSearchHistory() {
  history = JSON.parse(localStorage.getItem("history") || "[]");
  renderSearchHistory();
}

function renderSearchHistory() {
  historyContainer.html("");
  history.forEach((q) => {
    historyContainer.append(`
      <button onclick="getLocations('${q}', false)" class="m-1 rounded">
        ${q}
      </button>
    `);
  });
}

function addToSearchHistory(query) {
  history.unshift(query);
  if (history.length > 10) history.pop();
  localStorage.setItem("history", JSON.stringify(history));
  renderSearchHistory();
}

async function getCurrent(i) {
  citiesContainer.html("");
  const { lat, lon } = data[i];
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const currentWeather = await res.json();
  // https://openweathermap.org/weather-conditions
  let icon = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;
  console.log(`current:`, currentWeather);
  todayContainer.html(`
        <h2>Current weather</h2>
        <div id="current-temp">
            <img src="${icon}">
            Temperature: ${currentWeather.main.temp_min}&deg;C <br>
            (Feels like ${currentWeather.main.feels_like}&deg;C) <br>
            Wind: ${currentWeather.wind.speed} kph (${currentWeather.wind.deg}&deg;) <br>
            Humidity: ${currentWeather.main.humidity}%
        </div>
    `);
}

async function getForecast(i) {
  citiesContainer.html("");
  const { lat, lon } = data[i];
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const forecast = await res.json();

  forecastContainer.html(`
        <h2>Forecast</h2>
        <div id="forecast-items"
        class="row"
        >

        </div>
    `);

  const itemsContainer = $("#forecast-items");
  renderForecast(itemsContainer, forecast);
}

function renderForecast(container, forecast) {
  forecast.list.forEach((day, i) => {
    if (i % 7 !== 0) return;
    let date = dayjs(new Date(day.dt_txt)).format("ddd DD MMM");
    let icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
    console.log(date);
    container.append(`
            <div class="forecast-item col-lg-3 col-md-4 col-sm-6 p-1">
                <h3>${date}</h3>
                <img src="${icon}">
                Temperature: ${day.main.temp_min}&deg;C <br>
                (Feels like ${day.main.feels_like}&deg;C) <br>
                Wind: ${day.wind.speed} kph (${day.wind.deg}&deg;) <br>
                Humidity: ${day.main.humidity}%
            </div>
        `);
  });
}

async function getLocations(city, addToHistory = true) {
  if (addToHistory) addToSearchHistory(city);
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${API_KEY}`
  );
  data = await res.json();

  // empty the forecast/city containers
  todayContainer.html("");
  forecastContainer.html("");
  citiesContainer.html("");

  data.forEach((loc, i) => {
    citiesContainer.append(`
            <div class="city">
                <div>${loc.name}, ${loc.state}, ${loc.country}</div>
                <button onclick="getCurrent(${i})">
                    Get current weather
                </button>
                <button onclick="getForecast(${i})">
                    Get forecast
                </button>
            </div>
        `);
  });
}

searchForm.on("submit", (e) => {
  e.preventDefault();
  const city = e.target.city.value;
  getLocations(city);
});
