//Zipcode Submission variables
const weatherInputContainer=document.getElementById("weather-input-container");
const zipInput=document.getElementById("zip-input");
const submitButton=document.getElementById("submit-button");

//Operator Buttons---------------------------------------------------------------------
const xButton = document.getElementById("x-button");
const favoriteButton = document.getElementById("favorite-button");
const unfavoriteButton = document.getElementById("unfavorite-button");
const historyButton=document.getElementById("history-button");
const closeHistoryButton=document.getElementById("close-history-button");
xButton.addEventListener("click", closeZip);
favoriteButton.addEventListener("click",favoriteZip);
unfavoriteButton.addEventListener("click",unfavoriteZip);
historyButton.addEventListener("click", toggleHistory);
closeHistoryButton.addEventListener("click",closeHistory);

// Completed Menu Text Variables--------------------------------------------------------
const temperture=document.getElementById("temperture-text");
const locationText=document.getElementById("location-text");
const humidityText=document.getElementById("humidity-subtitle");
const weatherText=document.getElementById("weather-text");
const windText=document.getElementById("wind-subtitle");
const ultravioletText=document.getElementById("ultraviolet-subtitle");
const feel=document.getElementById("feels-like-text");

//Weather Catagories and Images----------------------------------------------------------
const weatherImagesContainer=document.getElementById("weather-images-container");
const weatherCatagoriesContainer=document.getElementById("weather-catagories-container");
let weatherImage=document.querySelector(".weather-image");
let weatherHourly = document.querySelectorAll(".weather-hourly");

//Weather Menu Container----------------------------------------------------------------
const weatherMenu = document.getElementById("weather-menu");
const weatherHourlyContainer = document.getElementById("weather-hourly-container");
const weatherMenuContainer = document.getElementById("weather-menu-container");
const weatherInformationContainer=document.getElementById("weather-information-container");
const weatherHistoryMenuDesk = document.getElementById("weather-history-menu-desk");
const weatherHistoryList = document.getElementById("weather-history-list");
let hourlyImageVar;

