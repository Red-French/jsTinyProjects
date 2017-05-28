(function() {
'use strict';

  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = '#BADASS';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 7;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  function draw(e) {
      if(!isDrawing) return; // only fire function if moused down
      // console.log(e);

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);  // offsetX and offsetY are coming from the mouseEvent (see in console log)
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];  // destructure array (ES6)
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];  // update lastX and lastY to current mouse position
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

})();
