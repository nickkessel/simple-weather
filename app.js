function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let feels = document.getElementById("feels");
  let location = document.getElementById("location");
  let minmax = document.getElementById("minmax");
  let stats = document.getElementById("stats");
  let body = document.getElementById("body");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "9eb845f6ddd80a3a7314e134d5c9facb";

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    let url =
    api +
    "?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    apiKey +
    "&units=imperial";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let temp = data.main.temp;
        let cond = data.weather[0].main;
        temperature.innerHTML = "Right now, in "+ data.name + ", it is " + Math.round(temp) + "° F. It feels like " + Math.round(data.main.feels_like) + "° F.";
        description.innerHTML = cond;
        minmax.innerHTML = "The high today is " + Math.round(data.main.temp_max) + ", and the low is " + Math.round(data.main.temp_min) + ".";
        stats.innerHTML = "Humidity: " + data.main.humidity + "%" + "<br>" + "Pressure: " + data.main.pressure + "mb" + "<br>" + "Wind speed: " + Math.round(data.wind.speed) + " mph" + "<br>" + "Wind gusts: " + Math.round(data.wind.gust) + " mph";
        if(cond = "Clouds") {
          document.getElementById("body").style.background= "silver";
        }
        else if(cond = "Rain") {
          document.getElementById("body").style.background = "blue";
        }
      });
  }
  function error() {
    console.log("error");
  }
}
getWeather()
