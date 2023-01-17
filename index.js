const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2521e380b0mshb6d8a21ac251c87p189ff2jsn511f3313cf58",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) =>{
    cityName.innerHTML = city;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    max_temp.innerHTML = response.max_temp
    min_temp.innerHTML = response.min_temp
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
    temp.innerHTML = response.temp
    wind_degrees.innerHTML = response.wind_degrees
    wind_speed.innerHTML = response.wind_speed
  })
  .catch((err) => console.error(err));
}

document.getElementById("submit").addEventListener("click", (event)=>{
    event.preventDefault();
    if (city.value !== ""){
    getWeather(city.value);
    const a = new Date();
    console.log(a);
    let d = a.getDay();
    let m = a.getMonth();
    let y = a.getFullYear();
   time.innerHTML = d + "." + m  + "." + y;
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let nday = weekday[d];
   crDay.innerHTML = nday;
    }
    else{
        alert("Enter City")
    }
});
