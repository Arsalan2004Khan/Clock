
let vSec = document.querySelector(".sec");
let vMin = document.querySelector(".min");
let vHour = document.querySelector(".hour");

setInterval(() => {

    let vTime = new Date();

    let vss = vTime.getSeconds() * 6;
    let vmm = vTime.getMinutes() * 6;
    let vhh = vTime.getHours() * 30;

    vSec.style.transform = `rotateZ(${vss}deg)`
    vMin.style.transform = `rotateZ(${vmm}deg)`
    vHour.style.transform = `rotateZ(${vhh+(vmm/12)}deg)`


}, 1000);