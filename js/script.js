// link to gallery
const galleryLink = document.querySelector("#galleryLink");

// frame on main page
const frame = document.querySelector("#mainFrame");

// gallery container
const galleryContainer = document.querySelector("#galleryContainer");

// gallery images
const galleryImages = document.querySelector("#galleryImages");

//class names
const frameHidden = "content__frame--hidden";
const frameOff = "content__frame--off";
galleryLink.addEventListener("click", (event)=> {
    event.preventDefault();

    //frame.classList.remove(frameOn);
    frame.classList.toggle(frameOff);
    console.log("click");

    frame.addEventListener("transitionend", (event) => {
        console.log("ended");
        setTimeout(() => {
            frame.classList.toggle(frameHidden);
        }, 200);
        
        galleryContainer.style.transform = "scale(1)";
        setTimeout(() => {
            galleryContainer.style.display = "grid";
        }, 200);
    })


})





