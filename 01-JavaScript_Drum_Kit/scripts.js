(function () {
'use strict';

  // PLAY AUDIO AND ADD STYLE
  function play(e) {
    // check for match of pressed key vs 'data-key' property of div and audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  // using template string to execute JS in 'audio' property
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);  // could've also used:  `div[data-key="$(e.keyCode)"]`
    if (!audio) return;  // if no audio exists for pressed key, end function

    audio.currentTime = 0;  // "rewind" the audio to 0; allows re-playing audio upon keypress even if sound is stil playing
    audio.play();  // without line above, calling audio.play() again before file is finished playing will not re-play the file

    // ADD STYLE CHANGES
    key.classList.add('playing');  // same as jQuery's key.addClass('playing') -- .playing adds some styling to the active key
  };

  // REMOVE STYLE CHANGES
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // if not a 'transoform', skip this step (could use any of the propertyName values here)
    e.target.classList.remove('playing');
  }

  // listen on each key for a transition to end and then fire the callback
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));  // (like the click event, JS has methods to signal transitioning)

  // ~ ENTRY ~
  window.addEventListener('keydown', play);  // on any keypress

})();