// API Code List---------------------------------------------------------------------------
const dataDayCodes=[
{
    "code" : 1000,
    "day" : "Sunny",
    "night" : "Clear",
    "icon" : 113
},
{
    "code" : 1003,
    "day" : "Partly cloudy",
    "night" : "Partly cloudy",
    "icon" : 116
},
{
    "code" : 1006,
    "day" : "Cloudy",
    "night" : "Cloudy",
    "icon" : 119
},
{
    "code" : 1009,
    "day" : "Overcast",
    "night" : "Overcast",
    "icon" : 122
},
{
    "code" : 1030,
    "day" : "Mist",
    "night" : "Mist",
    "icon" : 143
},
{
    "code" : 1063,
    "day" : "Patchy rain possible",
    "night" : "Patchy rain possible",
    "icon" : 176
},
{
    "code" : 1066,
    "day" : "Patchy snow possible",
    "night" : "Patchy snow possible",
    "icon" : 179
},
{
    "code" : 1069,
    "day" : "Patchy sleet possible",
    "night" : "Patchy sleet possible",
    "icon" : 182
},
{
    "code" : 1072,
    "day" : "Patchy freezing drizzle possible",
    "night" : "Patchy freezing drizzle possible",
    "icon" : 185
},
{
    "code" : 1087,
    "day" : "Thundery outbreaks possible",
    "night" : "Thundery outbreaks possible",
    "icon" : 200
},
{
    "code" : 1114,
    "day" : "Blowing snow",
    "night" : "Blowing snow",
    "icon" : 227
},
{
    "code" : 1117,
    "day" : "Blizzard",
    "night" : "Blizzard",
    "icon" : 230
},
{
    "code" : 1135,
    "day" : "Fog",
    "night" : "Fog",
    "icon" : 248
},
{
    "code" : 1147,
    "day" : "Freezing fog",
    "night" : "Freezing fog",
    "icon" : 260
},
{
    "code" : 1150,
    "day" : "Patchy light drizzle",
    "night" : "Patchy light drizzle",
    "icon" : 263
},
{
    "code" : 1153,
    "day" : "Light drizzle",
    "night" : "Light drizzle",
    "icon" : 266
},
{
    "code" : 1168,
    "day" : "Freezing drizzle",
    "night" : "Freezing drizzle",
    "icon" : 281
},
{
    "code" : 1171,
    "day" : "Heavy freezing drizzle",
    "night" : "Heavy freezing drizzle",
    "icon" : 284
},
{
    "code" : 1180,
    "day" : "Patchy light rain",
    "night" : "Patchy light rain",
    "icon" : 293
},
{
    "code" : 1183,
    "day" : "Light rain",
    "night" : "Light rain",
    "icon" : 296
},
{
    "code" : 1186,
    "day" : "Moderate rain at times",
    "night" : "Moderate rain at times",
    "icon" : 299
},
{
    "code" : 1189,
    "day" : "Moderate rain",
    "night" : "Moderate rain",
    "icon" : 302
},
{
    "code" : 1192,
    "day" : "Heavy rain at times",
    "night" : "Heavy rain at times",
    "icon" : 305
},
{
    "code" : 1195,
    "day" : "Heavy rain",
    "night" : "Heavy rain",
    "icon" : 308
},
{
    "code" : 1198,
    "day" : "Light freezing rain",
    "night" : "Light freezing rain",
    "icon" : 311
},
{
    "code" : 1201,
    "day" : "Moderate or heavy freezing rain",
    "night" : "Moderate or heavy freezing rain",
    "icon" : 314
},
{
    "code" : 1204,
    "day" : "Light sleet",
    "night" : "Light sleet",
    "icon" : 317
},
{
    "code" : 1207,
    "day" : "Moderate or heavy sleet",
    "night" : "Moderate or heavy sleet",
    "icon" : 320
},
{
    "code" : 1210,
    "day" : "Patchy light snow",
    "night" : "Patchy light snow",
    "icon" : 323
},
{
    "code" : 1213,
    "day" : "Light snow",
    "night" : "Light snow",
    "icon" : 326
},
{
    "code" : 1216,
    "day" : "Patchy moderate snow",
    "night" : "Patchy moderate snow",
    "icon" : 329
},
{
    "code" : 1219,
    "day" : "Moderate snow",
    "night" : "Moderate snow",
    "icon" : 332
},
{
    "code" : 1222,
    "day" : "Patchy heavy snow",
    "night" : "Patchy heavy snow",
    "icon" : 335
},
{
    "code" : 1225,
    "day" : "Heavy snow",
    "night" : "Heavy snow",
    "icon" : 338
},
{
    "code" : 1237,
    "day" : "Ice pellets",
    "night" : "Ice pellets",
    "icon" : 350
},
{
    "code" : 1240,
    "day" : "Light rain shower",
    "night" : "Light rain shower",
    "icon" : 353
},
{
    "code" : 1243,
    "day" : "Moderate or heavy rain shower",
    "night" : "Moderate or heavy rain shower",
    "icon" : 356
},
{
    "code" : 1246,
    "day" : "Torrential rain shower",
    "night" : "Torrential rain shower",
    "icon" : 359
},
{
    "code" : 1249,
    "day" : "Light sleet showers",
    "night" : "Light sleet showers",
    "icon" : 362
},
{
    "code" : 1252,
    "day" : "Moderate or heavy sleet showers",
    "night" : "Moderate or heavy sleet showers",
    "icon" : 365
},
{
    "code" : 1255,
    "day" : "Light snow showers",
    "night" : "Light snow showers",
    "icon" : 368
},
{
    "code" : 1258,
    "day" : "Moderate or heavy snow showers",
    "night" : "Moderate or heavy snow showers",
    "icon" : 371
},
{
    "code" : 1261,
    "day" : "Light showers of ice pellets",
    "night" : "Light showers of ice pellets",
    "icon" : 374
},
{
    "code" : 1264,
    "day" : "Moderate or heavy showers of ice pellets",
    "night" : "Moderate or heavy showers of ice pellets",
    "icon" : 377
},
{
    "code" : 1273,
    "day" : "Patchy light rain with thunder",
    "night" : "Patchy light rain with thunder",
    "icon" : 386
},
{
    "code" : 1276,
    "day" : "Moderate or heavy rain with thunder",
    "night" : "Moderate or heavy rain with thunder",
    "icon" : 389
},
{
    "code" : 1279,
    "day" : "Patchy light snow with thunder",
    "night" : "Patchy light snow with thunder",
    "icon" : 392
},
{
    "code" : 1282,
    "day" : "Moderate or heavy snow with thunder",
    "night" : "Moderate or heavy snow with thunder",
    "icon" : 395
}
];

// 12 Hour Clock to 24 Hour-----------------------------------------------------------------

