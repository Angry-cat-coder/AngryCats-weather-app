function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `  ${temperature} ℃ `;
  let mainCity = document.querySelector("#mainCity");
  mainCity.innerHTML = response.data.name;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity} %`;
  let winD = document.querySelector("#wind");
  winD.innerHTML = ` Windspeed: ${response.data.wind.speed} km/h`;
  let currentSky = document.querySelector("#Current-sky");
  currentSky.innerHTML = `${response.data.weather[0].description}`;
}
let key = "a2c12ca339db823fd39c58b7ef7264d1";
let city_name = "Kyiv";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&units=metric`;

axios.get(url).then(showTemperature);
