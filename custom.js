const days = document.getElementById("days");
const hrs = document.getElementById("hrs");
const mins = document.getElementById("min");
const segs = document.getElementById("seg");

const newYear = '1 Jan 2025';

function countTimer(){
    const newYearDate = new Date(newYear);
    const currenDate = new Date();
    
    const totalSecons = (newYearDate - currenDate) / 1000;
    
    const daysCalc = Math.floor(totalSecons / 3600 / 24);
    const hrsCalc = Math.floor(totalSecons / 3600) % 24;
    const minsCalc = Math.floor(totalSecons / 60) % 60;
    const segsCalc = Math.floor(totalSecons % 60);
    
    days.innerHTML = daysCalc;
    hrs.innerHTML = hrsCalc;
    mins.innerHTML = minsCalc;
    segs.innerHTML = segsCalc;
    
}
countTimer();
setInterval(countTimer, 1000);
