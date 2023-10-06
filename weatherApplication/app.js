const yourWeatherButton = document.getElementById("your_weather");
const searchWeatherButton = document.getElementById("search_weather");
const locationSearchContainer = document.getElementById(
  "location_search_container"
);
const yourWeatherContainer = document.getElementById("your_weather_container");
// const place = document.getElementById("place");
// const weatherState = document.getElementById("weather_state");
// const temp = document.getElementById("temperature");
// const weatherStateImage = document.getElementById("weather_state_image");
// const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
function showSearchWeatherUI() {
  locationSearchContainer.classList.remove("hidden");
}
function hideSearchWeatherUT() {
  locationSearchContainer.classList.add("hidden");
}
function showYourWeatherUI() {
  yourWeatherContainer.classList.remove("hidden");
}
function hideYourWeatherUI() {
  yourWeatherContainer.classList.add("hidden");
}
searchWeatherButton.addEventListener("click", () => {
  searchWeatherButton.classList.add("currentTab")
  yourWeatherButton.classList.remove("currentTab")

  showSearchWeatherUI();
  hideYourWeatherUI();
});
yourWeatherButton.addEventListener("click", () => {
  yourWeatherButton.classList.add("currentTab")
  searchWeatherButton.classList.remove("currentTab");
  hideSearchWeatherUT();
  showYourWeatherUI();

});
const weatherCondition = document.getElementById("weatherCondition");
let cityname = " mumbai";
let APIkey = "853a4c045218afcc786fa370edfef2ff";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`;

async function getWeatherData() {
  //this function brings the weather deatils from the api server
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } catch (err) {
    console.log("Error: ", err);
  }
}
getWeatherData();
