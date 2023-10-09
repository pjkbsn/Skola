console.log("Hello World")

let pokemons = ["Pikachu", "Abrakadabra", "Charizhard", "Rattata"];





console.log(pokemons);


pokemons.push("Squirtle", "Ekans");

console.log(pokemons);

let remove = pokemons.pop();

console.log(remove);

let positionToRemove = pokemons.indexOf("Charizhard");
pokemons.splice(positionToRemove, 1, "Abra")

console.log(pokemons)

//********************************************* */

// 1. Gör en array som innehåller 5 st olika frukter av datatypen ```string```.

let frukter = ["Banan", "Äpple", "Päron", "Melon", "Kiwi"]

console.log(frukter)


// 2. gör en array som innehåller 3 olika datatyper, ex. ```string```, ```number```, ```array```.

let randomList = [1996, 1, 2, "Philip", "Jakobsson", [3, 4, 5, "Hej", "på", "dig"]]

console.log(randomList)



// 3. ```console.log()``` hur många objekt arrayen ovan innehåller.

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']

console.log(animals.length)

// 4. I arrayen ovan, hämta *cat*.

console.log(animals[0])
console.log(animals.indexOf("cat"))

// 5. I arrayen ovan, hämta *funky chihuahua*.

console.log(animals[3])
console.log(animals.indexOf("funky chihuahua"))

// 6. I arrayen ovan, byt ut *hamster* mot *tiger*.

let removeHamster = animals.indexOf("hamster")
animals.splice(removeHamster, 1, "Tiger")
console.log(animals)

// 7. Lägg ihop nedanstående arrayer.

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);

console.log(c);



// 8. Merga ner array e på index 3 array d.

let d = [1, 2, 3, 7, 8, 9];
let e = [4, 5, 6];
d.splice(3, 0, ...e)
console.log(d)

// 9. *Klona* nedanstående array. 

let arr = ['a', 'b', 'c'];

let abb = [...arr];

console.log(arr, abb)

// 10. Lägg till en frukt i slutet av arrayen nedan.

let fruits = ['kiwi', 'apple', 'pear'];

fruits.push("banana")

console.log(fruits)

// 11. Lägg till en frukt i början av arrayen ovan.

fruits.splice(0, 0, "melon")
console.log(fruits)

console.log(fruits.unshift("MELOON"))

// 12. I arrayen ovan, ta bort sista frukten i arrayen.

fruits.pop();
console.log(fruits);

// 13. I arrayen ovan, ta bort första frukten i arrayen.

fruits.shift();
console.log(fruits)


// 14. Sätt in en frukt i arrayen ovan på index 1.

fruits.splice(1, 0, "banana")
console.log(fruits);

// 15. Sätt in tre frukter i arrayen ovan på index 2.

fruits.splice(2, 0, "melon", "BANAN", "citron");
console.log(fruits);

// 16. I arrayen nedan, ta bort Christoffer och Johan.
let names = ['David', 'Christoffer', 'Johan', 'Maja']

names.splice(1, 2);
console.log(names)


// 17. Spegelvänd på arrayen nedan.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.reverse();
console.log(nums);


// 18. Kika om strängen nedan innehåller bokstaven n.

let str = 'Supercalifragilisticexpialidocious';

console.log(str.includes("n"));

// 19. Kika om strängen ovan innehåller bokstaven x.

console.log(str.includes("x"));

// 20. I ovanstående array, hitta vilket position första förekomsten av p har.

console.log(str.indexOf("p"));

//21. I strängen ovan, plocka fram de 5 första tecknena.

console.log(str.substring(0, 5))

//22. I strängen ovan, plocka fram de 7 sista tecknena.

console.log(str.substring(27))

// 23. I arrayen ovan, filtera fram alla nummer över 5.

//Försök lösa utan funktion


console.log(numArray = [23, 45, 5, 62, 1, 21, 3, 54].filter(num => num >= 6));

// 24. I arrayen ovan, filtera fram alla nummer under 5.



console.log(numArray = [23, 45, 5, 62, 1, 21, 3, 54].filter(num => num <= 6));


// 25. Skriv ut alla namn som är 18 år eller över från arrayen nedan.

let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]






