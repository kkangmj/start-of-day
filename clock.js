const clockContainer = document.querySelector(".js-clock");
const clockHour = clockContainer.querySelector("#hour");
const clockMinute = clockContainer.querySelector("#minute");

function init(){
    getTime();
    setInterval(getTime, 1000);
}

function timeFormatter(time){
    return time < 10 ? `0${time}` : time;
}

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockHour.innerText = `${timeFormatter(hours)}`;
    clockMinute.innerText = `${timeFormatter(minutes)}`;
}

init();