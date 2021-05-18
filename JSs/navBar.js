// Grabbing requred elements from html
let barOpener = document.getElementById("barOpener");
let navLinks = document.getElementById("links");
console.log(barOpener, navLinks);

// Adding event listener on barOpener so that it can open navLinks when it is pressed
let barOpen = 0;
barOpener.addEventListener("click", event => {
    if (barOpen % 2 === 0) { // making the bar open on first click and close on secnd click
        navLinks.style.display = "block";
        barOpener.classList.remove("fa-bars");
        barOpener.classList.add("fa-times");
    } else {
        navLinks.style.display = "none";
        barOpener.classList.add("fa-bars");
        barOpener.classList.remove("fa-times");
    }
    barOpen++;
}, false)
let pageName = document.getElementById("pageName"); //Accessing the pagename element of nav bar
// Detecting the current page and highlighting the page reference in nav bar
let path = window.location.pathname; // Detecting current page
let page = path.split("/").pop();
// Getting all navigation menu elements
let navButtons = navLinks.children[0].children;
switch (page) {
    case "index.html":
        navButtons[0].style.backgroundColor = "red";
        pageName.innerText = "Home"; // putting the current page in navbar
        break;
    case "me.html":
        navButtons[1].style.backgroundColor = "red";
        pageName.innerText = "About me";
        break;
    case "blogs.html":
        navButtons[2].style.backgroundColor = "red";
        pageName.innerText = "Blogs";
        break;
    case "research.html":
        navButtons[3].style.backgroundColor = "red";
        pageName.innerText = "Research";
        break;
    case "contacts.html":
        navButtons[4].style.backgroundColor = "red";
        pageName.innerText = "Contacts";
        break;
}
// making preloader in this file because all html pages are linked to this script
window.onload = function() {
        document.getElementById("bodyOverlay").style.display = "none";
    }
    // Working on subheading
let subHeading = document.getElementById("subHeading")
let subHeadings = ["Web Developer", "Programmer", "Network Engineer", "Cybersecurity Expert", "Webapp Pentester"];
let subHeadingChange = 0;
setInterval(() => {
    if (subHeadingChange === 0) {
        subHeading.innerText = subHeadings[0];
        subHeadingChange++;
    } else if (subHeadingChange === 1) {
        subHeading.innerText = subHeadings[1];
        subHeadingChange++;
    } else if (subHeadingChange === 2) {
        subHeading.innerText = subHeadings[2];
        subHeadingChange++;
    } else if (subHeadingChange === 3) {
        subHeading.innerText = subHeadings[3];
        subHeadingChange++;
    } else {
        subHeading.innerText = subHeadings[4];
        subHeadingChange = 0;
    }
}, 4000);