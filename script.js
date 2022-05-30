const hoursPointer = document.querySelector('.hand.hours');
const minutesPointer = document.querySelector('.hand.minutes');
const secondsPointer = document.querySelector('.hand.seconds');

const setRotation = (element, rotationPercent) => {
  element.style.setProperty('--rotation', rotationPercent*360);
};

const setClock = () => {
  const currentDate = new Date();
  
  const secondsPercent = currentDate.getSeconds()/60;
  const minutesPercent = (secondsPercent + currentDate.getMinutes())/60;
  const hoursPercent = (minutesPercent + currentDate.getHours())/12;

  setRotation(hoursPointer, hoursPercent);
  setRotation(minutesPointer, minutesPercent);
  setRotation(secondsPointer, secondsPercent);
};

setClock();

setInterval(setClock, 1000);