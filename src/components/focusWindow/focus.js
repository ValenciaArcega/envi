'use strict';

let currentTitle = document.title;

window.addEventListener('blur', () => {
  currentTitle = document.title;
  document.title = 'Back to Learn !'
});

window.addEventListener('focus', () => { 
  document.title = currentTitle
});