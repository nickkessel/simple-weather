function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let feels = document.getElementById("feels");
  let location = document.getElementById("location");
  let minmax = document.getElementById("minmax");
  let stats = document.getElementById("stats");
  let body = document.getElementById("body");

  let future_head1 = document.getElementById("future-head1");
  let futurecast1 = document.getElementById("futurecast1");
  let future_head2 = document.getElementById("future-head2");
  let futurecast2 = document.getElementById("futurecast2");
  let future_head3 = document.getElementById("future-head3");
  let futurecast3 = document.getElementById("futurecast3");
  let future_head4 = document.getElementById("future-head4");
  let futurecast4 = document.getElementById("futurecast4");
  let future_head5 = document.getElementById("future-head5");
  let futurecast5 = document.getElementById("futurecast5");
  let hourhead1 = document.getElementById("hourhead1");

  let hourcontent1 = document.getElementById("hourcontent1");
  let hourhead2 = document.getElementById("hourhead2");
  let hourcontent2 = document.getElementById("hourcontent2");
  let hourhead3 = document.getElementById("hourhead3");
  let hourcontent3 = document.getElementById("hourcontent3");
  let hourhead4 = document.getElementById("hourhead4");
  let hourcontent4 = document.getElementById("hourcontent4");
  let hourhead5 = document.getElementById("hourhead5");
  let hourcontent5 = document.getElementById("hourcontent5");
  let hourhead6 = document.getElementById("hourhead6");
  let hourcontent6 = document.getElementById("hourcontent6");
  let hourhead7 = document.getElementById("hourhead7");
  let hourcontent7 = document.getElementById("hourcontent7");

  let addhourcontent1 = document.getElementById("addhourcontent1");
  let addhourcontent2 = document.getElementById("addhourcontent2");
  let addhourcontent3 = document.getElementById("addhourcontent3");
  let addhourcontent4 = document.getElementById("addhourcontent4");
  let addhourcontent5 = document.getElementById("addhourcontent5");
  let addhourcontent6 = document.getElementById("addhourcontent6");
  let addhourcontent7 = document.getElementById("addhourcontent7");


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
        let c_cond = data.current.weather[0].description;
        let c_feels = data.current.feels_like;
        let c_pressure = data.current.pressure;
        let c_uv = data.current.uvi;
        let c_cloudcover = data.current.clouds;
        let c_humid = data.current.humidity;
        let c_wind = data.current.wind_speed;
        let c_windgust = data.current.wind_gust;
        let c_dewpoint = data.current.dew_point;

        //hourly vars
        //hour 0 vars ( current)
        let h_pop0 = data.hourly[0].pop;

        //hour 1 vars
        let h_temp1 = data.hourly[1].temp;
        let h_feelslike1 = data.hourly[1].feels_like;
        let h_pop1 = data.hourly[1].pop;
        let h_wind1 = data.hourly[1].wind_speed;
        let h_clouds1 = data.hourly[1].clouds;
        let h_humid1 = data.hourly[1].humidity;
        let h_date_uf1 = new Date(data.hourly[1].dt * 1000);
        let h_date1 = (" "+ h_date_uf1.getHours()+
          ":"+h_date_uf1.getMinutes()+
          h_date_uf1.getSeconds());

        //hour 2 vars
        let h_temp2 = data.hourly[2].temp;
        let h_feelslike2 = data.hourly[2].feels_like;
        let h_pop2 = data.hourly[2].pop;
        let h_wind2 = data.hourly[2].wind_speed;
        let h_clouds2 = data.hourly[2].clouds;
        let h_humid2 = data.hourly[2].humidity;
        let h_date_uf2 = new Date(data.hourly[2].dt * 1000);
        let h_date2 = (" "+ h_date_uf2.getHours()+
          ":"+h_date_uf2.getMinutes()+
          h_date_uf2.getSeconds());

        //hour 3 vars
        let h_temp3 = data.hourly[3].temp;
        let h_feelslike3 = data.hourly[3].feels_like;
        let h_pop3 = data.hourly[3].pop;
        let h_wind3 = data.hourly[3].wind_speed;
        let h_clouds3 = data.hourly[3].clouds;
        let h_humid3 = data.hourly[3].humidity;
        let h_date_uf3 = new Date(data.hourly[3].dt * 1000);
        let h_date3 = (" "+ h_date_uf3.getHours()+
          ":"+h_date_uf3.getMinutes()+
          h_date_uf3.getSeconds());

        //hour 4 vars
        let h_temp4 = data.hourly[4].temp;
        let h_feelslike4 = data.hourly[4].feels_like;
        let h_pop4 = data.hourly[4].pop;
        let h_wind4 = data.hourly[4].wind_speed;
        let h_clouds4 = data.hourly[4].clouds;
        let h_humid4 = data.hourly[4].humidity;
        let h_date_uf4 = new Date(data.hourly[4].dt * 1000);
        let h_date4 = (" "+ h_date_uf4.getHours()+
          ":"+h_date_uf4.getMinutes()+
          h_date_uf4.getSeconds());

        //hour 5 vars
        let h_temp5 = data.hourly[5].temp;
        let h_feelslike5 = data.hourly[5].feels_like;
        let h_pop5 = data.hourly[5].pop;
        let h_wind5 = data.hourly[5].wind_speed;
        let h_clouds5 = data.hourly[5].clouds;
        let h_humid5 = data.hourly[5].humidity;
        let h_date_uf5 = new Date(data.hourly[5].dt * 1000);
        let h_date5 = (" "+ h_date_uf5.getHours()+
          ":"+h_date_uf5.getMinutes()+
          h_date_uf5.getSeconds());


        //hour 6 vars
        let h_temp6 = data.hourly[6].temp;
        let h_feelslike6 = data.hourly[6].feels_like;
        let h_pop6 = data.hourly[6].pop;
        let h_wind6 = data.hourly[6].wind_speed;
        let h_clouds6 = data.hourly[6].clouds;
        let h_humid6 = data.hourly[6].humidity;
        let h_date_uf6 = new Date(data.hourly[6].dt * 1000);
        let h_date6 = (" "+ h_date_uf6.getHours()+
          ":"+h_date_uf6.getMinutes()+
          h_date_uf6.getSeconds());

        //hour 7 vars
        let h_temp7 = data.hourly[7].temp;
        let h_feelslike7 = data.hourly[7].feels_like;
        let h_pop7 = data.hourly[7].pop;
        let h_wind7 = data.hourly[7].wind_speed;
        let h_clouds7 = data.hourly[7].clouds;
        let h_humid7 = data.hourly[7].humidity;
        let h_date_uf7 = new Date(data.hourly[7].dt * 1000);
        let h_date7 = (" "+ h_date_uf7.getHours()+
          ":"+h_date_uf7.getMinutes()+
          h_date_uf7.getSeconds());
        //day 0 vars
        let d_max0 = data.daily[0].temp.max;
        let d_min0 = data.daily[0].temp.min;
        let d_pop0 = data.daily[0].pop;

        //day 1 vars
        let d_max1 = data.daily[1].temp.max;
        let d_min1 = data.daily[1].temp.min;
        let d_pop1 = data.daily[1].pop;
        let d_date1 = new Date(data.daily[1].dt * 1000);

        //day 2 vars
        let d_max2 = data.daily[2].temp.max;
        let d_min2 = data.daily[2].temp.min;
        let d_pop2 = data.daily[2].pop;
        let d_date_uf2 = new Date(data.daily[2].dt * 1000);
        let d_date2 = (d_date_uf2.getMonth()+1)+
          "/"+(d_date_uf2.getDate()+
          "/"+d_date_uf2.getFullYear());

        //day 3 vars
        let d_max3 = data.daily[3].temp.max;
        let d_min3 = data.daily[3].temp.min;
        let d_pop3 = data.daily[3].pop;
        let d_date_uf3 = new Date(data.daily[3].dt * 1000);
        let d_date3 = (d_date_uf3.getMonth()+1)+
          "/"+(d_date_uf3.getDate()+
          "/"+d_date_uf3.getFullYear());

        //day 4 vars
        let d_max4 = data.daily[4].temp.max;
        let d_min4 = data.daily[4].temp.min;
        let d_pop4 = data.daily[4].pop;
        let d_date_uf4 = new Date(data.daily[4].dt * 1000);
        let d_date4 = (d_date_uf4.getMonth()+1)+
          "/"+(d_date_uf4.getDate()+
          "/"+d_date_uf4.getFullYear());

        //day 5 vars
        let d_max5 = data.daily[5].temp.max;
        let d_min5 = data.daily[5].temp.min;
        let d_pop5 = data.daily[5].pop;
        let d_date_uf5 = new Date(data.daily[5].dt * 1000);
        let d_date5 = (d_date_uf5.getMonth()+1)+
          "/"+(d_date_uf5.getDate()+
          "/"+d_date_uf5.getFullYear());

          //main stuff
        temperature.innerHTML = "Right now, it is " + Math.round(c_temp) + "°. It feels like " + Math.round(c_feels) + "°.";
        description.innerHTML = c_cond;
        minmax.innerHTML = "The high today is " + Math.round(d_max0) + ", the low is " + Math.round(d_min0) + ", and the dew point is " + Math.round(c_dewpoint) + ".";
        stats.innerHTML =
        "Humidity: " + c_humid + "%" + "<br>"
         + "Chance of Rain: " + (h_pop0 * 100) + "%" + "<br>"
         + "Pressure: " + c_pressure + "mb" + "<br>"
         + "Wind speed: " + Math.round(c_wind) + " mph" + "<br>"
         + "Wind gusts: " + Math.round(c_windgust) + " mph" + "<br>"
         + "Cloud cover: " + c_cloudcover + "%" + "<br>"
         + "UV Index: " + Math.round(c_uv) + "<br>"
         ;
         //hourly date time headers
         hourhead1.innerHTML = h_date1;

         hourhead2.innerHTML = h_date2;

         hourhead3.innerHTML = h_date3;

         hourhead4.innerHTML = h_date4;

         hourhead5.innerHTML = h_date5;

         hourhead6.innerHTML = h_date6;

         hourhead7.innerHTML = h_date7;

         //hourly description
         hourcontent1.innerHTML =
         Math.round(h_temp1)
         + "° | Feels like: " + Math.round(h_feelslike1)
         + "° | Wind: " + Math.round(h_wind1) + "mph"
         + " | Chance of rain: " + Math.round((h_pop1 * 100)) + "%"
         ;

         hourcontent2.innerHTML =
         Math.round(h_temp2)
         + "° | Feels like: " + Math.round(h_feelslike2)
         + "° | Wind: " + Math.round(h_wind2) + "mph"
         + " | Chance of rain: " + Math.round((h_pop2 * 100)) + "%"
         ;

         hourcontent3.innerHTML =
         Math.round(h_temp3)
         + "° | Feels like: " + Math.round(h_feelslike3)
         + "° | Wind: " + Math.round(h_wind3) + "mph"
         + " | Chance of rain: " + Math.round((h_pop3 * 100)) + "%"
         ;

         hourcontent4.innerHTML =
         Math.round(h_temp4)
         + "° | Feels like: " + Math.round(h_feelslike4)
         + "° | Wind: " + Math.round(h_wind4) + "mph"
         + " | Chance of rain: " + Math.round((h_pop4 * 100)) + "%"
         ;

         hourcontent5.innerHTML =
         Math.round(h_temp5)
         + "° | Feels like: " + Math.round(h_feelslike5)
         + "° | Wind: " + Math.round(h_wind5) + "mph"
         + " | Chance of rain: " + Math.round((h_pop5 * 100)) + "%"
         ;

         hourcontent6.innerHTML =
         Math.round(h_temp6)
         + "° | Feels like: " + Math.round(h_feelslike6)
         + "° | Wind: " + Math.round(h_wind6) + "mph"
         + " | Chance of rain: " + Math.round((h_pop6 * 100)) + "%"
         ;

         hourcontent7.innerHTML =
         Math.round(h_temp7)
         + "° | Feels like: " + Math.round(h_feelslike7)
         + "° | Wind: " + Math.round(h_wind7) + "mph"
         + " | Chance of rain: " + Math.round((h_pop7 * 100)) + "%"
         ;

         //hourly additional stuff
         addhourcontent1.innerHTML =
         "Cloud cover: " + h_clouds1 + "%"
         + " | Humidity: " + h_humid1 + "%"
         ;

         addhourcontent2.innerHTML =
         "Cloud cover: " + h_clouds2 + "%"
         + " | Humidity: " + h_humid2 + "%"
         ;

         addhourcontent3.innerHTML =
         "Cloud cover: " + h_clouds3 + "%"
         + " | Humidity: " + h_humid3 + "%"
         ;

         addhourcontent4.innerHTML =
         "Cloud cover: " + h_clouds4 + "%"
         + " | Humidity: " + h_humid4 + "%"
         ;

         addhourcontent5.innerHTML =
         "Cloud cover: " + h_clouds5 + "%"
         + " | Humidity: " + h_humid5 + "%"
         ;

         addhourcontent6.innerHTML =
         "Cloud cover: " + h_clouds6 + "%"
         + " | Humidity: " + h_humid6 + "%"
         ;

         addhourcontent7.innerHTML =
         "Cloud cover: " + h_clouds7 + "%"
         + " | Humidity: " + h_humid7 + "%"
         ;

         //future description
         futurecast1.innerHTML =
         "High: " + Math.round(d_max1) + "°" + "  "
         + "Low: " + Math.round(d_min1) + "°" + "<br>"
         + "Chance of Rain: " + Math.round((d_pop1 * 100)) + "%" + "<br>"
         ;

         futurecast2.innerHTML =
         "High: " + Math.round(d_max2) + "°" + "  "
         + "Low: " + Math.round(d_min2) + "°" + "<br>"
         + "Chance of Rain: " + Math.round((d_pop2 * 100)) + "%" + "<br>"
         ;

         futurecast3.innerHTML =
         "High: " + Math.round(d_max3) + "°" + "  "
         + "Low: " + Math.round(d_min3) + "°" + "<br>"
         + "Chance of Rain: " + Math.round((d_pop3 * 100)) + "%" + "<br>"
         ;

         futurecast4.innerHTML =
         "High: " + Math.round(d_max4) + "°" + "  "
         + "Low: " + Math.round(d_min4) + "°" + "<br>"
         + "Chance of Rain: " + Math.round((d_pop4 * 100)) + "%" + "<br>"
         ;

         futurecast5.innerHTML =
         "High: " + Math.round(d_max5) + "°" + "  "
         + "Low: " + Math.round(d_min5) + "°" + "<br>"
         + "Chance of Rain: " + Math.round((d_pop5 * 100)) + "%" + "<br>"
         ;

         //future headers and dates
         future_head2.innerHTML = d_date2;

         future_head3.innerHTML = d_date3;

         future_head4.innerHTML = d_date4;

         future_head5.innerHTML = d_date5;

      });
  }
  function error() {
    console.log("oopises! no workie :/ me angy");
  }
}




getWeather()

/*INFO time!
a "c" before a variable means current. example:"c_temp, c_cond"
a "h" before a variable means hourly. example:"h[0]_temp, h[0]_cond" the number in brackets is the amount of hours out the forecast is
a "d" before a variable means daily. example:"d[0]_temp, d[0]_cond" the number in brackets is the amount of days out the forecast is
day0=today
*/