const timeConvert=[
{
    "24Hour": 0,
    "12Hour": "12 AM"
},
{
    "24Hour": 1,
    "12Hour": "1 AM"
},
{
    "24Hour": 2,
    "12Hour": "2 AM"
},
{
    "24Hour": 3,
    "12Hour": "3 AM"
},
{
    "24Hour": 4,
    "12Hour": "4 AM"
},
{
    "24Hour": 5,
    "12Hour": "5 AM"
},
{
    "24Hour": 6,
    "12Hour": "6 AM"
},
{
    "24Hour": 7,
    "12Hour": "7 AM"
},
{
    "24Hour": 8,
    "12Hour": "8 AM"
},
{
    "24Hour": 9,
    "12Hour": "9 AM"
},
{
    "24Hour": 10,
    "12Hour": "10 AM"
},
{
    "24Hour": 11,
    "12Hour": "11 AM"
},
{
    "24Hour": 12,
    "12Hour": "12 PM"
},
{
    "24Hour": 13,
    "12Hour": "1 PM"
},
{
    "24Hour": 14,
    "12Hour": "2 PM"
},
{
    "24Hour": 15,
    "12Hour": "3 PM"
},
{
    "24Hour": 16,
    "12Hour": "4 PM"
},
{
    "24Hour": 17,
    "12Hour": "5 PM"
},
{
    "24Hour": 18,
    "12Hour": "6 PM"
},
{
    "24Hour": 19,
    "12Hour": "7 PM"
},
{
    "24Hour": 20,
    "12Hour": "8 PM"
},
{
    "24Hour": 21,
    "12Hour": "9 PM"
},
{
    "24Hour": 22,
    "12Hour": "10 PM"
},
{
    "24Hour": 23,
    "12Hour": "11 PM"
}
];

//API Data variables----------------------------------------------------------------------

let dataTemperture;
let dataLocationCity;
let dataLocationState;
let dataWeatherText;
let dataFeel;
let dataHumidity;
let dataWind;
let dataUltraviolet;
let dataCloud;
let dataTimeDay;
let dataTimeCode;
let dataIconCode;
let dataLocalTime;
let dataEstTime;
let dataEstConvertedTime;

//Local storage variables --------------------------------------------------------------------------------

let zipSearchHistory=[];
let zipSearchHistoryLocal;
let usableZipSearchHistory=JSON.parse(localStorage.getItem("history"));
let citySearchHistory=[];
let citySearchHistoryLocal;
let usableCitySearchHistory=JSON.parse(localStorage.getItem("city-history"));
let stateSearchHistory=[];
let stateSearchHistoryLocal;
let usableStateSearchHistory=JSON.parse(localStorage.getItem("state-history"));
let usableFavoriteZip = localStorage.getItem("favoriteZipCode");


// window.onload Functions------------------------------------------------------------------------------

window.onload= multipleFunction();

function multipleFunction(){
    favoriteZipChecker();
    historyButtonCreator();
    settingHistoryArray();
    settingCityHistoryArray();
    settingStateHistoryArray();
};

function favoriteZipChecker(){
    if(usableFavoriteZip!=undefined){
        openFavorite();
    };
};

function settingHistoryArray(){
    if(usableZipSearchHistory!=null){
    zipSearchHistory=usableZipSearchHistory;
    };
};
function settingCityHistoryArray(){
    if(usableCitySearchHistory!=null){
    citySearchHistory=usableCitySearchHistory;
    };
};
function settingStateHistoryArray(){
    if(usableStateSearchHistory!=null){
    stateSearchHistory=usableStateSearchHistory;
    };
};


//API Fetching functions -------------------------------------------------------------------------------------

submitButton.addEventListener("click",callApi);

