const clockContainer = document.querySelector(".js-clock"),
clocktitle = clockContainer.querySelector("h1"),
clockday = clockContainer.querySelector("h3");

function getWeek(week){
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weeks[week];
}

function getDay(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const days = today.getDay();
    const day = getWeek(days);
    
    clockday.innerHTML = `${year}.${month}.${date} ${day}`;
}

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clocktitle.innerText=`${hours<10 ? `0${hours}`:hours }:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
}


function init () {
getDay();
getTime();
setInterval(getTime,1000);
}

init();
