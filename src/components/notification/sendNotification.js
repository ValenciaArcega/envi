'use strict';

window.addEventListener('load', () => {
  Notification.requestPermission().then(perm => {
    if (perm === "granted") {
      new Notification('Hey explorer !', {
        body: 'Disfruta de cartas aleatorias',
        icon: 'logo.png',
        tag: 'The cards had been chnaged!' // overrite
      });
    } // if
  }); // promise
});