function callApi(){
fetch("https://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q="+zipInput.value+"&days=1&aqi=no&alerts=no")
.then(Response => {
    console.log(Response.status)
    if(Response.status===400){
        throw new error("invalid zip")
    }
    return Response.json();
})
.then(data => {

//Local Storage Creation
if(zipSearchHistory.length<5){
    zipInputNumber=zipInput.value;
    zipSearchHistory.unshift(zipInput.value);
    zipSearchHistoryLocal=JSON.stringify(zipSearchHistory);
    localStorage.setItem("history",zipSearchHistoryLocal);
    citySearchHistory.unshift(data.location.name);
    citySearchHistoryLocal=JSON.stringify(citySearchHistory);
    localStorage.setItem("city-history",citySearchHistoryLocal);
    stateSearchHistory.unshift(data.location.region);
    stateSearchHistoryLocal=JSON.stringify(stateSearchHistory);
    localStorage.setItem("state-history",stateSearchHistoryLocal);
}
else{
    zipInputNumber=zipInput.value;
    zipSearchHistory.pop();
    zipSearchHistory.unshift(zipInput.value);
    zipSearchHistoryLocal=JSON.stringify(zipSearchHistory);
    localStorage.setItem("history",zipSearchHistoryLocal);
    citySearchHistory.pop();
    citySearchHistory.unshift(data.location.name);
    citySearchHistoryLocal=JSON.stringify(citySearchHistory);
    localStorage.setItem("city-history",citySearchHistoryLocal);
    stateSearchHistory.pop();
    stateSearchHistory.unshift(data.location.region);
    stateSearchHistoryLocal=JSON.stringify(stateSearchHistory);
    localStorage.setItem("state-history",stateSearchHistoryLocal);
};

// Dom munipulation after submition of zip    
    dataFeel=data.current.feelslike_f+"℉";
    dataLocationCity=data.location.name;
    dataLocationState=data.location.region;
    dataWeatherText=data.current.condition.text
    dataCloud=data.current.cloud;
    dataTimeDay=data.current.condition.icon;
    dataTemperture=data.current.temp_f+"℉";
    dataLocalTime=data.location.localtime;
    dataEstTime=parseInt(dataLocalTime.substring(11,13));
        if(isNaN(dataEstTime)){
            dataEstTime=parseInt(dataLocalTime.substring(11,12));
        };
    weatherText.innerHTML=dataWeatherText;
    temperture.innerText=dataTemperture;
    locationText.innerText=dataLocationCity+", "+dataLocationState;
    humidityText.innerText=data.current.humidity+"%";
    windText.innerText=data.current.wind_mph+"mph";
    ultravioletText.innerText=data.current.uv+"/10"
    feel.innerText="Feels like "+dataFeel;
    dataTimeCode=data.current.condition.code;

    function timeConverter(){
        for (let i = 0;  timeConvert[i]["24Hour"]<=dataEstTime; i++){
            dataEstConvertedTime=timeConvert[i]["12Hour"];
            hourlyImageVar=timeConvert[i]["24Hour"]+1;
        };  
        for (let a = hourlyImageVar; a < weatherHourly.length; a++){
            weatherHourly[a].style.display="block";
            weatherHourly[a].lastElementChild.innerHTML=data.forecast.forecastday[0].hour[a].temp_f+"℉";
            let weatherHourlyChildren=weatherHourly[a].children;
            weatherHourlyChildren[1].src="https:"+data.forecast.forecastday[0].hour[a].condition.icon
        };
    };

    codeReciever();
    weatherImageMaker();
    timeConverter();

}).then(()=>{
    weatherMenu.style.top="35%"
    weatherHourlyContainer.style.display="flex";
    xButton.style.display="block";
    favoriteButton.style.display="block"
    weatherImagesContainer.style.display="block";
    weatherCatagoriesContainer.style.display="flex";
    weatherInformationContainer.style.display="flex";
    weatherInputContainer.style.display="none";
})
.catch(error=>alert("Invalid Zipcode"))
};

function openFavorite(){
    fetch("http://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q="+usableFavoriteZip+"&days=1&aqi=no&alerts=no")
    .then(Response => {
        return Response.json();
    })
    .then(data => {
    
    // Dom munipulation after submition of zip  
        
        dataFeel=data.current.feelslike_f+"℉";
        dataLocationCity=data.location.name;
        dataLocationState=data.location.region;
        dataCloud=data.current.cloud;
        dataTimeDay=data.current.condition.icon;
        dataTemperture=data.current.temp_f+"℉";
        dataWeatherText=data.current.condition.text;
        dataLocalTime=data.location.localtime;
        dataEstTime=parseInt(dataLocalTime.substring(11,13));
        if(isNaN(dataEstTime)){
            dataEstTime=parseInt(dataLocalTime.substring(11,12));
        };
        weatherText.innerHTML=dataWeatherText;
        temperture.innerText=dataTemperture;
        locationText.innerText=dataLocationCity+", "+dataLocationState;
        humidityText.innerText=data.current.humidity+"%";
        windText.innerText=data.current.wind_mph+"mph";
        ultravioletText.innerText=data.current.uv+"/10";
        feel.innerText="Feels like "+dataFeel;
        dataTimeCode=data.current.condition.code;
        
        

        function timeConverter(){
            for (let i = 0;  timeConvert[i]["24Hour"]<=dataEstTime; i++){
                dataEstConvertedTime=timeConvert[i]["12Hour"];
                hourlyImageVar=timeConvert[i]["24Hour"]+1;
            };  
            for (let a = hourlyImageVar; a < weatherHourly.length; a++){
                weatherHourly[a].style.display="block";
                weatherHourly[a].lastElementChild.innerHTML=data.forecast.forecastday[0].hour[a].temp_f+"℉";
                let weatherHourlyChildren=weatherHourly[a].children;
                weatherHourlyChildren[1].src="https:"+data.forecast.forecastday[0].hour[a].condition.icon
            };
        };

        console.log(data);
        codeReciever();
        weatherImageMaker();
        timeConverter();
    })
    .then(()=>{
        weatherMenu.style.top="35%"
        weatherHourlyContainer.style.display="flex";
        xButton.style.display="block";
        unfavoriteButton.style.display="block"
        weatherImagesContainer.style.display="block";
        weatherCatagoriesContainer.style.display="flex";
        weatherInformationContainer.style.display="flex";
        weatherInputContainer.style.display="none";
    })
    .catch(error=>alert("Favorite Zip Error"))
    };

