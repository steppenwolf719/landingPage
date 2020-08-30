// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//Show AM PM


//Show Time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12;

    // Output the Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    

    setTimeout(showTime, 1000);
}


//abaixo, colocando zeros na frente dos decimais

//add zero
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n
}

//set Background and Greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        //morning
        document.body.style.backgroundImage = "url('/landingPage/img/manha.jpg')";
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('/landingPage/img/tarde.jpg')";
        greeting.textContent = 'Good Afternoon';   
    } else {
        //evening
        document.body.style.backgroundImage = "url('/landingPage/img/noite.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// get name

function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]'
    }   else{
        name.textContent = localStorage.getItem('name')
    }
}

// Set Name

function setName(e) {
    if(e.type === 'keypress') {

        //make sure enter is pressed
        if(e.wich == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText)
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}


// get focus

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.wich == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText)
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus)

// Run
showTime();
setBgGreet();
getName();
getFocus();