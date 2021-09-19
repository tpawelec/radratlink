// interval for scrolling
let scrollInterval;

// function for fadeout
function fade(element, display) {
    element.classList.toggle("scale--on");
    element.classList.toggle("scale--off")
    
    setTimeout(() => {
        element.classList.toggle("display--hidden");

        if(display === "grid") {
            element.classList.toggle("display--grid");
        } else {
            element.classList.toggle("display--flex")
        }
    }, 200);
    
}

//function for scroll
function scrollDiv(direction) {
    if(direction === "up") {
        scrollInterval = setInterval(() => {
            galleryImages.scrollTop -= 5;
        }, 10)
    } else {
        scrollInterval = setInterval(() => {
            galleryImages.scrollTop += 5;
        }, 10)
    }
}

// link to gallery
const galleryLink = document.querySelector("#galleryLink");

// frame on main page
const frame = document.querySelector("#mainFrame");

// gallery container
const galleryContainer = document.querySelector("#galleryContainer");

// gallery images
const galleryImages = document.querySelector("#galleryImages");

// close gallery button 
const closeGallery = document.querySelector("#closeGallery");


// arrows
const arrowUp = document.querySelector("#arrowUp");
const arrowDown = document.querySelector("#arrowDown");

//class names
const frameHidden = "content__frame--hidden";
const frameOff = "content__frame--off";
galleryLink.addEventListener("click", (event)=> {
    event.preventDefault();

    //frame.classList.remove(frameOn);
    fade(frame, "flex");
    fade(galleryContainer, "grid");

});

closeGallery.addEventListener("click", () => {
    fade(galleryContainer, "grid");
    fade(frame, "flex");
});

// adding images to gallery
images.forEach((el) => {
    let newImg = document.createElement("img");
    newImg.classList.add("images__item");
    newImg.src = el;
    galleryImages.appendChild(newImg);
})

galleryImages.scrollTop = 0;
// scrolling
arrowUp.addEventListener("mousedown", () => {
    scrollDiv("up");
});

arrowUp.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});

arrowDown.addEventListener("mousedown", () => {
    scrollDiv("down");
});

arrowDown.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});

// handler for scrolling

let galleryHeight = galleryImages.scrollHeight - galleryImages.clientHeight;
galleryImages.addEventListener("scroll", (event) => {
    if(galleryImages.scrollTop > 0) {
        arrowUp.style.visibility = "visible";
    } else if(galleryImages.scrollTop === 0) {
        arrowUp.style.visibility = "hidden";
    } else if(galleryImages.scrollTop == galleryHeight) {
        arrowUp.style.visibility = "hidden";
    } else if(galleryImages.scrollTop < galleryHeight) {
        arrowUp.style.visibility = "visible";
    }

    
});

