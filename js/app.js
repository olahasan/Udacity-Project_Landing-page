/*
-used the  global  variables to be able to access it from anywhere
- used const because it is a static variable and we don't need to change it
-first const as a continer for <ul> elements
-second const to select All sections and put them in Array because i'll use for loop
*/
const navigationBar = document.getElementById("navbar__list");
const allSections = Array.from(document.querySelectorAll("section"));

/*
-create function that have for loop to make evry section create  new <li> //now we have li for every section
-use innerHTML to list have link to put inside it (id) and when we click on it move to section  
//now wen we click on section on nav move to section 
-put list inside navList and print with appendChild
*/
function createList() {
    for (section of allSections) {
        list = document.createElement("li");
        list.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`
        navigationBar.appendChild(list);

    }
}
/*
-use property  onscroll and give it a function which select all sections  and use forEach that have function with if-else statment
-use getBoundingClientRect as coditional to know if user now on section on screen add your-active-class .else remove your-active-class
*/
createList();
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    });
};

/*
-to make scroll smooth use scrollIntoView  with property behavior smooth that will happen 
when we the event "click" happend so that we used addEventListener
-if we click on the target section which have data nav wich we selected will move to element
 using getElementById  which the section we need
 -used setTimeout to take him time while moving to the section and do not move suddenly and set time as 200 m sec
*/
navigationBar.addEventListener("click", (goToSection) => {
    goToSection.preventDefault();
    if (goToSection.target.dataset.nav) {
        document
            .getElementById(`${goToSection.target.dataset.nav}`)
            .scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            location.hash = `${goToSection.target.dataset.nav}`;

        }, 200);
    }
});

