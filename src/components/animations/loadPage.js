'use strict';

window.addEventListener('load', function () {
  const text = document.querySelectorAll('.title-transition')[0];    
  const height = window.innerHeight / 1.5;
  const distance = text.getBoundingClientRect().top;
  text.classList.add('fade_up');

  distance <= height ? text.classList.add('aparece') : text.classList.remove('aparece');    
});