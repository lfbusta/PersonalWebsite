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

// ==================================== FUNCTIONS =======================================
// ======================================================================================

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
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
        element.target.classList.remove("unfade");
        element.target.classList.add("fade");
        screenshot.classList.remove("blur");
        screenshot.classList.add("unblur");
        description.classList.remove("unfade");
        description.classList.add("fade");
    } else {
        element.target.classList.add("descriptionShow");
        element.target.classList.add("unfade");
        element.target.classList.remove("fade");
        screenshot.classList.add("blur");
        screenshot.classList.remove("unblur");
        description.classList.add("unfade");
        description.classList.remove("fade");
    }
    // console.log(screenshot.classList);
    // console.log(description.classList);
}

// ==================================== LISTENERS =======================================
// ======================================================================================

const screenshots = document.getElementsByClassName("imgScreenshot");
const descriptionContainers = document.getElementsByClassName("descriptionContainer");
const frontScreens = document.getElementsByClassName("frontScreen");
for(let i=0; i<frontScreens.length; i++){ frontScreens[i].addEventListener("click", listener_toggleDescription, false); }