function codeReciever(){
    for (let i = 0; dataDayCodes[i].code<=dataTimeCode; i++){
        dataIconCode=dataDayCodes[i].icon;
    };
};
function weatherImageMaker(){
    if(dataTimeDay=="//cdn.weatherapi.com/weather/64x64/night/"+dataIconCode+".png"){
        let dataNightImageSrc;
        dataNightImageSrc="images/icons/weather/64x64/night/"+dataIconCode+".png";
        weatherImage.src=dataNightImageSrc;
        weatherMenuContainer.style.backgroundImage="url(images/backgrounds/nightsky.jpg)";
    }else{
        let dataDayImageSrc;
        dataDayImageSrc="images/icons/weather/64x64/day/"+dataIconCode+".png";
        weatherImage.src=dataDayImageSrc;
        weatherMenuContainer.style.backgroundImage="url(images/backgrounds/wp7399540.webp)";
    };
};

//Button Functions ----------------------------------------------------------------------------------------------

function closeZip(){
    zipInput.value="";
    weatherMenu.style.top="50%"
    weatherHourlyContainer.style.display="none";
    xButton.style.display="none";
    favoriteButton.style.display="none";
    weatherImagesContainer.style.display="none";
    weatherCatagoriesContainer.style.display="none";
    weatherInformationContainer.style.display="none";
    weatherInputContainer.style.display="block";
    weatherMenuContainer.style.backgroundImage="url(images/backgrounds/wp7399540.webp)";
    favoriteButton.style.display="none";
    unfavoriteButton.style.display="none";
};
function toggleHistory(){
    historyButton.style.display="none";
    closeHistoryButton.style.display="block";
    weatherHistoryMenuDesk.style.display="block"
};

function closeHistory(){
    historyButton.style.display="block";
    closeHistoryButton.style.display="none";
    weatherHistoryMenuDesk.style.display="none";
};

function favoriteZip(){
    favoriteButton.style.display="none";
    unfavoriteButton.style.display="block";
    let favoriteZipCode = zipInput.value;
    localStorage.setItem("favoriteZipCode", favoriteZipCode);
};
function unfavoriteZip(){
    favoriteButton.style.display="block";
    unfavoriteButton.style.display="none";
    favoriteZipCode = "";
    localStorage.removeItem("favoriteZipCode");
};



function historyButtonCreator(){
    if(usableZipSearchHistory!=null){
        for (let i = 0; i <usableZipSearchHistory.length; i++){
            if(i<5){
            const createLiElement = document.createElement("li");
            const createButtonElement = document.createElement("button");
            const createH2Element = document.createElement("h2");
            const createPElement = document.createElement("p");

            createLiElement;
            createButtonElement.className="weather-history-button";
            createH2Element.innerHTML=usableZipSearchHistory[i];
            createPElement.innerHTML=usableCitySearchHistory[i]+", "+usableStateSearchHistory[i];

            weatherHistoryList.appendChild(createLiElement);
            createLiElement.appendChild(createButtonElement);
            createButtonElement.appendChild(createH2Element);
            createButtonElement.appendChild(createPElement);
            
            }
        };
     };
 };
 
const weatherHistoryButton = document.querySelectorAll('.weather-history-button');

let historyIds=["firstHistoryButton","secondHistoryButton","thirdHistoryButton","fourthHistoryButton","fifthHistoryButton"];

let historyEvents=[firstHistoryButtonInfo,secondHistoryButtonInfo,thirdHistoryButtonInfo,fourthHistoryButtonInfo,fifthHistoryButtonInfo];

for (let i = 0; i < weatherHistoryButton.length; i++) {
    if(usableZipSearchHistory!=undefined){
    weatherHistoryButton[i].id=historyIds[i];
    weatherHistoryButton[i].addEventListener("click",historyEvents[i]);
    }
};

