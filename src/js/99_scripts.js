// ===================================== EXAMPLES =======================================
// ======================================================================================
//
// function exampleFunction(){
//     console.log("Example Output");
// }
//
// let example_id = document.getElementById("example_id");
// example_id.addEventListener("click", listener_exampleFunction, false);

// ======================================= TEST =========================================
// ======================================================================================

function test(){ console.log("Test Function"); }

// ===================================== EXTRAS =========================================
// ======================================================================================

window.sr = ScrollReveal({ distance: '0', opacity: 0.5, origin: 'left', reset: true, scale: 1, viewFactor: 1.2 });
sr.reveal('.screenshotContainer');

// ==================================== VARIABLES =======================================
// ======================================================================================
let menuShow = true;
const body = document.getElementsByTagName("body")[0];

const spacerMenu = document.getElementsByClassName("spacerMenu")[0];

const screenshotContainers = document.getElementsByClassName("screenshotContainer");
const screenshots = document.getElementsByClassName("imgScreenshot");
const descriptionContainers = document.getElementsByClassName("descriptionContainer");
const frontScreens = document.getElementsByClassName("frontScreen");
const menu = document.getElementsByClassName("menu")[0];
const buttonMenu = document.getElementsByClassName("buttonMenu");
const buttonMenu_stack = document.getElementById("buttonMenu_stack");
// ==================================== FUNCTIONS =======================================
// ======================================================================================

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
function replaceClass(classList,className1,className2){
    // This function will replace className1 with className2
    classList.add(className2);
    classList.remove(className1);
}
function listener_toggleDescription(element){
    let elements = element.target.parentNode.childNodes;
    let screenshot = elements[0];
    let description = elements[0];
    for(let i=0; i<elements.length; i++){
        if(hasClass(elements[i],"imgScreenshot")){
            screenshot = elements[i];
        }
        if(hasClass(elements[i],"descriptionContainer")){
            description = elements[i];
        }
    }
    if(hasClass(element.target,"descriptionShow")){ //Fade description out, blur screenshot out.
        element.target.classList.remove("descriptionShow");
        element.target.classList.remove("animation_unfade");
        element.target.classList.add("animation_fade");
        screenshot.classList.remove("animation_blur");
        screenshot.classList.add("animation_unblur");
        description.classList.remove("animation_unfade");
        description.classList.add("animation_fade");
    } else {
        element.target.classList.add("descriptionShow");
        element.target.classList.add("animation_unfade");
        element.target.classList.remove("animation_fade");
        screenshot.classList.add("animation_blur");
        screenshot.classList.remove("animation_unblur");
        description.classList.add("animation_unfade");
        description.classList.remove("animation_fade");
    }
    // console.log(screenshot.classList);
    // console.log(description.classList);
}

function hideMenu(){
    menuShow = false;
    for(let i=0; i<buttonMenu.length; i++){
        switch(buttonMenu[i].id){
            case "buttonMenu_stack": replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_stack","animation__show_buttonMenu_stack"); break;
            case "buttonMenu_projects": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_projects","animation__hide_buttonMenu_projects"); break;
            case "buttonMenu_blog": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_blog","animation__hide_buttonMenu_blog"); break;
            case "buttonMenu_about": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_about","animation__hide_buttonMenu_about"); break;
            case "buttonMenu_connect": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_connect","animation__hide_buttonMenu_connect"); break;
        }
    }
}
function showMenu(){
    menuShow = true;
    for(let i=0; i<buttonMenu.length; i++){
        switch(buttonMenu[i].id){
            case "buttonMenu_stack": replaceClass(buttonMenu[i].classList,"animation__show_buttonMenu_stack","animation__hide_buttonMenu_stack"); break;
            case "buttonMenu_projects": replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_projects","animation__show_buttonMenu_projects"); break;
            case "buttonMenu_blog": replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_blog","animation__show_buttonMenu_blog"); break;
            case "buttonMenu_about": replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_about","animation__show_buttonMenu_about"); break;
            case "buttonMenu_connect": replaceClass(buttonMenu[i].classList,"animation__hide_buttonMenu_connect","animation__show_buttonMenu_connect"); break;
        }
    }
}
function listener_toggleMenu(){
    if(body.scrollTop < 0.75*spacerMenu.scrollHeight){
        if(!menuShow){
            showMenu();
        }
    } else if(menuShow){
        hideMenu();
    }
}
function listener_overrideToggleMenu(){
    if(!menuShow){
        showMenu()
    }
}
// ==================================== LISTENERS =======================================
// ======================================================================================

for(let i=0; i<frontScreens.length; i++){ frontScreens[i].addEventListener("click", listener_toggleDescription, false); }
document.addEventListener("scroll", listener_toggleMenu, false);
buttonMenu_stack.addEventListener("click", listener_overrideToggleMenu, false);

// ===================================== ONLOAD =========================================
// ======================================================================================

// window.onload = function(){
//     for(let i=0; i<buttonMenu.length; i++){
//         window.setTimeout(e=>{
//             buttonMenu[i].classList.remove("hidden");
//         },200+i*100);
//     }
//     for(let i=0; i<screenshots.length; i++){
//         window.setTimeout(e=>{
//             screenshots[i].classList.remove("hidden");
//         },2000+i*100);
//     }
// }
