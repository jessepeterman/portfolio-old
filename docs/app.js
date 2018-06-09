const project1 = document.querySelector('.project-1');
const project1Preview = document.querySelector('.project-1-preview');
const aboutMeBtn = document.querySelector('.about-me-nav-button');
const aboutMeDropDown = document.querySelector('.about-me');
const navBtn = document.querySelector('.nav-btn');
const navMenu = document.querySelector('.nav-menu');
const projectsNavButton = document.querySelector('.projects-nav-button');
const aboutMeNavButton = document.querySelector('.projects-nav-button');
const contactInfoNavButton = document.querySelector('.projects-nav-button');
const divider = document.querySelector('.menu-divider-bottom');
const divider2 = document.querySelector('.menu-divider-top');


navBtn.addEventListener('click', (e) => {
  navMenu.classList.toggle('hidden');  
  divider.classList.toggle('hidden');
  divider2.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', (e) => {
  console.log(window.innerWidth);
});

document.addEventListener('touchstart', function addtouchclass(e) { 
  document.documentElement.classList.add('can-touch')
  document.removeEventListener('touchstart', addtouchclass, false)
}, false)