function firstHistoryButtonInfo(){
    fetch("http://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q="+document.getElementById("firstHistoryButton").firstChild.innerHTML+"&days=1&aqi=no&alerts=no")
    .then(Response => {
        console.log(Response.status);
        return Response.json();
    })
    .then(data => {
    
    // Dom munipulation after submition of zip  
        zipInput.value=document.getElementById("firstHistoryButton").firstChild.innerHTML;
        dataFeel=data.current.feelslike_f+"℉";
        dataLocationCity=data.location.name;
        dataLocationState=data.location.region;
        dataCloud=data.current.cloud;
        dataTimeDay=data.current.condition.icon;
        dataTemperture=data.current.temp_f+"℉";
        dataWeatherText=data.current.condition.text;
        dataLocalTime=data.location.localtime;
        dataEstTime=parseInt(dataLocalTime.substring(11,13));
        if(isNaN(dataEstTime)){
            dataEstTime=parseInt(dataLocalTime.substring(11,12));
        };
        weatherText.innerHTML=dataWeatherText;
        temperture.innerText=dataTemperture;
        locationText.innerText=dataLocationCity+", "+dataLocationState;
        humidityText.innerText=data.current.humidity+"%";
        windText.innerText=data.current.wind_mph+"mph";
        ultravioletText.innerText=data.current.uv+"/10";
        feel.innerText="Feels like "+dataFeel;
        dataTimeCode=data.current.condition.code;

        function timeConverter(){
            for (let i = 0;  timeConvert[i]["24Hour"]<=dataEstTime; i++){
                dataEstConvertedTime=timeConvert[i]["12Hour"];
                hourlyImageVar=timeConvert[i]["24Hour"]+1;
            };  
            for (let a = hourlyImageVar; a < weatherHourly.length; a++){
                weatherHourly[a].style.display="block";
                weatherHourly[a].lastElementChild.innerHTML=data.forecast.forecastday[0].hour[a].temp_f+"℉";
                let weatherHourlyChildren=weatherHourly[a].children;
                weatherHourlyChildren[1].src="https:"+data.forecast.forecastday[0].hour[a].condition.icon
            };
        };

        codeReciever();
        weatherImageMaker();
        timeConverter();
        
    })
    .then(()=>{
        weatherMenu.style.top="35%"
        weatherHourlyContainer.style.display="flex";
        xButton.style.display="block";
        unfavoriteButton.style.display="none";
        favoriteButton.style.display="block";
        weatherImagesContainer.style.display="block";
        weatherCatagoriesContainer.style.display="flex";
        weatherInformationContainer.style.display="flex";
        weatherInputContainer.style.display="none";
    })
    .catch(error=>alert("Favorite Zip Error"))
    };
function secondHistoryButtonInfo(){
    fetch("http://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q="+document.getElementById("secondHistoryButton").firstChild.innerHTML+"&days=1&aqi=no&alerts=no")
    .then(Response => {
        console.log(Response.status);
        return Response.json();
    })
    .then(data => {
    
    // Dom munipulation after submition of zip  
        zipInput.value=document.getElementById("secondHistoryButton").firstChild.innerHTML;
        dataFeel=data.current.feelslike_f+"℉";
        dataLocationCity=data.location.name;
        dataLocationState=data.location.region;
        dataCloud=data.current.cloud;
        dataTimeDay=data.current.condition.icon;
        dataTemperture=data.current.temp_f+"℉";
        dataWeatherText=data.current.condition.text;
        dataLocalTime=data.location.localtime;
        dataEstTime=parseInt(dataLocalTime.substring(11,13));
        if(isNaN(dataEstTime)){
            dataEstTime=parseInt(dataLocalTime.substring(11,12));
        };
        weatherText.innerHTML=dataWeatherText;
        temperture.innerText=dataTemperture;
        locationText.innerText=dataLocationCity+", "+dataLocationState;
        humidityText.innerText=data.current.humidity+"%";
        windText.innerText=data.current.wind_mph+"mph";
        ultravioletText.innerText=data.current.uv+"/10";
        feel.innerText="Feels like "+dataFeel;
        dataTimeCode=data.current.condition.code;

        function timeConverter(){
            for (let i = 0;  timeConvert[i]["24Hour"]<=dataEstTime; i++){
                dataEstConvertedTime=timeConvert[i]["12Hour"];
                hourlyImageVar=timeConvert[i]["24Hour"]+1;
            };  
            for (let a = hourlyImageVar; a < weatherHourly.length; a++){
                weatherHourly[a].style.display="block";
                weatherHourly[a].lastElementChild.innerHTML=data.forecast.forecastday[0].hour[a].temp_f+"℉";
                let weatherHourlyChildren=weatherHourly[a].children;
                weatherHourlyChildren[1].src="https:"+data.forecast.forecastday[0].hour[a].condition.icon
            };
        };

        codeReciever();
        weatherImageMaker();
        timeConverter();
    })
    .then(()=>{
        weatherMenu.style.top="35%"
        weatherHourlyContainer.style.display="flex";
        xButton.style.display="block";
        unfavoriteButton.style.display="none";
        favoriteButton.style.display="block";
        weatherImagesContainer.style.display="block";
        weatherCatagoriesContainer.style.display="flex";
        weatherInformationContainer.style.display="flex";
        weatherInputContainer.style.display="none";
    })
    .catch(error=>alert("Favorite Zip Error"))
    };
