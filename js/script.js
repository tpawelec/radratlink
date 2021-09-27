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
let imgIndex;

// close popup
const closePopUp = document.querySelector("#closePopUp");

// animation for loading image in popup

const popUpLoading = document.querySelector(".spinner");

//image in popup
let imgInPopUp;
let prevImg;
let nextImg;

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
const arrowLeft = document.querySelector("#buttonLeft");
const arrowRight = document.querySelector("#buttonRight");
const arrowS = document.querySelectorAll(".imagePopUp__button--left, .imagePopUp__button--right");


// bool for event listener
let eventListener;

// load video in bg
const videoContainer = document.querySelector("#videoBg");
let videoSource = document.createElement("source");
videoSource.src = "../ukladka6D2.mp4";
videoContainer.appendChild(videoSource);

//function for loading image in popup
function loadImg(img, index, swipe) {
    if(imgInPopUp != null) {
        imgInPopUp.remove();
        popUpLoading.style.display = "block";
    }
            imgIndex = index;
            let imagePath = img.src;
            closeGallery.disabled = true;
            imagePopUp.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            setTimeout(() => {
                imagePopUp.style.display = "flex";
            }, 200);
            imgInPopUp = document.createElement("img");
            imgInPopUp.classList.add("imgPopUp");
            imagePath = "images/" + imagePath.split("thumb-").pop();
            if(index === 0) {
                arrowRight.style.visibility = "visible";
                arrowLeft.style.visibility = "hidden";
                arrowRight.setAttribute('data-index', parseInt(index + 1));
                
            } else if (index === imageItems.length - 1) {
                arrowLeft.style.visibility = "visible";
                arrowRight.style.visibility = "hidden";
                arrowLeft.setAttribute('data-index', parseInt(index - 1));
            } else {
                arrowLeft.style.visibility = "visible";
                arrowRight.style.visibility = "visible";
                arrowRight.setAttribute('data-index', parseInt(index + 1));
                arrowLeft.setAttribute('data-index', parseInt(index - 1));
            }

            imgInPopUp.onload = () => {
                imagePopUp.appendChild(imgInPopUp);
                if(swipe === "left") {
                    setVendorPrefix(popUpLoading, "transform", "translateX(-999px)");
                    setVendorPrefix(imgInPopUp, "transform", "translateX(-999px)");
                    setTimeout(() => {
                        setVendorPrefix(imgInPopUp, "transform", "translateX(0)");
                    }, 100)
                    console.log("dsfdf")
                } else if(swipe === "right") {
                    setVendorPrefix(popUpLoading, "transform", "translateX(999px)");
                    setVendorPrefix(imgInPopUp, "transform", "translateX(999px)");
                    setTimeout(() => {
                        setVendorPrefix(imgInPopUp, "transform", "translateX(0)");
                    }, 100)
                }
                imgInPopUp.style.visibility = "visible";
                popUpLoading.style.display = "none";
            }
            imgInPopUp.src = imagePath;
            imgInPopUp.alt = "Tattoo Photo";
}

//function for swiping left
function swipeLeft(img, index) {
    imagePopUp.removeEventListener('touchstart', handleTouchStart, false);
    imagePopUp.removeEventListener('touchmove', handleTouchMove, false);
    arrowS.forEach((el) => {
        el.removeEventListener('click', addButtonsListener, false)
    });
    setVendorPrefix(imgInPopUp, "transform", "translateX(999px)");
    setTimeout(() => {
        imgInPopUp.remove();
        setTimeout(() => {
            loadImg(img, index, "left");
        }, 100)
        imagePopUp.addEventListener('touchstart', handleTouchStart, false);
        imagePopUp.addEventListener('touchmove', handleTouchMove, false);
        arrowS.forEach((el) => {
            el.addEventListener('click', addButtonsListener, false)
        });
    }, 100)
}

//function for swiping right
function swipeRight(img, index) {
    imagePopUp.removeEventListener('touchstart', handleTouchStart, false);
    imagePopUp.removeEventListener('touchmove', handleTouchMove, false);
    arrowS.forEach((el) => {
        el.removeEventListener('click', addButtonsListener, false)
    });
    setVendorPrefix(imgInPopUp, "transform", "translateX(-999px)");
    setTimeout(() => {
        imgInPopUp.remove();
        setTimeout(() => {
            loadImg(img, index, "right");
        }, 100)
        imagePopUp.addEventListener('touchstart', handleTouchStart, false);
        imagePopUp.addEventListener('touchmove', handleTouchMove, false);
        arrowS.forEach((el) => {
            el.addEventListener('click', addButtonsListener, false)
        });
    }, 100)
}

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



galleryLink.addEventListener("click", (event)=> {
    event.preventDefault();

    fadeOut(frame, "flex");
    setTimeout(fadeIn(galleryContainer, "grid"), 200);

});

closeGallery.addEventListener("click", () => {
    fadeOut(galleryContainer, "grid");
    setTimeout(fadeIn(frame, "flex"), 200);
});
let videoTag = document.querySelector("video");
// adding images to gallery
let imagesLoop = new Promise((resolve, reject) => {
    images.forEach((el, i) => {
    let newImg = document.createElement("img");
    newImg.classList.add("images__item");
    newImg.src = el;
    galleryImages.appendChild(newImg);

    if(i === images.length - 1) {
        imagesLoaded = true;
        resolve();
        
    }
});
});

imagesLoop.then(() => {
    imageItems = document.querySelectorAll(".images__item");

    imageItems.forEach((item, index) => {
        
        item.addEventListener("click", () => {
            galleryContainer.style['pointer-events'] = "none";
            loadImg(item, index);
            

        })    
    })
});


// previous, next listeners 
arrowS.forEach((el) => {
    el.addEventListener('click', addButtonsListener, false)
})

function addButtonsListener(e) {
    eventListener = true;
        let newIndex;
            if(e.target != e.currentTarget) {
                newIndex = parseInt(e.currentTarget.getAttribute('data-index'));
             } else {
                newIndex = parseInt(e.target.getAttribute('data-index'));
             }
        

        if(newIndex < imgIndex) {
                swipeLeft(imageItems[newIndex], newIndex);
        } else {
            swipeRight(imageItems[newIndex], newIndex);
        }
}
let xDown, yDown;

imagePopUp.addEventListener('touchstart', handleTouchStart, false);
imagePopUp.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(e) {
    const firstTouch = e.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(e) {
    eventListener = true;
    if( !xDown || !yDown) {
        return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if(Math.abs(xDiff) > Math.abs(yDiff)) {
        if(xDiff > 0) {
            if(imgIndex === imageItems.length - 1) {
                return;
            } else {
                //loadImg(imageItems[imgIndex + 1], imgIndex + 1);
                swipeRight(imageItems[imgIndex + 1], imgIndex + 1)
            }
            //right swipe
        } else {
            if(imgIndex === 0) {
                return;
            } else {
                //loadImg(imageItems[imgIndex - 1], imgIndex - 1);
                swipeLeft(imageItems[imgIndex - 1], imgIndex - 1);
            }
            //left swipe
        }
    } else {
        return;
    }
}
// close popup
closePopUp.addEventListener("click", () => {
    imagePopUp.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
    setTimeout(() => {
        imagePopUp.style.display = "none";
        popUpLoading.style.display = "block";
    }, 200);
    imgInPopUp.remove();
    closeGallery.disabled = false;
    galleryContainer.style['pointer-events'] = "initial";
        
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
