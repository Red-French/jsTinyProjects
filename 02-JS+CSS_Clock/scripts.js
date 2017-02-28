(function() {
'use strict';

  let now = null;
  let seconds = null;
  let thisMinute = null;
  let thisHour = null;
  let secondsDegrees = null;
  let thisMinuteDegrees = null;
  let thisHourDegrees = null;

  let secondHand = document.querySelector('.secondHand');  // querySelector returns a nodelist
  let minuteHand = document.querySelector('.minuteHand');
  let hourHand = document.querySelector('.hourHand');

  function setDate() {
    now = new Date();
    seconds = now.getSeconds();
    thisMinute = now.getMinutes();
    thisHour = now.getHours();

    secondsDegrees = ((seconds / 60) * 360) + 90;  // Calculate degree position of second hand (default is 270 degrees).
                                                         // seconds/60 = percentage; then multiply by 360 degrees for hand position.
                                                         // The second hand, to be at the 12 o'clock position, should be 90 degrees beyond the 270-degree default, so 90 is added.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    thisMinuteDegrees = ((thisMinute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${thisMinuteDegrees}deg)`;


    thisHourDegrees = ((thisHour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${thisHourDegrees}deg)`;

  }
  setInterval(setDate, 1000);

})();
