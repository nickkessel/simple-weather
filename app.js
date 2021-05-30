function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let feels = document.getElementById("feels");
  let location = document.getElementById("location");
  let minmax = document.getElementById("minmax");
  let stats = document.getElementById("stats");
  let body = document.getElementById("body");
  let futurecast1 = document.getElementById("futurecast1");

  let api = "https://api.openweathermap.org/data/2.5/onecall";
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
    "&units=imperial"
    ;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //current vars
        let c_temp = data.current.temp;
        let c_cond = data.current.weather[0].main;
        let c_feels = data.current.feels_like;
        let c_pressure = data.current.pressure;
        let c_uv = data.current.uvi;
        let c_cloudcover = data.current.clouds;
        let c_humid = data.current.humidity;
        let c_wind = data.current.wind_speed;
        let c_windgust = data.current.wind_gust;
        let c_dewpoint = data.current.dew_point;

        //hourly vars


        //day 0 vars
        let d_max0 = data.daily[0].temp.max;
        let d_min0 = data.daily[0].temp.min;

        //day 1 vars
        let d_max1 = data.daily[1].temp.max;
        let d_min1 = data.daily[1].temp.min;
        let d_pop1 = data.daily[1].pop;

        //day 2 vars
        let d_max2 = data.daily[2].temp.max;
        let d_min2 = data.daily[2].temp.min;

        //day 3 vars
        let d_max3 = data.daily[3].temp.max;
        let d_min3 = data.daily[3].temp.min;

        //day 4 vars
        let d_max4 = data.daily[4].temp.max;
        let d_min4 = data.daily[4].temp.min;

        //day 5 vars
        let d_max5 = data.daily[5].temp.max;
        let d_min5 = data.daily[5].temp.min;

        temperature.innerHTML = "Right now, it is " + Math.round(c_temp) + "°. It feels like " + Math.round(c_feels) + "°.";
        description.innerHTML = c_cond;
        minmax.innerHTML = "The high today is " + Math.round(d_max0) + ", the low is " + Math.round(d_min0) + ", and the dew point is " + Math.round(c_dewpoint) + ".";
        stats.innerHTML =
        "Humidity: " + c_humid + "%" + "<br>"
         + "Pressure: " + c_pressure + "mb" + "<br>"
         + "Wind speed: " + Math.round(c_wind) + " mph" + "<br>"
         + "Wind gusts: " + Math.round(c_windgust) + " mph" + "<br>"
         + "Cloud cover: " + c_cloudcover + "%" + "<br>"
         + "UV Index: " + Math.round(c_uv) + "<br>"
         ;

         futurecast1.innerHTML =
         "High: " + Math.round(d_max1) + "°" + "<br>"
         + "Low: " + Math.round(d_min1) + "°" + "<br>"
         + "Chance of Rain: " + d_pop1 + "%" + "<br>"
         ;

        if(c_cond = "Clouds") {
          body.style.background= "silver";
        } else if(c_cond = "Rain") {
          body.style.background = "lightskyblue";
        } else {
          body.style.background = "red";
        }
      });
  }
  function error() {
    console.log("error");
  }
}




getWeather()

/*INFO time!
a "c" before a variable means current. example:"c_temp, c_cond"
a "h" before a variable means hourly. example:"h[0]_temp, h[0]_cond" the number in brackets is the amount of hours out the forecast is
a "d" before a variable means daily. example:"d[0]_temp, d[0]_cond" the number in brackets is the amount of days out the forecast is
day0=today
*/
