const API_KEY = "Xjlw1kdJEG6Pd95y4mz2NqxhNpfOU9-nAsxFaM2XXfc";

const BASE_URL = "https://api.unsplash.com";


const imagesElem = document.querySelector("#images");

function createImageItem(imageItem) {
    const imageElement = document.createElement(`img`);
    imageElement.setAttribute("src", imageItem.urls.thumb);
    imageElement.setAttribute("alt", imageItem.alt_description);
    imagesElem.append(imageElement);
}

function displayImages(images) {
    for (const image of images) {
        createImageItem(image);
    }
}


async function getPhotos() {
    // client_id är vår API nyckel
    const response = await fetch(
        `${BASE_URL}/search/photos?client_id=${API_KEY}&query_cat`
    );
    const data = await response.json();
    console.log(data)
    displayImages(data.results)
}

getPhotos();


