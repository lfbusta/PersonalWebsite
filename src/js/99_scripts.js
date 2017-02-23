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

// ==================================== VARIABLES =======================================
// ======================================================================================
let menuShow = true;
var mq = window.matchMedia( "(max-aspect-ratio: 1/1)" );
const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("header")[0];

const screenshotContainers = document.getElementsByClassName("screenshotContainer");
const screenshots = document.getElementsByClassName("imgScreenshot");
const descriptionContainers = document.getElementsByClassName("descriptionContainer");
const frontScreens = document.getElementsByClassName("frontScreen");
const menu = document.getElementsByClassName("menu")[0];
const buttonMenu = document.getElementsByClassName("buttonMenu");
const buttonMenu_stack = document.getElementById("buttonMenu_stack");

// ===================================== EXTRAS =========================================
// ======================================================================================

if(mq.matches){
    window.sr = ScrollReveal({ distance: '0', opacity: 0.5, origin: 'left', reset: true, scale: 1, viewFactor: 1.2 });
    sr.reveal('.horContainer');
} else{
    const common = {
        distance: "40vw",
        duration: 1000,
        delay: 0,
        opacity: 0,
        scale: 1,
        reset: true,
        viewFactor: 0.1
    }
    window.sr = ScrollReveal(common);

    const horContainer1s = document.getElementsByClassName("horContainer1");
    const horContainer2s = document.getElementsByClassName("horContainer2");
    for(let i=0; i<horContainer1s.length; i++){
        horContainer1s[i].getElementsByClassName('screenshotContainer')[0].classList.add("slideFirstFromLeft");
        horContainer1s[i].getElementsByClassName('descriptionContainer')[0].classList.add("slideSecondFromRight");
    }
    for(let i=0; i<horContainer2s.length; i++){
        horContainer2s[i].getElementsByClassName('screenshotContainer')[0].classList.add("slideFirstFromRight");
        horContainer2s[i].getElementsByClassName('descriptionContainer')[0].classList.add("slideSecondFromLeft");
    }
    sr.reveal(".slideFirstFromLeft", { origin: "left", delay: 0 });
    sr.reveal(".slideSecondFromRight", { origin: "right", delay: 250 });
    sr.reveal(".slideFirstFromRight", { origin: "right", delay: 0 });
    sr.reveal(".slideSecondFromLeft", { origin: "left", delay: 250 });
}

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
    let screenshot = element.target.parentNode.getElementsByClassName("imgScreenshot")[0];
    let description = element.target.parentNode.getElementsByClassName("descriptionContainer")[0];
    let frontScreen = element.target;
    if(hasClass(element.target,"descriptionShow")){

        screenshot.classList.add("animation__show_screnshot");
        screenshot.classList.remove("animation__hide_screnshot");

        description.classList.add("animation__hide_description");
        description.classList.remove("animation__show_description");

        frontScreen.classList.add("animation__hide_description");
        frontScreen.classList.remove("animation__show_description");
        frontScreen.classList.remove("descriptionShow");

    }
    else {
        screenshot.classList.add("animation__hide_screnshot");
        screenshot.classList.remove("animation__show_screnshot");

        description.classList.add("animation__show_description");
        description.classList.remove("animation__hide_description");

        frontScreen.classList.add("animation__show_description");
        frontScreen.classList.remove("animation__hide_description");
        frontScreen.classList.add("descriptionShow");
    }
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
    if(body.scrollTop < 0.75*header.scrollHeight){
        if(!menuShow && mq.matches){
            showMenu();
        }
    } else if(menuShow){
        hideMenu();
    }
}
function listener_overrideToggleMenu(){
    if(!menuShow){
        showMenu();
    }
    else{
        hideMenu();
    }
}
// ==================================== LISTENERS =======================================
// ======================================================================================

for(let i=0; i<frontScreens.length; i++){ frontScreens[i].addEventListener("click", listener_toggleDescription, false); }
document.addEventListener("scroll", listener_toggleMenu, false);
buttonMenu_stack.addEventListener("click", listener_overrideToggleMenu, false);
buttonMenu_stack.addEventListener("mouseover", listener_overrideToggleMenu, false);

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
