'use strict';

window.addEventListener('scroll', function () {
    const text = document.querySelectorAll('.word-transition')[0];
    const height = window.innerHeight / 1.2;
    const distance = text.getBoundingClientRect().top;

    text.classList.add('fade_up');

    distance <= height ? text.classList.add('aparece') : text.classList.remove('aparece');
});