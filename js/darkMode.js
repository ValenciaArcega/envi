let rootVariables = document.querySelector(':root');

if (rootVariables) {
  rootVariables.addEventListener('click', function setValor() {
    rootVariables.style.setProperty('--white', '#181818');
    rootVariables.style.setProperty('--grayColor', 'white');
    rootVariables.style.setProperty('--grayBackground', '#121212');
  });
}