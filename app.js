function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let feels = document.getElementById("feels");
  let location = document.getElementById("location");
  let minmax = document.getElementById("minmax");

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
        temperature.innerHTML = "Right now, in "+ data.name + ", it is " + Math.round(temp) + "° F. It feels like " + Math.round(data.main.feels_like) + "° F.";
        description.innerHTML = data.weather[0].main;
        minmax.innerHTML = "The high today is " + data.main.temp_max + ", and the low is " + data.main.temp_min + ".";
      });
  }
  function error() {
    console.log("error");
  }
}
getWeather()
