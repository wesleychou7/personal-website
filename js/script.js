// Get whole
const whole = document.querySelector(".whole");

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
console.log(sections);

// Add an event listener listening for scroll
whole.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get height of each section (every section has same height)
    const sectionHeight = sections[0].offsetHeight;

    // Get current scroll position
    let scrollY = whole.scrollTop;

    // Get current section number (0 - 5)
    let sectionNumber = Math.floor(scrollY / sectionHeight);

    // Enable "active" class on the navlink of the section corresponding to sectionNumber
    document.querySelector('[href="#' + sections[sectionNumber].id + '"] li')
    .classList.add("active");

    // Disable "active" class on other navlinks
    for (let i = 0; i < sections.length; i++){
        if (sections[i] != sections[sectionNumber]){
            document.querySelector('[href="#' + sections[i].id + '"] li')
                .classList.remove("active");
        }
    }
}
navHighlighter();