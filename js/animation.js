window.addEventListener('scroll', function() {

    const text = document.querySelectorAll('.word-transition')[0];
    const $height = window.innerHeight / 1.3;
    const distance = text.getBoundingClientRect().top;

    text.classList.add('fade_up');

    if(distance <= $height) {
        text.classList.add('aparece');
    } else {
        text.classList.remove('aparece');
    }
});


window.addEventListener('load', function() {

    const text = document.querySelectorAll('.title-transition')[0];
    const $height = window.innerHeight / 1.5;
    const distance = text.getBoundingClientRect().top;

    text.classList.add('fade_up');

    if(distance <= $height) {
        text.classList.add('aparece');
    } else {
        text.classList.remove('aparece');
    }
});