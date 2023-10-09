/* if(){};
function(){}; */


/* i = 0 + 1;
i = 1 + 1;
i = 2 + 1; */

for (let i = 0; i <= 10; i = i + 1) {
    console.log(i)
};

const frukt = ["Banan", "Melon", "Kiwi", "Citron", "Apelsin"]

for (let i = 0; i < frukt.length; i++) {
    console.log(frukt[i]);
}

const kostnader = [10000, 2000, 800, 1000, 5000, 4000]
let sum = 0;

for (let i = 0; i < kostnader.length; i++) {
    sum = sum + kostnader[i];
    // sum += kostnader[i];
    console.log(sum)
}


// 1. Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.

for (let i = 0; i < 1000; i++) {
    console.log([i])
}


// 2. Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.

for (let i = 100; i > 0; i--) {
    console.log([i])
}


// 3.Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


// 4. Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i])
}


// 5. Skapa en enkel tabell för multiplikation av ett nummer, till exempel 7:console.log() sjuans gångertabell Ex.7 14 28`` osv.

let num = 7;
for (let i = 0; i < num; i++) {
    answer = i * num;
    console.log(answer)
}

// 6. loopa ut föjande array och skriv ut det på sidan
// Kolla igenom koden och lär dig.

let bodyPage = document.querySelector("body");
let newPage = document.createElement("h1");
const frukter = ["äpple", "banan", "apelsin", "jordgubbe", "kiwi"];

for (let i = 0; i < frukter.length; i++) {
    newPage.textContent = `${newPage.textContent} ${frukter[i]}`;
    bodyPage.appendChild(newPage);
}





