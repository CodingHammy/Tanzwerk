let navWil = document.querySelector('#navWil');
let navDas = document.querySelector('#navDas');
let navWas = document.querySelector('#navWas');
let navKon = document.querySelector('#navKon');
let headers = document.querySelector('#Das');

let navBar = document.querySelector('#navBarParent');
let navPos = navBar.getBoundingClientRect().top;
navWil.classList.add('inactive');

window.addEventListener('scroll', (e) => {
  scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos > navPos) {
    navBar.classList.add('sticky');
    headers.classList.add('navbarOffsetMargin');
    navWil.classList.remove('inactive');
  } else {
    navWil.classList.add('inactive');
    navBar.classList.remove('sticky');
    headers.classList.remove('navbarOffsetMargin');
  }
});
