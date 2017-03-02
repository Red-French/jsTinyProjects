# JavaScript Drum Kit
A drum kit built for the keyboard using straight JavaScript.

data-
(In JavaScript, you can create your own attribute)
The ‘data’ attribute was brought about in HTML when people were making up their own attributes.  For example, things like ‘src’ and ‘class’ are standard attributes, but then people started making up their own attributes, so the creators of HTML came up with ‘data’ attributes, where if you want to make your own attribute, you have to put it behind the ‘data’ attribute (data-yourhomemadeattributehere).

data-key attribute
`<div data-key=“65"><kbd>A</kbd><span>clap</span></div>
<audio data-key="65" src="sounds/clap.wav"></audio>`

In JavaScript, you can create your own attribute.  Just add “data-“ in front of it; so ‘data-key’ above is a homemade attribute!

Write a script so that when the div of data-key 65 is pressed, the corresponding audio of data-key 65 is triggered.

`window.addEventListener(‘keydown", function(e) {
    const audio = document.querySelector(`audio[data-key=“$ {e.keyCode}“ ] ` );
}`

audio
play( ) method starts playing the current audio or video.
pause( ) method pauses the current audio/video.
loop property to loop the audio.

`var vid = document.getElementById("myVideo");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}`

_______________________________

var audio = new Audio('./sounds/crowd.wav');
audio.loop = true;
audio.play( );


transitionend
Like the click event, JS has methods to signal transitioning.  The transitionend event is fired when a CSS transition has completed.

ex:
`key.classList.add('playing’);  // this class adds styling with a transition time

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;  // if not a 'transform', skip this step
    e.target.classList.remove('playing');
  }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));  // when transition ends, removeTransition function fires`
