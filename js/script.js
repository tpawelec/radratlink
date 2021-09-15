// link to gallery
const gallery = document.querySelector("#galleryLink");

// frame on main page
const frame = document.querySelector("#mainFrame");

//class names
const frameHidden = "content__frame--hidden";
const frameOff = "content__frame--off";
const frameClass = "content__frame";
gallery.addEventListener("click", (event)=> {
    event.preventDefault();

    //frame.classList.remove(frameOn);
    frame.classList.toggle(frameOff);
    console.log("click");

    frame.addEventListener("transitionend", (event) => {
        console.log("ended");
        frame.classList.toggle(frameHidden);
    })
})

