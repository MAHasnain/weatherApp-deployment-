/*//  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const BASEURL = "https://weather-by-api-ninjas.p.rapidapi.com";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dd382e2445mshfcc998614f4cf5bp1cbad7jsn6609d84781ae',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const getWeather = (city) => {
  cityName.innerHTML = city;
  
  fetch (`${BASEURL}/v1/weather?city=${city}`, options)
	.then (response => response.json())
	.then((response) => {

    console.log(response)
     
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    // sunrise.innerHTML = response.sunrise
    // sunset.innerHTML = response.sunset
    wind_degrees.innerHTML = response.wind_degrees
    wind_degrees2.innerHTML = response.wind_degrees
    humidity2.innerHTML = response.humidity
    humidity.innerHTML = response.humidity
    cloud_pct.innerHTML = response.cloud_pct
    feels_like.innerHTML = response.feels_like
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    wind_speed.innerHTML = response.wind_speed
    
    
  })
  .catch (err => console.error(err));
  
};

submit.addEventListener("click", (e) =>{
  e.preventDefault()
  getWeather(city.value)
})



getWeather("KARACHI");*/


//import axios from "node_modulesaxioslibaxios.js";
const getWeather = async (city) => {
 console.log("city", city);
 const options = {
  method: "GET",
  url: `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather`,
  params: { city: city },
  headers: {
   "X-RapidAPI-Key": "dd382e2445mshfcc998614f4cf5bp1cbad7jsn6609d84781ae",
   "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
 };
 try {
  const response = await axios(options);
  const data = response.data;

  console.log("response", response);

  cityName.innerHTML = `Weather of ${city}`;
  min_temp.innerHTML = data.min_temp;
  max_temp.innerHTML = data.max_temp;
  wind_degrees.innerHTML = data.wind_degrees;
  wind_degrees2.innerHTML = data.wind_degrees;
  humidity2.innerHTML = data.humidity;
  humidity.innerHTML = data.humidity;
  cloud_pct.innerHTML = data.cloud_pct;
  feels_like.innerHTML = data.feels_like;
  temp.innerHTML = data.temp;
  temp2.innerHTML = data.temp;
  wind_speed.innerHTML = data.wind_speed;
 } catch (error) {

  cityName.innerHTML = `Invalid City`;
  console.log("error", error);
 }
};

submit.addEventListener("click", (e) => {
 e.preventDefault();
 const city = document.querySelector("#city").value;
 getWeather(city);
});

getWeather("karachi");