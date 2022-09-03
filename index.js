let navBarLinks = document.querySelectorAll('nav a');
let headers = document.querySelector('#Das');

let navBar = document.querySelector('#navBarParent');
let navPos = navBar.getBoundingClientRect().top;

function onClick() {
  document.querySelector('#menu').classList.toggle('hamburger');
  document.querySelector('#navBar').classList.toggle('hamburger');
}
document.querySelector('#menu').classList.add('visable');

const whoMadeThis = () => {
  console.log("Will Carroll Hamilton");
};



window.addEventListener('scroll', (e) => {
  scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navBar.classList.add('sticky');
    document.querySelector('#menu').classList.remove('visable');
  } else {
    document.querySelector('#menu').classList.add('visable');
    navBar.classList.remove('sticky');
  }
  let tmp = {};
  navBarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    let calc = section.offsetTop + section.clientHeight - scrollPos;
    if (calc <= 0) calc = 99999999999999;
    tmp[section.id] = calc;
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.clientHeight
    ) {
      link.parentElement.classList.add('active');
    } else {
      link.parentElement.classList.remove('active');
    }
  });
  let key = Object.keys(tmp).reduce((key, v) => (tmp[v] < tmp[key] ? v : key)); // copyed from stackoverflow, get the min value in an object and return the key
  document.querySelector('#navBar > li').classList.remove('active');
  document
    .querySelector(`[href="#${key}"]`)
    .parentElement.classList.add('active');
});
