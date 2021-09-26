//function for vendors
function setVendorPrefix(element, property, value) {
  element.style["webkit" + property] = value;
  element.style["moz" + property] = value;
  element.style["ms" + property] = value;
  element.style["o" + property] = value;
  element.style[property] = value;
}
let timeNeeded;
let loaderBar = document.querySelector(".loader--bar");
let imageAddr = "../images/thumbs/thumb-IMG_20210721_193744_332.jpg";
let downloadSize = 12636; //bytes

let loader = document.querySelector("#loadingScreen");
let content = document.querySelector(".content");

let imagesLoaded;

function InitiateSpeedDetection() {
  window.setTimeout(MeasureConnectionSpeed, 1);
}

if (window.addEventListener) {
  window.addEventListener("load", InitiateSpeedDetection, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", InitiateSpeedDetection);
}
let viewWidth = document.documentElement.clientWidth / 2;
function MeasureConnectionSpeed() {
  let startTime, endTime;
  let download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();

    let duration = (endTime - startTime) / 1000;
    let bitsLoaded = downloadSize * 8;
    let speedBps = (bitsLoaded / duration).toFixed(2);
    let allData = 9033354 + thumbsSize;

    timeNeeded = Math.round(allData / speedBps);
    let value = ("growth " + timeNeeded + "s ease-in infinite").toString();
    
    setVendorPrefix(loaderBar, "animation", value);
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
            loader.remove();
      }, 500);
    
    }, timeNeeded * 1000)
  };
  startTime = new Date().getTime();
  let cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;
  let script = document.createElement("script");
  script.src = "js/script.js";
  document.querySelector("body").appendChild(script);
 

}