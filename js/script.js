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





