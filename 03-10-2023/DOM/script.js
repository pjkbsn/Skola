console.log(document);

//1. Välja vad som ska hända
//2. Välja vilket event som skall triggas
//3. Vilket element som skall påverkas


function changeElement() {
    let element = document.querySelector("p");
    element.innerHTML = "A man steals";
    return element;
}

document.querySelector("#btn1").addEventListener("click", changeElement);


/****************************************** */

/********Skapa ett nytt HTML element************/

let paragraph = document.createElement("p");
let text = document.createTextNode("this is a paragraph");
paragraph.appendChild(text);
document.body.appendChild(paragraph);

/*********************** ****************/

function changeStyle() {
    paragraph.style.color = "purple";
    paragraph.style.fontSize = "3rem";
    paragraph.style.fontWeight = "900";

}

document.querySelector("#btn3").addEventListener("click", changeStyle);


