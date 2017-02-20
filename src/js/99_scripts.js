// ===================================== EXAMPLES =======================================
// ======================================================================================
//
// function exampleFunction(){
//     console.log("Example Output");
// }
//
// let example_id = document.getElementById("example_id");
// example_id.addEventListener("click", listener_exampleFunction, false);

function listener_characterHover(element){
    for(let i = 0; i < characters.length; i++){ characters[i].classList.remove("character_walk"); }
    element.target.classList.add("character_walk");

    elements = document.getElementsByClassName("aboutCharacter");
    for(let i = 0; i < elements.length; i++){ elements[i].style.display = "none"; }
    if(element.target.id === "spriteCat"){ document.getElementById("aboutCat").style.display = "block"; }
    if(element.target.id === "spriteLuis"){ document.getElementById("aboutLuis").style.display = "block"; }
    if(element.target.id === "spriteLaurence"){ document.getElementById("aboutLaurence").style.display = "block"; }
    if(element.target.id === "spriteTadeja"){ document.getElementById("aboutTadeja").style.display = "block"; }

    // console.log(`Hovered over ${element.target.id}`);
}

// ======================================= TEST =========================================
// ======================================================================================

function test(){ console.log("Test Function"); }

// ===================================== EXTRAS =========================================
// ======================================================================================

window.sr = ScrollReveal({ distance: '0', opacity: 0.5, origin: 'left', reset: true, scale: 1, viewFactor: 1.5 });
sr.reveal('.imgScreenshot');

// ==================================== FUNCTIONS =======================================
// ======================================================================================

function listener_toggleDescription(element){

}

// ==================================== LISTENERS =======================================
// ======================================================================================

const screenshotContainer = document.getElementsByClassName("screenshotContainer")[0];
screenshotContainer.addEventListener("click", listener_toggleDescription, false);
