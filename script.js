const temperture=document.getElementById("temperture-text");
const locationText=document.getElementById("location-text");
const feel=document.getElementById("feels-like-text");
const zipInput=document.getElementById("zip-input");
const submitButton=document.getElementById("submit-button");

submitButton.addEventListener("click",test);

function test(){
fetch("http://api.weatherapi.com/v1/current.json?key=b28574dd6599479e944222901212812&q="+zipInput.value+"&aqi=no")
.then(Response => Response.json())
.then(data => {
    let dataTemperture;
    let dataLocationCity;
    let dataLocationState;
    let dataFeel;
    zipInput.value="";
    dataFeel=data.current.feelslike_f+"℉";
    dataLocationCity=data.location.name;
    dataLocationState=data.location.region;
    dataTemperture=data.current.temp_f+"℉";

    temperture.innerText=dataTemperture;
    locationText.innerText=dataLocationCity+", "+dataLocationState;
    feel.innerText="Feels like "+dataFeel;
})
.catch(error=>alert("Incorrect Zipcode"))
};
