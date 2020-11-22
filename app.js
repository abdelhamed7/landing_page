
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
const UL=document.querySelector('#navbar__list');
const sections=document.querySelectorAll('section');
sections.forEach(section => {
    const lis=document.createElement('li');
    
    const links=document.createElement('a');
    links.href=section.id;
    console.log(links.href);
    const text=section.getAttribute('data-nav');
    links.textContent=text;
    links.classList.add('menu__link');
    lis.appendChild(links);
    UL.appendChild(lis);
    // links.addEventListener('click',()=>{
    //   const scroll=document.getElementsByTagName(section.getAttribute('data-nav'));
    //   scroll.scrollIntoView({behavior:'smooth',block:'start'});
    // })
    
});
  // links.addEventLinster('click',()=>{
  //   let dataNavs=document.getElementById
  // })


// document.body.addEventListener('click', e=> {console.log(e.target)})
// links.addEventListener('click',function(){
//     scrollTo
// })
// for (var i = 0; i < sections.length; i++) {
//     sections[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("your-active-class");
//       current[0].className = current[0].className.replace(" your-active-class", "");
//       this.className += " your-active-class";
//     });
//   }

 