const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');

const USER_LS = 'USERNAME';
const SHOWING_FORM_CN = 'showing-form';
const SHOWING_NAME_CN = 'showing-name';

function init() {
  loadName();
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  if (currentValue.length > 1) {
    saveName(currentValue);
    paintGreeting(currentValue);
  }
}

function askForName() {
  form.classList.add(SHOWING_FORM_CN);
  form.addEventListener('submit', handleSubmit);
}

function checkGreetingKeyword() {
  const greetingWord = [
    [20, 'Good night,'],
    [18, 'Good evening,'],
    [12, 'Good afternoon,'],
    [8, 'Good morning,'],
    [6, 'Whoa, your an early bird!'],
    [0, 'Working late...'],
  ];

  const currentHour = new Date().getHours();

  for (let i = 0; i < greetingWord.length; i++) {
    if (currentHour >= greetingWord[i][0]) {
      return greetingWord[i][1];
    }
  }
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_FORM_CN);
  greeting.classList.add(SHOWING_NAME_CN);
  const greetingWord = checkGreetingKeyword();
  greeting.innerText = `${greetingWord} ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

init();
