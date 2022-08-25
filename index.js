let navBarLinks = document.querySelectorAll('nav a');
let headers = document.querySelector('#Das');

let navBar = document.querySelector('#navBarParent');
let navBarjus = document.querySelector('#navBar');
let navPos = navBar.getBoundingClientRect().top;
let navWil = document.querySelector('#navWil');
navWil.classList.add('inactive');

window.addEventListener('scroll', (e) => {
  scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }

  navBarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.clientHeight
    ) {
      link.parentElement.classList.add('inactive');
    } else {
      link.parentElement.classList.remove('inactive');
    }
  });
  if (scrollPos === 0 || navBarLinks === '#navBar') {
    navWil.classList.add('inactive');
  }
});
