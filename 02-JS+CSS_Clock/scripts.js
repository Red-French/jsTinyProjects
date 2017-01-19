(function() {
'use strict';

  let secondHand = document.querySelector('.second-hand');
  let minuteHand = document.querySelector('.min-hand');
  let hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;  // calculate degree position of second hand
                                                         // seconds/60 = percentage; then multiply by 360 degrees for hand position
                                                         // default position of hands is is 270 degrees, and second hand is set to 90 degrees beyond this (12 o'clock position), therefore, 90 degrees is added to calculation
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const thisMinute = now.getMinutes();
    const thisMinuteDegrees = ((thisMinute / 60) * 360) + 90;

    minuteHand.style.transform = `rotate(${thisMinuteDegrees}deg)`;
    console.log(thisMinute);

    const thisHour = now.getHours();
    const thisHourDegrees = ((thisHour / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${thisHourDegrees}deg)`;
    console.log(thisHour);



  }

  setInterval(setDate, 1000);

})();
