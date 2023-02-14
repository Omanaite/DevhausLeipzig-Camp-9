
const mainElement = document.querySelector("main");

const toggleDarkMode = function() {
    mainElement.classList.toggle("dark");
};

const toggleMarginAuto = function() {
    mainElement.classList.toggle("controls");
};

const toggleBgImage = function() {
    mainElement.classList.toggle("background-image");
};

const toggleFontSize = function() {
    mainElement.classList.toggle("large-font");
};

let bodyContainer = document.getElementsByTagName('body')[0].style.fontFamily = 'monospace'

let changeTypography = function (){
    
    if(bodyContainer === 'monospace'){
        document.getElementsByTagName("body")[0].style.fontFamily = 'sans-serif';
        bodyContainer = document.getElementsByTagName('body')[0].style.fontFamily = 'sans-serif'
    }else{
        document.getElementsByTagName("body")[0].style.fontFamily = 'monospace';
        bodyContainer = document.getElementsByTagName('body')[0].style.fontFamily = 'monospace'
    }
    
}

const darkModeButton = document.querySelector("#dark-mode-button");
darkModeButton.addEventListener("click", toggleDarkMode);

const typographyBtn = document.querySelector("#sans-serif-button");
typographyBtn.addEventListener("click", changeTypography);

const center = document.querySelector("#margin-auto-button");
center.addEventListener("click", toggleMarginAuto);

const bgImg = document.querySelector("#background-image-button");
bgImg.addEventListener("click", toggleBgImage);

const LgFont = document.querySelector("#large-font-button");
LgFont.addEventListener("click", toggleFontSize);