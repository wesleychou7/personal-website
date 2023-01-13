// Get whole
const whole = document.querySelector(".whole");

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");



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



// On-click copy to clipboard button
function copyToClipboard(){
    // Get the email text
    var copyText = document.getElementById("email");
  
    // Copy the email text to user's clipboard
    navigator.clipboard.writeText(copyText.innerHTML);

    var image = document.getElementById("copy-button-image");
    image.setAttribute("src", "images/green-checkmark.png");
}