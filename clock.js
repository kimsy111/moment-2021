const clockContainer = document.querySelector(".js-clock"),
clocktitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day =  date.getDate();
    const dayLabel = date.getDay();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clocktitle.innerText=`${year}.${month}.${day} ${dayLabel}
    ${hours<10 ? `0${hours}`:hours }:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
}
/*
function getTodayLabel() {
    
    const week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    
    const today = new Date().getDay();
    const todayLabel = week[today];
    
    return todayLabel;
}
*/
function init () {
getTime();
setInterval(getTime,1000);
}

init();
