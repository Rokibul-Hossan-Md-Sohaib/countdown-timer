
const daysNew =document.getElementById('days');
const hoursNew =document.getElementById('hours');
const minsNew =document.getElementById('mins');
const secondsNew =document.getElementById('seconds');


const newYears ="1 Jan 2021";

function countdown(){
    const newYearDate = new Date(newYears);
    console.log(newYearDate);
    const currentDate = new Date();
    console.log(currentDate);

    const seconds =Math.floor((newYearDate -currentDate)/1000);
    console.log(seconds)
    const mins = Math.floor(seconds/60);
    console.log("mins", mins)
    const hours =Math.floor( mins/60);
    console.log("hours " , hours)
    const days= Math.floor(hours/24);

    daysNew.innerHTML= formatTime(days);
    hoursNew.innerHTML= formatTime(hours);
     minsNew.innerHTML= formatTime(mins);
    secondsNew.innerHTML=formatTime(seconds);
   
    
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown ,1000)