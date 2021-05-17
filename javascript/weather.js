const weather = document.querySelector(".js-weather");
const API_KEY = "435a61b27cc5d4e1c56d315d4ca4267b";
const COORDS = "coords";

function getWeather(lat,lng){
fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
`)
.then(function(response){
return response.json()
})
.then(function(json){
   const temperature = json.main.temp;
   const place = json.name;
   weather.innerText = ` ${temperature}°C  @${place}`;
});
}

function saveCoords(coordsObj){
localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
 loadCoords();
}
init();

function getLocation() {    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, positionError);

    } else {
        hideLoadingDiv()
        showError('Geolocation is not supported by this device')
    }
}

function positionError() {
    hideLoadingDiv()
    showError('Geolocation is not enabled. Please enable to use this feature')
}