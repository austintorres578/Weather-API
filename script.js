const temperture=document.getElementById("temperture-text");
const locationText=document.getElementById("location-text");
const humidityText=document.getElementById("humidity-subtitle");
const windText=document.getElementById("wind-subtitle");
const ultravioletText=document.getElementById("ultraviolet-subtitle");
const feel=document.getElementById("feels-like-text");
const zipInput=document.getElementById("zip-input");
const submitButton=document.getElementById("submit-button");
const weatherImagesContainer=document.getElementById("weather-images-container");
const weatherCatagoriesContainer=document.getElementById("weather-catagories-container");
const weatherInputContainer=document.getElementById("weather-input-container");

let dataTemperture;
let dataLocationCity;
let dataLocationState;
let dataFeel;
let dataHumidity;
let dataWind;
let dataUltraviolet;

submitButton.addEventListener("click",test);

function test(){
fetch("http://api.weatherapi.com/v1/current.json?key=b28574dd6599479e944222901212812&q="+zipInput.value+"&aqi=no")
.then(Response => Response.json())
.then(data => {
    zipInput.value="";
    dataFeel=data.current.feelslike_f+"℉";
    dataLocationCity=data.location.name;
    dataLocationState=data.location.region;
    dataTemperture=data.current.temp_f+"℉";
    weatherImagesContainer.style.display="block";
    weatherCatagoriesContainer.style.display="flex";
    weatherInputContainer.style.display="none";

    temperture.innerText=dataTemperture;
    locationText.innerText=dataLocationCity+", "+dataLocationState;
    humidityText.innerText=data.current.humidity+"%";
    windText.innerText=data.current.wind_mph+"mph";
    ultravioletText.innerText=data.current.uv+"/10"
    feel.innerText="Feels like "+dataFeel;
    console.log(data);
})
.catch(error=>alert("Incorrect Zipcode"))
};
