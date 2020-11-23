
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const UL = document.querySelector('#navbar__list');
console.log("UL", UL)

const sections = document.querySelectorAll('section');
console.log("sections", sections)

sections.forEach(section => {
  const lis = document.createElement('li');
  const links = document.createElement('a');
  links.classList.add("link")
  const text = section.getAttribute('data-nav');
  links.textContent = text;
  links.classList.add('menu__link');
  lis.appendChild(links);
  UL.appendChild(lis);
  
})

let links = document.querySelectorAll(".link")
//console.log("links", links)

links.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    //console.log(sections[index])
    document.querySelectorAll(".active").forEach(item => {
      item.classList.toggle("active")
    })

    links[index].classList.add("active")
    sections[index].scrollIntoView({
      behavior: 'smooth'
    });
  })

})


let indexOfSection = 0;

document.addEventListener('wheel', e => {
  if (e.wheelDeltaY > 0 && indexOfSection - 1 >= 0) {
    // wheel up
    sections[indexOfSection].className = '';
    indexOfSection--;
    sections[indexOfSection].className = 'your-active-class';
  } else if (e.wheelDeltaY < 0 && indexOfSection + 1 < sections.length) {
    // wheel down
    sections[indexOfSection].className = '';
    indexOfSection++;
    sections[indexOfSection].className = 'your-active-class';
  }
});
