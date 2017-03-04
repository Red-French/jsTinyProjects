const panels = document.querySelectorAll(".panel");  // get all panels

panels.forEach(panel => panel.addEventListener("click", toggleOpen));  // listen to each panel
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

function toggleOpen() {
  this.classList.toggle("open");  // toggle 'open' class
                                  // The classList property returns the class name(s) of an element as a DOMTokenList object
                                  // This property is useful to add, remove and toggle CSS classes on an element
}

function toggleActive(event) {
  console.log(event.propertyName);  // see what's being transitioned
  // this.classList.toggle("open-active");  // will not work because there's more than one transitionend event is being fired
  // if(event.propertyName === "flex-grow")  // note:  Safari lists only 'flex' as a transition and not 'flex-grow'

  if(event.propertyName.includes("flex")) {  // write it this way for cross-browser compatibility
    this.classList.toggle("open-active");  // toggle 'open-active' class
  }
}
