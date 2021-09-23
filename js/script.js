// interval for scrolling
let scrollInterval;

// gallery images
const galleryImages = document.querySelector("#galleryImages");

// scroll height of gallery
let galleryHeight;

// array of image items
let imageItems;

// image popup 
const imagePopUp = document.querySelector("#imagePopUp");


// close popup
const closePopUp = document.querySelector("#closePopUp");

// animation for loading image in popup

const popUpLoading = document.querySelector(".spinner");

//image in popup
let imgInPopUp;
// function for fadeout 
function fadeOut(element, display) {
    element.classList.toggle("scale--on");
    element.classList.toggle("scale--off")
    
    setTimeout(() => {
        element.classList.toggle("display--hidden");
        if(display === "grid") {
            element.classList.toggle("display--grid");
            galleryImages.scrollTop = 0;
            galleryHeight = galleryImages.scrollHeight - galleryImages.clientHeight;
        } else {
            element.classList.toggle("display--flex");
        }
    }, 150);
    
}

//function for fade in 
function fadeIn(element, display) {
    element.classList.toggle("display--hidden");
    if(display === "grid") {
        element.classList.toggle("display--grid");
        galleryImages.scrollTop = 0;
        galleryHeight = galleryImages.scrollHeight - galleryImages.clientHeight;
    } else {
        element.classList.toggle("display--flex");
    }

    element.classList.toggle("scale--on");
    element.classList.toggle("scale--off")

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

// close gallery button 
const closeGallery = document.querySelector("#closeGallery");

// arrows
const arrowUp = document.querySelector("#arrowUp");
const arrowDown = document.querySelector("#arrowDown");

galleryLink.addEventListener("click", (event)=> {
    event.preventDefault();

    fadeOut(frame, "flex");
    setTimeout(fadeIn(galleryContainer, "grid"), 200);

});

closeGallery.addEventListener("click", () => {
    fadeOut(galleryContainer, "grid");
    setTimeout(fadeIn(frame, "flex"), 200);
});

// adding images to gallery
let imagesLoop = new Promise((resolve, reject) => {
    images.forEach((el, i) => {
    let newImg = document.createElement("img");
    newImg.classList.add("images__item");
    newImg.src = el;
    galleryImages.appendChild(newImg);

    if(i === images.length - 1) {
        resolve();
    }
});
});

imagesLoop.then(() => {
    imageItems = document.querySelectorAll(".images__item");

    imageItems.forEach((item) => {
        item.addEventListener("click", () => {
            let imagePath = item.src;
            closeGallery.disabled = true;
            imagePopUp.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            setTimeout(() => {
                imagePopUp.style.display = "flex";
            }, 200);

            imagePath = "images/" + imagePath.split("thumb-").pop();
            imgInPopUp = document.createElement("img");
            imgInPopUp.classList.add("imgPopUp");
            imgInPopUp.onload = () => {
                imagePopUp.appendChild(imgInPopUp);
                popUpLoading.style.display = "none";
            }
            imgInPopUp.src = imagePath;

        })    
    })
});

// close popup
closePopUp.addEventListener("click", () => {
    imagePopUp.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    setTimeout(() => {
        imagePopUp.style.display = "none";
        popUpLoading.style.display = "block";
    }, 200);
    imgInPopUp.remove();
    closeGallery.disabled = false;
        
})
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

galleryImages.addEventListener("scroll", (event) => {
    if(galleryImages.scrollTop > 0) {
        arrowUp.style.visibility = "visible";
    } else if(galleryImages.scrollTop === 0) {
        arrowUp.style.visibility = "hidden";
        clearInterval(scrollInterval);
    } 
    
    if(galleryImages.scrollTop === galleryHeight) {
        arrowDown.style.visibility = "hidden";
        clearInterval(scrollInterval);
    } else if(galleryImages.scrollTop < galleryHeight) {
        arrowDown.style.visibility = "visible";
    }

});

