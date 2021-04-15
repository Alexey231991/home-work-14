function getTime() {
    const date = new Date();
    const h = ("0" + date.getHours()).slice(-2);
    const m = ("0" + date.getMinutes()).slice(-2);
    const s = ("0" + date.getSeconds()).slice(-2);

    return {
        hours: h,
        minutes: m,
        seconds: s,
    }
}

function drawTime(hours, minutes, seconds) {
    const hoursBlock = document.querySelector('.hours');
    const minutesBlock = document.querySelector('.minutes');
    const secondsBlock = document.querySelector('.seconds');

    hoursBlock.innerText = hours;
    minutesBlock.innerText = minutes;
    secondsBlock.innerText = seconds;
}

function update() {
    const currentDate = getTime();
    console.log( currentDate.hours + ':' + currentDate.minutes + ':' + currentDate.seconds );
    drawTime(currentDate.hours, currentDate.minutes, currentDate.seconds)
}

update();

setInterval(update, 1000);



