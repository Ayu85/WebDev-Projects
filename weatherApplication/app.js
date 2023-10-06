// const yourWeatherButton = document.getElementById("your_weather");
// const searchWeatherButton = document.getElementById("search_weather");
// const place = document.getElementById("place");
// const weatherState = document.getElementById("weather_state");
// const temp = document.getElementById("temperature");
// const weatherStateImage = document.getElementById("weather_state_image");
// const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
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
    console.log(err);
  }
}
getWeatherData();
