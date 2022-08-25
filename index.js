let navBarLinks = document.querySelectorAll('nav a');
let headers = document.querySelector('#Das');

let navBar = document.querySelector('#navBarParent');
let navBarjus = document.querySelector('#navBar');
let navPos = navBar.getBoundingClientRect().top;

window.addEventListener('scroll', (e) => {
  scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navBar.classList.add('sticky');
    headers.classList.add('navbarOffsetMargin');
  } else {
    navBar.classList.remove('sticky');
    headers.classList.remove('navbarOffsetMargin');
  }

  navBarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    // console.log(link.hash);
    if (
      scrollPos + 100 > section.offsetTop &&
      scrollPos + 100 < section.offsetTop + section.offsetHeight
    ) {
      link.parentElement.classList.add('inactive');
    } else {
      link.parentElement.classList.remove('inactive');
    }
  });
});
