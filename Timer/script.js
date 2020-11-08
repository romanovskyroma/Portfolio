const getID = id => document.getElementById(id);
const getSel = sel => document.querySelector(sel);
const getSelAll = selAll => document.querySelectorAll(selAll);

function formatDate() {
    let date = new Date();

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();

    return dd + '.' + mm + '.' + yy;
}

function formatTime() {
    let time = new Date();

    let hh = time.getHours();
    if (hh < 10) hh = '0' + hh;

    let mm = time.getMinutes();
    if (mm < 10) mm = '0' + mm;

    let ss = time.getSeconds();
    if (ss < 10) ss = '0' + ss;

    return hh + ':' + mm + ':' + ss;
}

let currentDate = getSel('.currentDate');
let currentTime = getSel('.currentTime');

function update() {
    currentDate.textContent = formatDate();
    currentTime.textContent = formatTime();
}

setInterval(update, 1);

let start = getSel('.start');
let loop = getSel('.loop');
let stop = getSel('.stop');
let reset = getSel('.reset');
let timerDisplay = getSel('.timerDisplay');
let error = getSel('.error');

timerDisplay.textContent = '00:00:00:000';

let timerID;
let startDate = 0;
let stopDate = 0;
let sumTimers = 0;

function startTimer() {
    let crtDate = new Date();

    timer = new Date((crtDate - startDate) + sumTimers);

    let msec = timer.getMilliseconds();
    let sec = timer.getSeconds();
    let min = timer.getMinutes();
    let hours = timer.getUTCHours();

    if (msec < 10) {
        msec = '00' + msec;
    } else if (msec < 100) {
        msec = '0' + msec;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    timerDisplay.textContent = `${hours}:${min}:${sec}:${msec}`;
}

start.onclick = function () {
    startDate = new Date();
    timerID = setInterval(startTimer, 1);
    start.disabled = true;
    stop.disabled = false;
    error.textContent = '';
}

stop.onclick = function () {
    if (timerID > 0) {
        stopDate = new Date();
        clearInterval(timerID);
        let nextTimer = stopDate - startDate;
        sumTimers += nextTimer;
        error.textContent = '';
    } else {
        error.textContent = 'turn on timer';
    }
    stop.disabled = true;
    start.disabled = false;
}

reset.onclick = function () {
    if (start.disabled == true) {
        error.textContent = 'turn off timer';
    } else {
        sumTimers = 0;
        timerDisplay.textContent = `00:00:00:000`;
        timeStamps.innerHTML = '';
    }
}

let timeStamps = getSel('.timeStamps');
let count = 1;

loop.onclick = function () {
    timeStamps.innerHTML += `<p class='item'>${count}. ${timerDisplay.textContent}</p>`;
    count++;
    items = getSelAll('.item');
    for (let elem of items) {
        elem.scrollIntoView({
            behavior: 'auto',
            block: 'nearest'
        });
    }
}

let plus = getSel('.plus');
let minus = getSel('.minus');
let minutesDisplay = getSel('.minutesDisplay');

minutesDisplay.textContent = '00';
let min = 0;
plus.onclick = function () {
    min++;
    if (min < 10) {
        minutesDisplay.textContent = '0' + min;
    } else {
        minutesDisplay.textContent = min;
    }
}

minus.onclick = function () {
    if (min > 0) {
        min--;
        if (min < 10) {
            minutesDisplay.textContent = '0' + min;
        } else {
            minutesDisplay.textContent = min;
        }
    }
}

let startCD = getSel('.startCD');
let stopCD = getSel('.stopCD');
let resetCD = getSel('.resetCD');
let countDownDisplay = getSel('.countDownDisplay');
let stopTimerCD;
let timerCount;
let hh = 0;
let mm = 0;
let ss = 0;

countDownDisplay.textContent = '00:00';

function timerCD() {
    let currentTime = new Date();
    timer = new Date(finishTimerCD - currentTime);
    hh = timer.getUTCHours();
    mm = timer.getMinutes();
    ss = timer.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    countDownDisplay.textContent = `${hh}:${mm}:${ss}`;
    if (hh == 0 && mm == 0 && ss == 0) {
        countDownDisplay.textContent = 'timeout';
        countDownDisplay.style.color = 'red';
        clearInterval(timerCount);
        startCD.disabled = true;
        stopCD.disabled = true;
    }
}


startCD.onclick = function () {
    if (min > 0) {
        startTimerCD = new Date();
        finishTimerCD = new Date(startTimerCD.getTime() + (min * 60 * 1000));
        if (stopTimerCD > 0) {
            finishTimerCD = new Date(startTimerCD.getTime() + timer.getTime());
        }
        console.log(finishTimerCD);

        timerCount = setInterval(timerCD, 1000);
        startCD.disabled = true;
        stopCD.disabled = false;
    }
}

stopCD.onclick = function () {
    if (timerCount) {
        stopTimerCD = new Date();
        clearInterval(timerCount);
        startCD.disabled = false;
        stopCD.disabled = true;
    }
}

resetCD.onclick = function () {
    countDownDisplay.textContent = '00:00';
    clearInterval(timerCount);
    stopTimerCD = 0;
    startCD.disabled = false;
    stopCD.disabled = true;
}