function thirdHistoryButtonInfo(){
    fetch("http://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q="+document.getElementById("thirdHistoryButton").firstChild.innerHTML+"&days=1&aqi=no&alerts=no")
    .then(Response => {
        console.log(Response.status);
        return Response.json();
    })
    .then(data => {
    
    // Dom munipulation after submition of zip  
        zipInput.value=document.getElementById("thirdHistoryButton").firstChild.innerHTML;
        dataFeel=data.current.feelslike_f+"℉";
        dataLocationCity=data.location.name;
        dataLocationState=data.location.region;
        dataCloud=data.current.cloud;
        dataTimeDay=data.current.condition.icon;
        dataTemperture=data.current.temp_f+"℉";
        dataWeatherText=data.current.condition.text;
        dataLocalTime=data.location.localtime;
        dataEstTime=parseInt(dataLocalTime.substring(11,13));
        if(isNaN(dataEstTime)){
            dataEstTime=parseInt(dataLocalTime.substring(11,12));
        };
        weatherText.innerHTML=dataWeatherText;
        temperture.innerText=dataTemperture;
        locationText.innerText=dataLocationCity+", "+dataLocationState;
        humidityText.innerText=data.current.humidity+"%";
        windText.innerText=data.current.wind_mph+"mph";
        ultravioletText.innerText=data.current.uv+"/10";
        feel.innerText="Feels like "+dataFeel;
        dataTimeCode=data.current.condition.code;

        function timeConverter(){
            for (let i = 0;  timeConvert[i]["24Hour"]<=dataEstTime; i++){
                dataEstConvertedTime=timeConvert[i]["12Hour"];
                hourlyImageVar=timeConvert[i]["24Hour"]+1;
            };  
            for (let a = hourlyImageVar; a < weatherHourly.length; a++){
                weatherHourly[a].style.display="block";
                weatherHourly[a].lastElementChild.innerHTML=data.forecast.forecastday[0].hour[a].temp_f+"℉";
                let weatherHourlyChildren=weatherHourly[a].children;
                weatherHourlyChildren[1].src="https:"+data.forecast.forecastday[0].hour[a].condition.icon
            };
        };

        codeReciever();
        weatherImageMaker();
        timeConverter();
    })
    .then(()=>{
        weatherMenu.style.top="35%"
        weatherHourlyContainer.style.display="flex";
        xButton.style.display="block";
        unfavoriteButton.style.display="none";
        favoriteButton.style.display="block";
        weatherImagesContainer.style.display="block";
        weatherCatagoriesContainer.style.display="flex";
        weatherInformationContainer.style.display="flex";
        weatherInputContainer.style.display="none";
    })
    .catch(error=>alert("Favorite Zip Error"))
    };
