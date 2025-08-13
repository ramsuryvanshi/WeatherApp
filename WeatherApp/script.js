const apiKey="03567c290644285d434727e147de4d26";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city) {
const response=await fetch(apiUrl +city+`&appid=${apiKey}`);
const data=await response.json();
console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
   
    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="images/cloud.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="images/clear.png"
    }

    document.querySelector(".weather").style.display="block"
}


searchBtn.addEventListener("click",()=>{
   checkWeather(searchBox.value);
})
