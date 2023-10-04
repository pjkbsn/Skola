// Code here!
/* 
function changeElement() {
    let element = document.querySelector(".art-1  h3")
    element.innerText = "Potato"
    return changeElement;
}

document.querySelector("button").addEventListener("click", changeElement) */;

///////////////
//**1.** Byt *namn* på första hoodien från *Ash* till *Potato*.
//////////////

/*
function changeElement() {
    let element = document.querySelector(".art-1 h3")
    element.innerText = "Potato"
} */

/////////////
////////**2.** Byt *namn* på *Home* till *Start*.
////////////


/* function changeElement() {
    let element = document.querySelector("a")
    element.innerText = "Start";
} */



function changeElement() {
    let element = document.querySelectorAll('a')[2]
    element.innerText = "Mail us"
}

changeElement();