function fourthHistoryButtonInfo(){
    fetch("http://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q="+document.getElementById("fourthHistoryButton").firstChild.innerHTML+"&days=1&aqi=no&alerts=no")
    .then(Response => {
        console.log(Response.status);
        return Response.json();
    })
    .then(data => {
    
    // Dom munipulation after submition of zip  
        zipInput.value = document.getElementById("fourthHistoryButton").firstChild.innerHTML;
        dataFeel=data.current.feelslike_f+"℉";
        dataLocationCity=data.location.name;
        dataLocationState=data.location.region;
        dataCloud=data.current.cloud;
        dataTimeDay=data.current.condition.icon;
        dataTemperture=data.current.temp_f+"℉";
        dataWeatherText=data.current.condition.text;
        dataLocalTime=data.location.localtime;
        dataEstTime=parseInt(dataLocalTime.substring(11,13));
        if(isNaN(dataEstTime)){
            dataEstTime=parseInt(dataLocalTime.substring(11,12));
        };
        weatherText.innerHTML=dataWeatherText;
        temperture.innerText=dataTemperture;
        locationText.innerText=dataLocationCity+", "+dataLocationState;
        humidityText.innerText=data.current.humidity+"%";
        windText.innerText=data.current.wind_mph+"mph";
        ultravioletText.innerText=data.current.uv+"/10";
        feel.innerText="Feels like "+dataFeel;
        dataTimeCode=data.current.condition.code;

        function timeConverter(){
            for (let i = 0;  timeConvert[i]["24Hour"]<=dataEstTime; i++){
                dataEstConvertedTime=timeConvert[i]["12Hour"];
                hourlyImageVar=timeConvert[i]["24Hour"]+1;
            };  
            for (let a = hourlyImageVar; a < weatherHourly.length; a++){
                weatherHourly[a].style.display="block";
                weatherHourly[a].lastElementChild.innerHTML=data.forecast.forecastday[0].hour[a].temp_f+"℉";
                let weatherHourlyChildren=weatherHourly[a].children;
                weatherHourlyChildren[1].src="https:"+data.forecast.forecastday[0].hour[a].condition.icon
            };
        };

        codeReciever();
        weatherImageMaker();
        timeConverter();
    })
    .then(()=>{
        weatherMenu.style.top="35%"
        weatherHourlyContainer.style.display="flex";
        xButton.style.display="block";
        unfavoriteButton.style.display="none";
        favoriteButton.style.display="block";
        weatherImagesContainer.style.display="block";
        weatherCatagoriesContainer.style.display="flex";
        weatherInformationContainer.style.display="flex";
        weatherInputContainer.style.display="none";
    })
    .catch(error=>alert("Favorite Zip Error"))
    };
function fifthHistoryButtonInfo(){
    fetch("http://api.weatherapi.com/v1/forecast.json?key=b28574dd6599479e944222901212812&q="+document.getElementById("fifthHistoryButton").firstChild.innerHTML+"&days=1&aqi=no&alerts=no")
    .then(Response => {
        console.log(Response.status);
        return Response.json();
    })
    .then(data => {
    
    // Dom munipulation after submition of zip  
        zipInput.value=document.getElementById("fifthHistoryButton").firstChild.innerHTML;
        dataFeel=data.current.feelslike_f+"℉";
        dataLocationCity=data.location.name;
        dataLocationState=data.location.region;
        dataCloud=data.current.cloud;
        dataTimeDay=data.current.condition.icon;
        dataTemperture=data.current.temp_f+"℉";
        dataWeatherText=data.current.condition.text;
        dataLocalTime=data.location.localtime;
        dataEstTime=parseInt(dataLocalTime.substring(11,13));
        if(isNaN(dataEstTime)){
            dataEstTime=parseInt(dataLocalTime.substring(11,12));
        };
        weatherText.innerHTML=dataWeatherText;
        temperture.innerText=dataTemperture;
        locationText.innerText=dataLocationCity+", "+dataLocationState;
        humidityText.innerText=data.current.humidity+"%";
        windText.innerText=data.current.wind_mph+"mph";
        ultravioletText.innerText=data.current.uv+"/10";
        feel.innerText="Feels like "+dataFeel;
        dataTimeCode=data.current.condition.code;

        function timeConverter(){
            for (let i = 0;  timeConvert[i]["24Hour"]<=dataEstTime; i++){
                dataEstConvertedTime=timeConvert[i]["12Hour"];
                hourlyImageVar=timeConvert[i]["24Hour"]+1;
            };  
            for (let a = hourlyImageVar; a < weatherHourly.length; a++){
                weatherHourly[a].style.display="block";
                weatherHourly[a].lastElementChild.innerHTML=data.forecast.forecastday[0].hour[a].temp_f+"℉";
                let weatherHourlyChildren=weatherHourly[a].children;
                weatherHourlyChildren[1].src="https:"+data.forecast.forecastday[0].hour[a].condition.icon
            };
        };

        codeReciever();
        weatherImageMaker();
        timeConverter();
    })
    .then(()=>{
        weatherMenu.style.top="35%"
        weatherHourlyContainer.style.display="flex";
        xButton.style.display="block";
        unfavoriteButton.style.display="none";
        favoriteButton.style.display="block";
        weatherImagesContainer.style.display="block";
        weatherCatagoriesContainer.style.display="flex";
        weatherInformationContainer.style.display="flex";
        weatherInputContainer.style.display="none";
    })
    .catch(error=>alert("Favorite Zip Error"))
    };



    

