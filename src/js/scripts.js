import "../components/index.jsx";

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
let isPortrait = window.matchMedia( "(max-aspect-ratio: 1/1)" ).matches;
const body = document.getElementsByTagName("body")[0];
const header = document.getElementsByTagName("nav")[0];

const containerMenu = document.getElementsByClassName("containerMenu")[0];
const buttonMenu = document.getElementsByClassName("buttonMenu");
const buttonMenu_stack = document.getElementById("buttonMenu_stack");

const screenshotContainers = document.getElementsByClassName("screenshotContainer");
const screenshots = document.getElementsByClassName("imgScreenshot");
const frontScreens = document.getElementsByClassName("frontScreen");

// ===================================== EXTRAS =========================================
// ======================================================================================

// ==================================== FUNCTIONS =======================================
// ======================================================================================

function hasClass(element, cls) {
    return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}
function replaceClass(classList,className1,className2){
    // This function will replace className1 with className2
    classList.add(className2);
    classList.remove(className1);
}

function hideMenu(){
    menuShow = false;
    replaceClass(containerMenu.classList,"containerMenu_shown","containerMenu_hidden");
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
    replaceClass(containerMenu.classList,"containerMenu_hidden","containerMenu_shown");
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
        if(!menuShow && isPortrait){
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

function listener_pageReload(){
    location.reload();
}
// ==================================== LISTENERS =======================================
// ======================================================================================

document.addEventListener("scroll", listener_toggleMenu, false);

buttonMenu_stack.addEventListener("click", listener_overrideToggleMenu, false);
if(!isPortrait){
    buttonMenu_stack.addEventListener("mouseover", listener_overrideToggleMenu, false);
    containerMenu.addEventListener("mouseleave", hideMenu, false);
}

// mq.addListener(listener_pageReload);
// ===================================== ONLOAD =========================================
// ======================================================================================

window.onload = function(){
    replaceClass(body.classList,"removed","animation__fadePage");
}
// window.setTimeout(e=>{},100);
