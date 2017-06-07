(function() {
'use strict';

  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  let lastChecked;

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


  function handleCheck(e) {
    let between = false;

    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
          between = !between;
        }

        if (between) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  }

})();
