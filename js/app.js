//Defining Global Variables .

const navbar = document.getElementsByClassName('navbar__menu');
const list = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Function To Make The Navbar Items.

function makeNavBar (){
    sections.forEach(function(section){
        let item = document.createElement('li');
        item.innerHTML = `<li><a id ="1${section.id}" href ="#${section.id}" class ="menu__link">${section.dataset.nav}</a>`;
        list.appendChild(item);
    });
}
makeNavBar();

//Function To add class to active section 

function isActive (sec){
    let dimension = sec.getBoundingClientRect();
    return (
        dimension.top <= 150 &&
        dimension.bottom >=150
            );
};

document.addEventListener('scroll', function() {
    sections.forEach(function(section){
        let i =document.getElementById(1+section.id);
        if(isActive(section)){
            section.classList.add("your-active-class");
            i.classList.add("active");
        }else{
            section.classList.remove("your-active-class");
            i.classList.remove("active");
        }
    });
}, false)

// Scrolling by anchore

document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
  
      const move = document.getElementById(
        this.getAttribute("href").substring(1)
      );
      move.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
  });