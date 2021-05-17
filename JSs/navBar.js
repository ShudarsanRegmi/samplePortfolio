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
    // Detecting the current page and highlighting the page reference in nav bar
let path = window.location.pathname; // Detecting current page
let page = path.split("/").pop();
// Getting all navigation menu elements
let navButtons = navLinks.children[0].children;
switch (page) {
    case "index.html":
        navButtons[0].style.backgroundColor = "red";
        break;
    case "me.html":
        navButtons[1].style.backgroundColor = "red";
        break;
    case "blogs.html":
        navButtons[2].style.backgroundColor = "red";
        break;
    case "research.html":
        navButtons[3].style.backgroundColor = "red";
        break;
    case "contacts.html":
        navButtons[4].style.backgroundColor = "red";
        break;
}
// making preloader in this file because all html pages are linked to this script
window.onload = function() {
    document.getElementById("bodyOverlay").style.display = "none";
}