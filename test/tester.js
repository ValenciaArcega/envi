'use strict';

let viewPort = window.matchMedia("(max-width: 569px)");
// dom elements
const navBar = document.querySelector('.topBar');

const mediaScreen = (y) => {
  if (y.matches) {
    navBar.classList.add('downBar');
    navBar.classList.remove('topBar');
  } else {
    navBar.classList.remove('downBar');
    navBar.classList.add('topBar');
  }
}
mediaScreen(viewPort)
viewPort.addListener(mediaScreen)

/*
http://127.0.0.1:5500/test/tester.html
*/